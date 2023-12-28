import Dexie, { Table } from "dexie"
import { Character } from "./Character"

export class MapleDB extends Dexie {
  character!: Table<Character>
  constructor() {
    super('MAPLEDB')
    this.version(0.1).stores({
      character: '++id, &name, job'
    })
  }
}

export const db = new MapleDB()