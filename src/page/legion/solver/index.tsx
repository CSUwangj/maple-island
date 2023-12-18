/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled/macro'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from 'models/db'
import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

const initBoard = new Array(20).fill(0).map(() => Array(22).fill(-1))
const color = new Map([
  [-1, 'white'],
  [0, 'grey'],
  [1, 'lightpink'],
  [2, 'lightcoral'],
  [3, 'indianred'],
  [4, 'darkseagreen'],
  [5, 'firebrick'],
  [6, 'mediumseagreen'],
  [7, 'purple'],
  [8, 'dodgerblue'],
  [9, 'lightsteelblue'],
  [10, 'maroon'],
  [11, 'green'],
  [12, 'indigo'],
  [13, 'blue'],
  [14, 'cadetblue'],
  [15, 'mediumpurple'],
  [16, 'aquamarine'],
  [17, 'aquamarine'],
  [18, 'aquamarine'],
  [10, 'lightpink'],
  [20, 'lightcoral'],
  [21, 'indianred'],
  [22, 'darkseagreen'],
  [23, 'firebrick'],
  [24, 'mediumseagreen'],
  [25, 'purple'],
  [26, 'dodgerblue'],
  [27, 'lightsteelblue'],
  [28, 'maroon'],
  [29, 'green'],
  [30, 'indigo'],
  [31, 'blue'],
  [32, 'cadetblue'],
  [33, 'mediumpurple'],
  [34, 'aquamarine'],
  [35, 'aquamarine'],
  [36, 'aquamarine']
])

const Board = styled.table`
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
  border-spacing: 0;
  border-collapse: collapse;
`

const Cell = styled.td`
  width: 25px;
  height: 27px;
  border-style: solid;
  border-width: 1px;`

const states = {
  START: 'start',
  RUNNING: 'running',
  PAUSED: 'paused',
  COMPLETED: 'completed',
}

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

export const Page: React.FC = () => {
  const characters = useLiveQuery(() => db.character.toArray()) ?? []
  const [ board, setBoard ] = useLocalStorage('board', initBoard)
  const [ dragging, setDragging ] = useState(false)
  const [ dragValue, setDragValue ] = useState(0)
  const [ state, setState ] = useState(states.START)
  const [ fillCount, setFillCount ] = useState(board!.map((row) => row.reduce((s, c) => s + c)).reduce((s, c) => s + c))
  useEffect(() => {
    document.documentElement.addEventListener('mouseup', () => {
      setDragging(false)
    })
  }, [setDragging])

  return <Board>
    <tbody>
      {
        board!.map((row, rowIndex) => <tr key={rowIndex}>
          {
            row.map((cell, colIndex) => <Cell 
              key={colIndex}
              style={{'background': `${color.get(cell)}`}}
              onMouseOver={() => {
                if(dragging) {
                  draw(rowIndex, colIndex, dragValue, board as number[][], setBoard, fillCount, setFillCount, state)
                }
              }}
              onMouseDown={() => {
                setDragValue(-1 - board![rowIndex][colIndex])
                draw(rowIndex, colIndex, dragValue, board as number[][], setBoard, fillCount, setFillCount, state)
                setDragging(true)
              }}
            >cell</Cell>)
          }
        </tr>)
      }
    </tbody>
  </Board>
}