import { EffectStats } from "models/EffectStats"
import { Sets } from "models/Sets"

const BossAccessorySet = new Sets('Boss Accessory Set', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    10, 10, 10, 10,
    0, 0,
    5, 5,
    5, 5,
    0, 0,
    0, 0, 0, 0, 0,
    60
  ),
  new EffectStats(),
  new EffectStats(
    20, 20, 20, 20,
    0, 0, 
    10, 10,
    10, 10,
    0, 0,
    0, 0, 0, 0, 0,
    120
  ),
  new EffectStats(),
  new EffectStats(
    30, 30, 30, 30,
    0, 0, 
    10, 10,
    20, 20,
    0, 0,
    0, 0, 0, 0, 0, 
    200,
    10
  ),
  new EffectStats(),
  new EffectStats(
    45, 45, 45, 45,
    0, 0, 
    10, 10,
    30, 30,
    0, 0,
    0, 0, 0, 0, 0, 
    300,
    10,
    0, 10
  )
])

const PitchedBossSet = new Sets('Pitched Boss Set', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    10, 10, 10,10,
    250, 0,
    0, 0, 
    10, 10,
    0, 0,
    0, 0, 0, 0, 0, 
    0,
    0, 
    0, 10
  ),
  new EffectStats(
    20, 20, 20, 20,
    500, 0,
    0, 0,
    20, 20,
    0, 0,
    0, 0, 0, 0, 0,
    250,
    10,
    0, 10
  ),
  new EffectStats(
    35, 35, 35, 35,
    500, 0,
    0, 0,
    35, 35,
    0, 0,
    0, 0, 0, 0, 0,
    250,
    10,
    0, 10, 0,
    5
  ),
  new EffectStats(
    50, 50, 50, 50,
    1250, 0,
    0, 0,
    50, 50,
    0, 0,
    0, 0, 0, 0, 0,
    250,
    10,
    0, 20, 0,
    5
  ),
  new EffectStats(
    65, 65, 65, 65,
    1625, 0,
    0, 0,
    65, 65,
    0, 0, 
    0, 0, 0, 0, 0,
    250,
    19,
    0, 20, 0,
    5
  ),
  new EffectStats(
    80, 80, 80, 80,
    2000, 0,
    0, 0,
    80, 80,
    0, 0,
    0, 0, 0, 0, 0,
    250,
    19, 
    0, 20, 0,
    10
  ),
  new EffectStats(
    95, 95, 95, 95,
    2375, 0,
    0, 0,
    95, 95,
    0, 0,
    0, 0, 0, 0, 0,
    250,
    19, 
    0, 30, 0,
    10
  ),
  new EffectStats(
    110, 110, 110, 110,
    2750, 0,
    0, 0,
    110, 110,
    0, 0,
    0, 0, 0, 0, 0,
    250,
    19, 
    0, 30, 0,
    15
  )
])

const ReinforcedGolluxSet = new Sets('Reinforced Gollux Set', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    15, 15, 15, 15,
    1200, 1200
  ),
  new EffectStats(
    15, 15, 15, 15,
    1200, 1200,
    10, 10,
    30, 30
  ),
  new EffectStats(
    15, 15, 15, 15,
    1200, 1200,
    10, 10,
    30, 30,
    0, 0,
    0, 0, 0, 0, 0,
    0,
    15,
    0, 30
  )
])

const SuperiorGolluxSet = new Sets('Superior Gollux Set', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    20, 20, 20, 20,
    1500, 1500
  ),
  new EffectStats(
    20, 20, 20, 20,
    1500, 1500,
    13, 13,
    35, 35
  ),
  new EffectStats(
    20, 20, 20, 20,
    1500, 1500,
    13, 13,
    35, 35,
    0, 0,
    0, 0, 0, 0, 0,
    0,
    30,
    0, 30
  )
])

const SengokuTreasureSet = new Sets('Sengoku Treasure Set', [

])

const DawnBossSet = new Sets('Boss of Dawn Set', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    10, 10, 10, 10,
    250, 0,
    0, 0, 
    10, 10,
    0, 0,
    0, 0, 0, 0, 0, 
    0,
    0,
    0, 10
  ),
  new EffectStats(
    20, 20, 20, 20,
    500, 0,
    0, 0, 
    20, 20,
    0, 0,
    0, 0, 0, 0, 0, 
    0,
    0,
    0, 10
  ),
  new EffectStats(
    30, 30, 30, 30,
    750, 0,
    0, 0, 
    30, 30,
    0, 0,
    0, 0, 0, 0, 0, 
    100,
    10,
    0, 10
  )
])

