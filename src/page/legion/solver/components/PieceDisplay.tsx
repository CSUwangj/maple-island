import styled from "@emotion/styled/macro"
import React from "react"
import { useTranslation } from "react-i18next"
import { Color, Piece, PieceDescription } from "../model/piece"

interface PieceDisplayProps {
  index: number
  piece: Piece
  amount: number[]
  setAmount: (a: number[]) => void
}

const PieceSelector = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: flex-end;
`

const PieceDisplayDiv = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`

const PieceDescriptionDiv = styled.div`
  padding-right: 15px;
`

const PieceCell = styled.td`
  width: 9px;
  height: 9px;
  border-style: solid;
  border-width: 0px;
`

const PieceAmountInput = styled.input`
  width: 50px;
  height: 20px;
  margin-left: 10px;
`


export const PieceDisplay:React.FC<PieceDisplayProps> = ({index, piece, amount, setAmount}) => {
  const { t } = useTranslation()
  return <PieceSelector>
    <PieceDescriptionDiv>{t(`legion.${PieceDescription[index]}`)}</PieceDescriptionDiv>
    <label htmlFor={`piece${index}`}>
      <PieceDisplayDiv>
        <tbody>
          {piece.shape.map((r, i) => <tr key={i}>
            {r.map((d, i) => <PieceCell
              key={i}
              style={{ 'background': d ? `${Color.get(index + 1)}` : ''}}
            ></PieceCell>)}
          </tr>)}
        </tbody>
      </PieceDisplayDiv>
    </label>
    <PieceAmountInput
      id={`piece${index}`}
      type='number'
      min={0}
      value={amount[index]}
      onChange={(e) =>setAmount(amount.map((a, i) => (i === index ? parseInt(e.target.value) : a)))}
    />
  </PieceSelector>
}
