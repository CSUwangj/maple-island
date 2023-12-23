import { Point } from './point'
import _ from 'lodash'

export const Color = new Map([
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
  [19, 'lightpink'],
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
export const PieceDescription = [
  'lvl60',
  'lvl100',
  'warriorPirate140',
  'mageThiefArcher140',
  'warrior200',
  'archer200',
  'thiefLab200',
  'mage200',
  'pirate200',
  'warrior250',
  'archer250',
  'thief250',
  'mage250',
  'pirate250',
  'xenon250',
  'enhancedLab200',
  'enhancedLab250',
  'lab250'
]

class Piece {
  shape: number[][]
  amount: number
  id: number


  constructor(shape: number[][], amount: number, id: number) {
    this.shape = shape
    this.amount = amount
    this.id = id
  }

  valueOf() {
    return -(this.amount * this.cellCount)
  }

  static createPiece(shape: number[][], amount: number, id: number): Piece {
    return new Piece(shape, amount, id)
  }

  get cellCount(): number {
    let cellCount = 0
    for (let i = 0; i < this.shape.length; ++i) {
      for (let j = 0; j < this.shape[i].length; ++j) {
        if (this.shape[i][j] > 0) {
          cellCount++
        }
      }
    }
    return cellCount
  }

  get pointShape(): PiecePoint[] {
    const pointShape = []
    for (let i = 0; i < this.shape.length; ++i) {
      for (let j = 0; j < this.shape[i].length; ++j) {
        if (this.shape[i][j] === 1) {
          pointShape.push(new PiecePoint(j, i, false))
        } else if (this.shape[i][j] === 2) {
          pointShape.push(new PiecePoint(j, i, true))
        }
      }
    }
    return pointShape
  }

  get offCenter(): number {
    let offCenter = 0
    for (let i = 0; i < this.shape[0].length; i++) {
      if (this.shape[0][i] != 0) {
        offCenter = i
        break
      }
    }
    return offCenter
  }

  get transformations(): Piece[] {
    let transformations = []
    let shape = [...this.shape]
    let newGrid
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 4; j++) {
        newGrid = new Array(shape[0].length).fill(0).map(() => new Array(shape.length).fill(0))
        for (let k = 0; k < shape.length; k++) {
          for (let l = 0; l < shape[0].length; l++) {
            if (shape[k][l] != 0) {
              newGrid[shape[0].length - l - 1][k] = shape[k][l]
            }
          }
        }
        shape = newGrid
        transformations.push(new Piece(shape, this.amount, this.id))
      }
      newGrid = new Array(shape.length).fill(0).map(() => new Array(shape[0].length).fill(0))
      for (let k = 0; k < shape.length; k++) {
        for (let l = 0; l < shape[0].length; l++) {
          if (shape[k][l] != 0) {
            newGrid[shape.length - k - 1][l] = shape[k][l]
          }
        }
      }
      shape = newGrid
    }
    transformations = _.unionWith(transformations, _.isEqual)
    return transformations
  }

  get pointTransformations(): PiecePoint[][] {
    const pointTransformations = []
    for (const piece of this.transformations) {
      pointTransformations.push(piece.pointShape)
    }
    return pointTransformations
  }

  get restrictedTransformations(): Piece[] {
    const restrictedTransformations = []
    for (const piece of this.transformations) {
      if (!piece.shape[0][1 + piece.offCenter] || piece.shape[0][1 + piece.offCenter] === 0) {
        restrictedTransformations.push(piece)
      }
    }
    return restrictedTransformations
  }

  get restrictedPointTransformations(): PiecePoint[][] {
    const restrictedPointTransformations = []
    for (const piece of this.restrictedTransformations) {
      restrictedPointTransformations.push(piece.pointShape)
    }
    return restrictedPointTransformations
  }
}

class PiecePoint extends Point {
  isMiddle: boolean

  constructor(x: number, y: number, isMiddle: boolean) {
    super(x, y)
    this.isMiddle = isMiddle
  }
}

export { Piece, PiecePoint }


