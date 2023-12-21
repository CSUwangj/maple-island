import styled from '@emotion/styled/macro'
import React from 'react'
import { confirmDialog } from 'primereact/confirmdialog'
import { Toast } from 'primereact/toast'

const Info = styled.div`
  width:300px;
  height:190px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,0.7);
  background:rgba(0, 0, 0, 0.7);
  box-shadow:1px 1px 2px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), inset 0 10px 10px rgba(255, 255, 255, 0.4);
	font-family:"Helvetica Neue","Helvetica",Arial,sans-serif;
`

const BoxTitle = styled.div`
  text-align: center;
	padding: 0px 10px;
	position: absolute;
	font-family: "Audiowide", consolas, monospace;
	font-size: 8px;
	line-height: 20px;
	width: 280px;
	color: #ffcb05;
	text-transform: uppercase;
	text-shadow: 0 0 3px #000;
`

const InfoBox = styled.div`
  margin: 4px;
	margin-top: 20px;
	padding: 5px;
	background: #fff;
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6),
		          inset -20px 0 20px rgba(0, 0, 0, 0.1);
	height: 145px;
	border-radius: 5px;
	overflow: hidden;
`

const Buttons = styled.div`
  width: 283px;
	padding-left: 100px;
	margin-left: 2px;
	height: 45px;
	margin-top: -5px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.35);
	background: transparent;
	position: absolute;
	padding-bottom: 3px;
	z-index: 1;
	overflow: hidden;
	border-top-right-radius: 5px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: inset -20px 0 20px rgba(0, 0, 0, 0.2),
                inset 0 -3px 5px rgba(0, 0, 0, 0.1);
    z-index: 0;
    left: 0;
  }
`

const RemoveButton = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(122, 0, 41, 0.5);
  color: #fff;
  padding: 2px 3px;
  line-height: 14px;
  text-align: right;
  display: inline-block;
  font-size: 8px;
  height: ;
  text-transform: uppercase;
  font-family: "londonmidlandregular",consolas,monospace;
  margin-left: 5px;
  margin-top: 3px;
  border-radius: 4px;
`
const UpdateButton = styled.div`
  position: absolute;
  z-index: 2;
  background: rgba(0, 134, 253, 0.5);
  color: #fff;
  padding: 2px 3px;
  line-height: 14px;
  text-align: right;
  display: inline-block;
  font-size: 8px;
  height: ;
  text-transform: uppercase;
  font-family: "londonmidlandregular",consolas,monospace;
  margin-left: 5px;
  margin-top: 3px;
  border-radius: 4px;;
  bottom: 3px;
`

const Character = styled.div`
  position: absolute;
	width: 100px;
	border: 1px solid rgba(0, 0, 0, 0.35);
	border-radius: 5px;
	height: 135px;
	margin: 0px;
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.35);
	z-index: 5;
	background: #fff;
`
const CharacterImg = styled.img`
  position: absolute;
	bottom: 28px;
	z-index: 1;
`

const Shadow = styled.div`
  position: absolute;
	width: 40px;
	height: 5px;
	border-radius: 90%;
	box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3);
	margin-left: 27px;
	margin-top: 92px;
	background: #fff;
`

const Name = styled.div`
  position: absolute;
	margin: 3px;
	border-radius: 5px;
	padding: 0px;
	border: 3px double #529ecc;
	height: 20px;
	line-height: 20px;
	width: 88px;
	margin-top: 110px;
	font-family: helvetica;
	font-size: 12px;
	text-align: center;
	letter-spacing: 0.5px;
	color: #fff;
`

const NameText = styled.div`
  background:#5ac9e1;
  box-shadow: inset 0 -8px 8px #529ecc;
  width: 82px; 
  height: 15px;
  border-radius: 3px;
`

const InfoSlot = styled.div`
  position: absolute;
	margin-left: 105px;
	background: #fff;
	border: 1px solid rgba(0, 0, 0, 0.35);
	border-radius: 5px;
	box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.1);
	height: 14px;
	line-height: 14px;
	width: 175px;
	font-family: helvetica;
	font-weight: normal;
	color: #666;
	font-size: 12px;
	white-space: nowrap;
`

const LevelSlot = styled(InfoSlot)`
	margin-top: 47px;
`
const ClassSlot = styled(InfoSlot)`
	margin-top: 65px;
`
const FameSlot = styled(InfoSlot)`
  margin-top: 83px;
`
const GuildSlot = styled(InfoSlot)`
  margin-top: 101px;
`
const AllianceSlot = styled(InfoSlot)`
  margin-top: 119px;
`

const InfoName = styled.div`
  background: rgba(0, 0, 0, 0.5);
	box-shadow: inset 0 5px 10px rgba(255, 255, 255, 0.6);
	width: 49px;
	color: #fff;
	padding: 0px 3px;
	line-height: 14px;
	text-align: right;
	display: inline-block;
	position: absolute;
	font-size: 8px;
	height: 14px;
	text-transform: uppercase;
	font-family: "londonmidlandregular", consolas, monospace;
`
const InfoDetail = styled.div`
  margin-left: 50px;
  margin-top: 2px;
`
export interface CharacterCardProps {
  image: string
  name: string
  level: number
  job: string
  onRemove: (a: string) => void
  onUpdate: (a: string) => void
  toast: React.RefObject<Toast>
}

export const CharacterCard: React.FC<CharacterCardProps> = ({image, name, level, job, onRemove, onUpdate, toast}) => {
  const deleteConfirm = () => {
    confirmDialog({
      message: `Are you sure to remove character "${name}"?`,
      header: 'Delete Confirmation',
      accept: () => onRemove(name),
    })
  }
  const updateInform = () => {
    onUpdate(name)
    toast.current?.show({ severity: 'info', summary: 'Updating', detail: `You have update character"${name}"`, life: 3000 })
  }
  return <Info>
    <BoxTitle>character info</BoxTitle>
    <InfoBox>
      <Buttons>
        <RemoveButton onClick={deleteConfirm}>Remove Character</RemoveButton>
        <UpdateButton onClick={updateInform}>Update Character</UpdateButton>
      </Buttons>
      <Character>
        <CharacterImg src={`${image}`} />
        <Shadow />
        <Name>
          <NameText>{name}</NameText>
        </Name>
      </Character>
      <LevelSlot>
        <InfoName>level</InfoName>
        <InfoDetail>{level}</InfoDetail>
      </LevelSlot>
      <ClassSlot>
        <InfoName>class</InfoName>
        <InfoDetail>{job}</InfoDetail>
      </ClassSlot>
      <FameSlot>
        <InfoName>fame</InfoName>
        <InfoDetail>114514</InfoDetail>
      </FameSlot>
      <GuildSlot>
        <InfoName>guild</InfoName>
        <InfoDetail>Chocological</InfoDetail>
      </GuildSlot>
      <AllianceSlot>
        <InfoName>alliance</InfoName>
        <InfoDetail></InfoDetail>
      </AllianceSlot>
    </InfoBox>
  </Info>
}