import { Equipment } from './Equipment'
import { HyperStat } from './HyperStat'

export interface Character {
  id?: number
  level: number
  name: string
  job: string
  equip?: Equipment[]
  heyper?: HyperStat
  // base64 encoded image, can be used in img tag's src property directly
  image: string
}