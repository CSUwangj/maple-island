import { Point } from './point.js'
import _ from 'lodash'

class Piece {
  static curId = 1
  shape: number[][]
  amount: number
  id: number
  _cellCount: number
  _offCenter: number
  _pointShape: any[]
  _transformations: any[]
  _pointTransformations: any[]
  _restrictedTransformations: any[]
  _restrictedPointTransformations: any[]


  constructor(shape: number[][], amount: number, id: number) {
    this.shape = shape
    this.amount = amount
    this.id = id
    this._cellCount = 0
    this._offCenter = 0
    this._pointShape = []
    this._transformations = []
    this._pointTransformations = []
    this._restrictedTransformations = []
    this._restrictedPointTransformations = []
  }

  static createPiece(shape: number[][], amount: number): Piece {
    return new Piece(shape, amount, this.curId++)
  }

  get cellCount(): number {
    for (let i = 0; i < this.shape.length; ++i) {
      for (let j = 0; j < this.shape[i].length; ++j) {
        if (this.shape[i][j] > 0) {
          this._cellCount++
        }
      }
    }
    return this._cellCount
  }

  get pointShape(): PiecePoint[] {
    for (let i = 0; i < this.shape.length; ++i) {
      for (let j = 0; j < this.shape[i].length; ++j) {
        if (this.shape[i][j] == 1) {
          this._pointShape.push(new PiecePoint(j, i, false))
        } else if (this.shape[i][j] == 2) {
          this._pointShape.push(new PiecePoint(j, i, true))
        }
      }
    }
    return this._pointShape
  }

  get offCenter(): number {
    for (let i = 0; i < this.shape[0].length; i++) {
      if (this.shape[0][i] != 0) {
        this._offCenter = i
        break
      }
    }
    return this._offCenter
  }

  get transformations(): Piece[] {
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
        this.transformations.push(new Piece(shape, this.amount, this.id))
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
    this._transformations = _.unionWith(this.transformations, _.isEqual)
    return this._transformations
  }

  get pointTransformations(): PiecePoint[][] {
    for (const piece of this.transformations) {
      this._pointTransformations.push(piece.pointShape)
    }
    return this._pointTransformations
  }

  get restrictedTransformations(): Piece[] {
    for (const piece of this.transformations) {
      if (!piece.shape[0][1 + piece.offCenter] || piece.shape[0][1 + piece.offCenter] == 0) {
        this._restrictedTransformations.push(piece)
      }
    }
    return this._restrictedTransformations
  }

  get restrictedPointTransformations(): PiecePoint[][] {
    Object.defineProperty(this, "restrictedPointTransformations", { value: [] })
    for (const piece of this.restrictedTransformations) {
      this._restrictedPointTransformations.push(piece.pointShape)
    }
    return this._restrictedPointTransformations
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


