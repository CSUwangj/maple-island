/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled/macro'
import { useLiveQuery } from 'dexie-react-hooks'
import _, { sumBy } from 'lodash'
import { Archer, Character, Mage, Pirate, Thief, Warrior } from 'models/Character'
import { db } from 'models/db'
import React, { useEffect, useState, CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from 'react-use'
import { PieceDisplay } from './components/PieceDisplay'
import { LegionSolver } from './legion_solver'
import { Color, Piece } from './model/piece'
import { Point } from './model/point'
import { Pieces } from './pieces'

const HEIGHT = 20
const WIDTH = 22

const initBoard = () => new Array(HEIGHT).fill(0).map(() => new Array(WIDTH).fill(-1))
const initAmount = new Array(18).fill(0)

const Content = styled.div`
  display: flex;
  > :nth-child(1), > :nth-child(3) {
    flex: 1;
  }
`

const Legion = styled.div`
  display: flex;
  flex-direction: column;
`

const Board = styled.table`
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
  border-spacing: 0;
  border-collapse: collapse;
  height: min-content;
`

const Cell = styled.td`
  width: 25px;
  height: 27px;
  border-style: solid;
  border-width: 1px;
`

const states = {
  START: 'start',
  RUNNING: 'running',
  PAUSED: 'paused',
  COMPLETED: 'completed',
}

const Instructions = styled.div`
  margin-left: 30px;
`

const PiecesDisplay = styled.div`
  margin-right: 20px;
`

const InitBorderStyle = () => {
  const styles: CSSProperties[][] = new Array(HEIGHT).fill(0).map(() => new Array(WIDTH).fill(0).map(() => ({borderWidth: '1px'})))
  
  for (let i = 0; i < WIDTH / 2; i++) {
    styles[i][i].borderTopWidth = '3px'
    styles[i][i].borderRightWidth = '3px'
    styles[HEIGHT - i - 1][i].borderBottomWidth = '3px'
    styles[HEIGHT - i - 1][i].borderRightWidth = '3px'
    styles[i][WIDTH - i - 1].borderTopWidth = '3px'
    styles[i][WIDTH - i - 1].borderLeftWidth = '3px'
    styles[HEIGHT - i - 1][WIDTH - i - 1].borderBottomWidth = '3px'
    styles[HEIGHT - i - 1][WIDTH - i - 1].borderLeftWidth = '3px'
  }
  for (let i = 0; i < HEIGHT; i++) {
    styles[i][0].borderLeftWidth = '3px'
    styles[i][WIDTH / 2].borderLeftWidth = '3px'
    styles[i][WIDTH - 1].borderRightWidth = '3px'
  }
  for (let i = 0; i < WIDTH; i++) {
    styles[0][i].borderTopWidth = '3px'
    styles[HEIGHT / 2][i].borderTopWidth = '3px'
    styles[HEIGHT - 1][i].borderBottomWidth = '3px'
  }
  for (let i = HEIGHT / 4; i < 3 * HEIGHT / 4; i++) {
    styles[i][Math.floor(WIDTH / 4)].borderLeftWidth = '3px'
    styles[i][Math.floor(3 * WIDTH / 4)].borderRightWidth = '3px'
  }
  for (let i = Math.ceil(WIDTH / 4); i < Math.floor(3 * WIDTH / 4); i++) {
    styles[HEIGHT / 4][i].borderTopWidth = '3px'
    styles[3 * HEIGHT / 4][i].borderTopWidth = '3px'
  }
  return styles
}

const onMouseOver = (
  i: number,
  j: number, 
  dragValue: number, 
  board: number[][], 
  setBoard: (a: number[][]) => void,
  fillCount: number,
  setFillCount: (a: number) => void,
  state: string
) => {
  if(state != states.START) return
  setFillCount(fillCount + dragValue - board[i][j])
  const newBoard = board.map((row, ii) => {
    if(ii != i) {
      return row
    } else {
      return row.map((cell, jj) => {
        if(jj != j) {
          return cell
        } else {
          return dragValue
        }
      })
    }
  })
  setBoard(newBoard)
}

const setLegion = (characters: Character[], currentAmountArray: number[], setCurrentAmount: (a: number[] | undefined) =>void) => {
  const amountArray = new Array(15).fill(0).concat(currentAmountArray.slice(15))
  for(const character of characters) {
    if(character.level < 60) continue
    if(character.level < 100) {
      amountArray[0] += 1
    } else if (character.level < 140) {
      amountArray[1] += 1
    } else if (character.level < 200) {
      if(Warrior.has(character.job) || Pirate.has(character.job)) {
        amountArray[2] += 1
      } else {
        amountArray[3] += 1
      }
    } else if (character.level < 250) {
      if(Warrior.has(character.job)) {
        amountArray[4] += 1
      }else if(Archer.has(character.job)) {
        amountArray[5] += 1
      }else if(Thief.has(character.job)) {
        amountArray[6] += 1
      }else if(Mage.has(character.job)) {
        amountArray[7] += 1
      }else if(Pirate.has(character.job)) {
        amountArray[8] += 1
      }
    } else {
      if(character.job === 'Xenon') {
        amountArray[14] += 1
      } else if(Warrior.has(character.job)) {
        amountArray[9] += 1
      } else if(Archer.has(character.job)) {
        amountArray[10] += 1
      } else if(Thief.has(character.job)) {
        amountArray[11] += 1
      } else if(Mage.has(character.job)) {
        amountArray[12] += 1
      } else if(Pirate.has(character.job)) {
        amountArray[13] += 1
      }
    }
  }
  setCurrentAmount(amountArray)
}

const drawBoard = (
  legionSolvers: LegionSolver[],
  board: number[][],
  pieceHistory: Point[][],
  setBorderStyles: (a: CSSProperties[][]) => void
) => {
  setBorderStyles(InitBorderStyle())
  colourBoard(legionSolvers, board, pieceHistory, setBorderStyles)
}

const colourBoard = (
  legionSolvers: LegionSolver[],
  board: number[][],
  pieceHistory: Point[][],
  setBorderStyles: (a: CSSProperties[][]) => void
) => {
  const styles: CSSProperties[][] = InitBorderStyle()

  if (pieceHistory.length == 0 && legionSolvers[0]) {
    pieceHistory = legionSolvers[0].history
  }

  for (const piece of pieceHistory) {
    for (let i = 0; i < piece.length; i++) {
      if (board[piece[i].y][piece[i].x - 1] > 0 && (styles[piece[i].y][piece[i].x].borderLeftWidth == '3px' || styles[piece[i].y][piece[i].x - 1].borderRightWidth == '3px')) {
        styles[piece[i].y][piece[i].x].borderLeftWidth = '1px'
        styles[piece[i].y][piece[i].x - 1].borderRightWidth = '1px'
      }
      if (board[piece[i].y - 1] && board[piece[i].y - 1][piece[i].x] > 0 && (styles[piece[i].y][piece[i].x].borderTopWidth == '3px' || styles[piece[i].y - 1][piece[i].x].borderBottomWidth == '3px' )) {
        styles[piece[i].y][piece[i].x].borderTopWidth = '1px'
        styles[piece[i].y - 1][piece[i].x].borderBottomWidth = '1px'
      }
      for (let j = 0; j < piece.length; j++) {
        if (i != j && piece[i].x - 1 == piece[j].x && piece[i].y == piece[j].y) {
          styles[piece[i].y][piece[i].x].borderLeftWidth = '0px'
          if (board[0][piece[i].x - 1]) {
            styles[piece[i].y][piece[i].x - 1].borderRightWidth = '0px'
          }
        }
        if (i != j && piece[i].x == piece[j].x && piece[i].y - 1 == piece[j].y) {
          styles[piece[i].y][piece[i].x].borderTopWidth = '0px'
          if (board[piece[i].y - 1]) {
            styles[piece[i].y - 1][piece[i].x].borderBottomWidth = '0px'
          }
        }
      }
    }
  }
  setBorderStyles(styles)
}


const runSolver = async (
  board: number [][],
  pieces: Piece[],
  setBoard: (a: number[][]) => void,
  setBorderStyles: (a: CSSProperties[][]) => void
) => {
  const newBoard = _.cloneDeep(board)
  const downBoard: number[][] = []
  for (let i = 0; i < HEIGHT; i++) {
    downBoard[i] = []
    for (let j = 0; j < WIDTH; j++) {
      downBoard[i][j] = board[HEIGHT - 1 - i][WIDTH - 1 - j]
    }
  }
  const rightBoard: number[][] = []
  for (let i = 0; i < WIDTH; i++) {
    rightBoard[i] = []
    for (let j = 0; j < HEIGHT; j++) {
      rightBoard[i][j] = board[HEIGHT - j - 1][i]
    }
  }
  const leftBoard: number[][] = []
  for (let i = 0; i < WIDTH; i++) {
    leftBoard[i] = []
    for (let j = 0; j < HEIGHT; j++) {
      leftBoard[i][j] = board[j][WIDTH - 1 - i]
    }
  }

  let pieceHistory: Point[][] = []
  const legionSolvers = []
  legionSolvers.push(new LegionSolver(newBoard, _.cloneDeep(pieces), () => false))
  legionSolvers.push(new LegionSolver(rightBoard, _.cloneDeep(pieces), () => false))
  legionSolvers.push(new LegionSolver(downBoard, _.cloneDeep(pieces), () => false))
  legionSolvers.push(new LegionSolver(leftBoard, _.cloneDeep(pieces), () => false))

  const runRotated = legionSolvers[0].longSpaces.length != 0
  const boardPromise = legionSolvers[0].solve()
  let success
  if (runRotated) {
    const rightBoardPromise = legionSolvers[1].solve()
    const downBoardPromise = legionSolvers[2].solve()
    const leftBoardPromise = legionSolvers[3].solve()
    success = await Promise.race([boardPromise, rightBoardPromise, downBoardPromise, leftBoardPromise])
  } else {
    success = await boardPromise
  }

  for (const solver of legionSolvers) {
    solver.stop()
  }

  if (legionSolvers[0].success !== undefined) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        newBoard[i][j] = legionSolvers[0].board[i][j]
      }
    }
    pieceHistory = legionSolvers[0].history
  } else if (legionSolvers[1].success !== undefined) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        newBoard[i][j] = legionSolvers[1].board[j][WIDTH - 1 - i]
      }
    }

    for (const piece of legionSolvers[1].history) {
      for (const point of piece) {
        const holder = point.y
        point.y = HEIGHT - 1 - point.x
        point.x = holder
      }
    }
    pieceHistory = legionSolvers[1].history
  } else if (legionSolvers[2].success !== undefined) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        newBoard[i][j] = legionSolvers[2].board[HEIGHT - 1 - i][WIDTH - 1 - j]
      }
    }

    for (const piece of legionSolvers[2].history) {
      for (const point of piece) {
        point.y = HEIGHT - 1 - point.y
        point.x = WIDTH - 1 - point.x
      }
    }
    pieceHistory = legionSolvers[2].history
  } else if (legionSolvers[3].success !== undefined) {
    for (let i = 0; i < HEIGHT; i++) {
      for (let j = 0; j < WIDTH; j++) {
        newBoard[i][j] = legionSolvers[3].board[WIDTH - j - 1][i]
      }
    }

    for (const piece of legionSolvers[3].history) {
      for (const point of piece) {
        const holder = point.x
        point.x = WIDTH - 1 - point.y
        point.y = holder
      }
    }
    pieceHistory = legionSolvers[3].history
  }
  if (success) {
    console.log(newBoard)
    setBoard(newBoard)
    drawBoard(legionSolvers, newBoard, pieceHistory, setBorderStyles)
  }
  return success
}


