export class EquipStats {
  str: number
  dex: number
  int: number
  luk: number
  hp: number
  mp: number
  hpPercent: number
  mpPercent: number
  att: number
  matt: number
  attPercent: number
  mattPercent: number
  allStatPercent: number
  dexPercent: number
  strPercent: number
  intPercent: number
  lukPercent: number
  defence: number
  ignoreEnemyDefence: number
  bossDamage: number
  critDamage: number

  constructor(
    str = 0,
    dex = 0,
    int = 0,
    luk = 0,
    hp = 0,
    mp = 0,
    hpPercent = 0,
    mpPercent = 0,
    att = 0,
    matt = 0,
    attPercent = 0,
    mattPercent = 0,
    allStatPercent = 0,
    dexPercent = 0,
    strPercent = 0,
    intPercent = 0,
    lukPercent = 0,
    defence = 0,
    ignoreEnemyDefence = 0,
    bossDamage = 0,
    critDamage = 0
  ) {
    this.dex = dex
    this.str = str
    this.int = int
    this.luk = luk
    this.hp = hp
    this.mp = mp
    this.hpPercent = hpPercent
    this.mpPercent = mpPercent
    this.att = att
    this.matt = matt
    this.attPercent = attPercent
    this.mattPercent = mattPercent
    this.allStatPercent = allStatPercent
    this.dexPercent = dexPercent
    this.strPercent = strPercent
    this.intPercent = intPercent
    this.lukPercent = lukPercent
    this.defence = defence
    this.ignoreEnemyDefence = ignoreEnemyDefence
    this.bossDamage = bossDamage
    this.critDamage = critDamage
  }

  add(stat: EquipStats): EquipStats {
    return new EquipStats(
      this.dex + stat.dex,
      this.str + stat.str,
      this.int + stat.int,
      this.luk + stat.luk,
      this.hp + stat.hp,
      this.mp + stat.mp,
      this.hpPercent + stat.hpPercent,
      this.mpPercent + stat.mpPercent,
      this.att + stat.att,
      this.matt + stat.matt,
      this.attPercent + stat.attPercent,
      this.mattPercent + stat.mattPercent,
      this.allStatPercent + stat.allStatPercent,
      this.dexPercent + stat.dexPercent,
      this.strPercent + stat.strPercent,
      this.intPercent + stat.intPercent,
      this.lukPercent + stat.lukPercent,
      this.defence + stat.defence,
      this.ignoreEnemyDefence + stat.ignoreEnemyDefence,
      this.bossDamage + stat.bossDamage,
      this.critDamage + stat.critDamage,
    )
  }
}