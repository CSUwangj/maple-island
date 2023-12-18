/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled/macro'
import { useLiveQuery } from 'dexie-react-hooks'
import { Archer, Character, Mage, Pirate, Thief, Warrior } from 'models/Character'
import { db } from 'models/db'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from 'react-use'
import { PieceDisplay } from './components/PieceDisplay'
import { Color, Piece } from './model/piece'
import { Pieces } from './pieces'

const initBoard = new Array(20).fill(0).map(() => Array(22).fill(-1))
const initAmount = new Array(18).fill(0)


const Content = styled.div`
  display: flex;
  > :nth-child(1), > :nth-child(3) {
    flex: 1;
  }
`

const PiecesDisplay = styled.div`
  margin-right: 20px;
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

const draw = (
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
      if(character.job == 'Xenon') {
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

export const Page: React.FC = () => {
  const { t } = useTranslation()
  const characters = useLiveQuery(() => db.character.toArray())
  const [ board, setBoard ] = useLocalStorage('board', initBoard)
  const [ piecesAmount, setPiecesAmount ] = useLocalStorage('pieces', initAmount)
  const [ dragging, setDragging ] = useState(false)
  const [ dragValue, setDragValue ] = useState(0)
  const [ state, setState ] = useState(states.START)
  const [ fillCount, setFillCount ] = useState(board!.map((row) => row.reduce((s, c) => s + c)).reduce((s, c) => s + c))
  const pieces: Piece[] = Pieces.map((piece, index) => Piece.createPiece(piece, piecesAmount![index]))
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
      <button onClick={() => setLegion(characters!, piecesAmount!, setPiecesAmount)}>{t('fill with my legion(auto calculate legion rank)')}</button>
      <button>{t('fill with my legion(ignore character limit)')}</button>
    </PiecesDisplay>
    <Board>
      <tbody>
        {
          board!.map((row, rowIndex) => <tr key={rowIndex}>
            {
              row.map((cell, colIndex) => <Cell 
                key={colIndex}
                style={{'background': `${Color.get(cell)}`}}
                onMouseOver={() => {
                  if(!dragging) return
                  draw(rowIndex, colIndex, dragValue, board as number[][], setBoard, fillCount, setFillCount, state)
                }}
                onMouseDown={() => {
                  setDragValue(-1 - board![rowIndex][colIndex])
                  draw(rowIndex, colIndex, dragValue, board as number[][], setBoard, fillCount, setFillCount, state)
                  setDragging(true)
                }}
              />)
            }
          </tr>)
        }
      </tbody>
    </Board>
    <Instructions>
      <h2>{t('Instructions') + t(':')}</h2>
      <div>
        <p>{t('1. Click the grid spaces you want to be filled, the region click will help you fill it in faster.')}</p>
        <p>{t('2. Input the amount of each shape you want to be filled in the board.')}</p>
        <p>{t('3. The space that the pieces take up should equal the amount of grid spaces you filled, \'although the program will still try to run otherwise.')}</p>
        <p>{t('4. When you press Start the program will try to fill the board spaces with the pieces you\'ve chosen, click on Live Solve if you want to see the board filled in real time.')}</p>
      </div>
    </Instructions>
  </Content>
}