export const Page: React.FC = () => {
  const { t } = useTranslation()
  const characters = useLiveQuery(() => db.character.toArray())
  const [ board, setBoard ] = useLocalStorage('board', initBoard())
  const [ piecesAmount, setPiecesAmount ] = useLocalStorage('pieces', initAmount)
  const [ dragging, setDragging ] = useState(false)
  const [ dragValue, setDragValue ] = useState(0)
  const [ state, setState ] = useState(states.START)
  const [ fillCount, setFillCount ] = useState(board!.map((row) => row.reduce((s, c) => s + c)).reduce((s, c) => s + c))
  const [ borderStyles, setBorderStyles ] = useState(InitBorderStyle)
  const pieces: Piece[] = Pieces.map((piece, index) => Piece.createPiece(piece, piecesAmount![index], index + 1))
  const boardFilledValue = board!.map(row => row.reduce((s, i) => (s + (i !== -1)), 0)).reduce((s: number, i: number) => s + i)
  const currentPiecesValue = pieces.map((piece) => piece.amount * piece.cellCount).reduce((s: number, i: number) => s + i)
  useEffect(() => {
    document.documentElement.addEventListener('mouseup', () => {
      setDragging(false)
    })
  }, [setDragging])

  return <Content>
    <PiecesDisplay>
      {
        pieces.map((piece, index) => <PieceDisplay piece={piece} index={index} key={index} amount={piecesAmount!} setAmount={setPiecesAmount}/>)
      }
      <button onClick={() => setLegion(characters!, piecesAmount!, setPiecesAmount)}>{t('legion.button1')}</button>
      <button>{t('legion.button2')}</button>
      <button onClick={() => setPiecesAmount(initAmount)}>{t('reset')}</button>
    </PiecesDisplay>
    <Legion>

      <Board>
        <tbody>
          {
            board!.map((row, rowIndex) => <tr key={rowIndex}>
              {
                row.map((cell, colIndex) => <Cell
                  key={colIndex}
                  style={{'background': `${Color.get(cell)}`, ...borderStyles[rowIndex][colIndex]}}
                  onMouseOver={() => {
                    if(!dragging) return
                    onMouseOver(rowIndex, colIndex, dragValue, board as number[][], setBoard, fillCount, setFillCount, state)
                  }}
                  onMouseDown={() => {
                    setDragValue(-1 - board![rowIndex][colIndex])
                    onMouseOver(rowIndex, colIndex, dragValue, board as number[][], setBoard, fillCount, setFillCount, state)
                    setDragging(true)
                  }}
                />)
              }
            </tr>)
          }
        </tbody>
      </Board>

      <div id="currentPieces">
        Spaces to be Filled: <span id="currentPiecesValue">{currentPiecesValue}</span>
      </div>
      <div id="boardFilled">
        Board Spaces Filled: <span id="boardFilledValue">{boardFilledValue}</span>
      </div>
      <button onClick={async () => await runSolver(board!, pieces, setBoard, setBorderStyles)}>{t('start')}</button>
      <button onClick={() => {
        setBoard(board!.map(row => row.map(cell => (cell !== -1 ? 0 : -1))))
        setBorderStyles(InitBorderStyle)
      }}>{t('reset')}</button>
      <button onClick={() => setBoard(initBoard())}>{t('clear')}</button>
    </Legion>
    <Instructions>
      <h2>{t('instructions') + t(':')}</h2>
      <div>
        <p>{t('legion.instruction1')}</p>
        <p>{t('legion.instruction2')}</p>
        <p>{t('legion.instruction3')}</p>
        <p>{t('legion.instruction4')}</p>
      </div>
    </Instructions>
  </Content>
}