const PensalirWarrior = new Sets('8th Warrior Set', [

])

const PensalirMagician = new Sets('8th Magician Set', [

])

const PensalirBowman = new Sets('8th Bowman Set', [

])

const PensalirThief = new Sets('8th Thief Set', [

])

const PensalirPirate = new Sets('8th Pirate Set', [

])

const SengokuWarrior = new Sets('Amaterasu Set', [

])

const SengokuMagician = new Sets('Ame-no-Uzume Set', [

])

const SengokuBowman = new Sets('Oyamatsumi Set', [

])

const SengokuThief = new Sets('Tsukuyomi Set', [

])

const SengokuPirate = new Sets('Susano-o Set', [

])

const CRAWarrior = new Sets('Root Abyss Set (Warrior)', [

])

const CRAMagician = new Sets('Root Abyss Set (Magician)', [

])

const CRABowman = new Sets('Root Abyss Set (Bowman)', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    20, 20, 0, 0,
    1000, 1000
  ),
  new EffectStats(
    20, 20, 0, 0,
    1000, 1000,
    10, 10,
    50
  ),
  new EffectStats(
    20, 20, 0, 0,
    1000, 1000,
    10, 10,
    50, 0,
    0, 0,
    0, 0, 0, 0, 0,
    0,
    0, 
    0, 30
  )
])

const CRAThief = new Sets('Root Abyss Set (Thief)', [

])

const CRAPirate = new Sets('Root Abyss Set (Pirate)', [

])

const ABWarrior = new Sets('AbsoLab Set (Warrior)', [

])

const ABMagician = new Sets('AbsoLab Set (Magician)', [

])

const ABBowman = new Sets('AbsoLab Set (Bowman)', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    0, 0, 0, 0,
    1500, 1500,
    0, 0,
    20, 20,
    0, 0,
    0, 0, 0, 0, 0,
    0,
    0, 
    0, 10
  ),
  new EffectStats(
    30, 30, 30, 30,
    1500, 1500,
    0, 0,
    40, 40,
    0, 0,
    0, 0, 0, 0, 0,
    0,
    0, 
    0, 20
  ),
  new EffectStats(
    30, 30, 30, 30,
    1500, 1500,
    0, 0,
    65, 65,
    0, 0,
    0, 0, 0, 0, 0,
    200,
    10,
    0, 20
  ),
  new EffectStats(
    30, 30, 30, 30,
    1500, 1500,
    0, 0,
    95, 95,
    0, 0,
    0, 0, 0, 0, 0,
    200,
    10,
    0, 20
  ),
  new EffectStats(
    30, 30, 30, 30,
    1500, 1500,
    20, 20,
    115, 115,
    0, 0,
    0, 0, 0, 0, 0,
    200,
    10,
    0, 30
  ),
  new EffectStats(
    30, 30, 30, 30,
    1500, 1500,
    20, 20,
    135, 135,
    0, 0,
    0, 0, 0, 0, 0,
    200,
    19, 
    0, 30
  )
])

const ABThief = new Sets('AbsoLab Set (Thief)', [

])

const ABPirate = new Sets('AbsoLab Set (Pirate)', [

])

const AUWarrior = new Sets('Arcane Umbra Set (Warrior)', [

])

const AUMagician = new Sets('Arcane Umbra Set (Magician)', [

])

const AUBowman = new Sets('Arcane Umbra Set (Bowman)', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    0, 0, 0, 0,
    0, 0,
    0, 0,
    30, 30,
    0, 0,
    0, 0, 0, 0, 0,
    0,
    0, 
    0, 10
  ),
  new EffectStats(
    0, 0, 0, 0,
    0, 0,
    0, 0,
    60, 60,
    0, 0,
    0, 0, 0, 0, 0,
    400,
    10,
    0, 10
  ),
  new EffectStats(
    50, 50, 50, 50,
    0, 0,
    0, 0,
    95, 95,
    0, 0,
    0, 0, 0, 0, 0,
    400,
    10,
    0, 20
  ),
  new EffectStats(
    50, 50, 50, 50,
    2000, 2000,
    0, 0,
    135, 135,
    0, 0,
    0, 0, 0, 0, 0,
    400,
    10,
    0, 30
  ),
  new EffectStats(
    50, 50, 50, 50,
    2000, 2000,
    30, 30,
    165, 165,
    0, 0,
    0, 0, 0, 0, 0,
    400,
    10,
    0, 30
  ),
  new EffectStats(
    50, 50, 50, 50,
    2000, 2000,
    30, 30,
    195, 195,
    0, 0,
    0, 0, 0, 0, 0,
    400,
    19,
    0, 30
  )
])

