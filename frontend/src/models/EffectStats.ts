export class EffectStats {
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
  critRate: number
  damage: number
  ignoreEnemyDefence: number
  bossDamage: number
  normalDamage: number
  critDamage: number
  finalDamage: number

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
    strPercent = 0,
    dexPercent = 0,
    intPercent = 0,
    lukPercent = 0,
    defence = 0,
    ignoreEnemyDefence = 0,
    damage = 0,
    bossDamage = 0,
    normalDamage = 0,
    critDamage = 0,
    critRate = 0,
    finalDamage = 0,
  ) {
    this.str = str
    this.dex = dex
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
    this.damage = damage
    this.bossDamage = bossDamage
    this.normalDamage = normalDamage
    this.critDamage = critDamage
    this.critRate = critRate
    this.finalDamage = finalDamage
  }

  add(stat: EffectStats): EffectStats {
    return new EffectStats(
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
      this.strPercent + stat.strPercent,
      this.dexPercent + stat.dexPercent,
      this.intPercent + stat.intPercent,
      this.lukPercent + stat.lukPercent,
      this.defence + stat.defence,
      this.ignoreEnemyDefence + stat.ignoreEnemyDefence,
      this.bossDamage + stat.bossDamage,
      this.critDamage + stat.critDamage,
      this.critRate + stat.critRate,
      this.finalDamage * (100 + stat.finalDamage) / 100
    )
  }
}