const AUThief = new Sets('Arcane Umbra Set (Thief)', [

])

const AUPirate = new Sets('Arcane Umbra Set (Pirate)', [

])

const EternalWarrior = new Sets('Eternal Set (Warrior)', [

])

const EternalMagician = new Sets('Eternal Set (Magician)', [

])

const EternalBowman = new Sets('Eternal Set (Bowman)', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    0, 0, 0, 0,
    2500, 2500,
    0, 0,
    40, 40,
    0, 0,
    0, 0, 0, 0, 0,
    0,
    0,
    0, 10
  ),
  new EffectStats(
    50, 50, 50, 50,
    2500, 2500,
    0, 0,
    80, 80,
    0, 0,
    0, 0, 0, 0, 0,
    600,
    0,
    0, 20
  ),
  new EffectStats(
    50, 50, 50, 50,
    2500, 2500,
    15, 15,
    120, 120,
    0, 0,
    0, 0, 0, 0, 0,
    600,
    0,
    0, 30
  ),
  new EffectStats(
    50, 50, 50, 50,
    2500, 2500,
    15, 15,
    160, 160,
    0, 0,
    0, 0, 0, 0, 0,
    600,
    20,
    0, 30
  ),
])

const EternalThief = new Sets('Eternal Set (Thief)', [

])

const EternalPirate = new Sets('Eternal Set (Pirate)', [

])

const GuildCastleBroochSet = new Sets('Guild Castle Brooch Set', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    0, 0, 0, 0,
    0, 0,
    0, 0,
    5, 5
  ),
  new EffectStats(
    0, 0, 0, 0,
    0, 0,
    0, 0,
    15, 15
  )
])

const AfterlandsSouvenir = new Sets('Afterlands Souvenir', [
  new EffectStats(),
  new EffectStats(),
  new EffectStats(),
  new EffectStats(
    0, 0, 0, 0,
    0, 0,
    0, 0,
    10, 10
  )
])

export const EquipSets = new Map([
  ['Boss Accessory Set', BossAccessorySet],
  ['Pitched Boss Set', PitchedBossSet],
  ['Superior Gollux Set', SuperiorGolluxSet],
  ['Reinforced Gollux Set', ReinforcedGolluxSet],
  ['Sengoku Treasure Set', SengokuTreasureSet],
  ['Boss of Dawn Set', DawnBossSet],
  ['8th Warrior Set', PensalirWarrior],
  ['8th Magician Set', PensalirMagician],
  ['8th Bowman Set', PensalirBowman],
  ['8th Thief Set', PensalirThief],
  ['8th Pirate Set', PensalirPirate],
  ['Amaterasu Set', SengokuWarrior],
  ['Ame-no-Uzume Set', SengokuMagician],
  ['Oyamatsumi Set', SengokuBowman],
  ['Tsukuyomi Set', SengokuThief],
  ['Susano-o Set', SengokuPirate],
  ['Root Abyss Set (Warrior)', CRAWarrior],
  ['Root Abyss Set (Magician)', CRAMagician],
  ['Root Abyss Set (Bowman)', CRABowman],
  ['Root Abyss Set (Thief)', CRAThief],
  ['Root Abyss Set (Pirate)', CRAPirate],
  ['AbsoLab Set (Warrior)', ABWarrior],
  ['AbsoLab Set (Magician)', ABMagician],
  ['AbsoLab Set (Bowman)', ABBowman],
  ['AbsoLab Set (Thief)', ABThief],
  ['AbsoLab Set (Pirate)', ABPirate],
  ['Arcane Umbra Set (Warrior)', AUWarrior],
  ['Arcane Umbra Set (Magician)', AUMagician],
  ['Arcane Umbra Set (Bowman)', AUBowman],
  ['Arcane Umbra Set (Thief)', AUThief],
  ['Arcane Umbra Set (Pirate)', AUPirate],
  ['Eternal Set (Warrior)', EternalWarrior],
  ['Eternal Set (Magician)', EternalMagician],
  ['Eternal Set (Bowman)', EternalBowman],
  ['Eternal Set (Thief)', EternalThief],
  ['Eternal Set (Pirate)', EternalPirate],
  ['Guild Castle Brooch Set', GuildCastleBroochSet],
  ['Afterlands Souvenir', AfterlandsSouvenir]
])