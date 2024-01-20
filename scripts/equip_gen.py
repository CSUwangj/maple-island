#!/usr/bin/python3
# -*- coding: UTF-8 -*-
import sys
import re
import json

BossAccessorySet = frozenset({'Condensed Power Crystal', 'Aquatic Letter Eye Accessory', 'Black Bean Mark', 'Papulatus Mark', 'Dea Sidus Earring', 'Will o\' the Wisps', 'Silver Blossom Ring', 'Noble Ifia\'s Ring', 'Guardian Angel Ring', 'Horntail Necklace', 'Chaos Horntail Necklace', 'Mechanator Pendant', 'Dominator Pendant', 'Golden Clover Belt', 'Enraged Zakum Belt', 'Royal Black Metal Shoulder', 'Stone of Eternal Life', 'Pink Holy Cup', 'Crystal Ventus Badge'})
PitchedBossSet = frozenset({'Black Heart', 'Berserked', 'Magic Eyepatch', 'Source of Suffering', 'Cursed Red Spellbook', 'Cursed Blue Spellbook', 'Cursed Green Spellbook', 'Cursed Yellow Spellbook', 'Commanding Force Earring', 'Endless Terror', 'Dreamy Belt', 'Genesis Badge', 'Mitra\'s Rage: Warrior', 'Mitra\'s Rage: Bowman', 'Mitra\'s Rage: Pirate', 'Mitra\'s Rage: Magician', 'Mitra\'s Rage: Thief'})
SuperiorGolluxSet = frozenset({'Superior Gollux Earrings', 'Superior Gollux Ring', 'Superior Engraved Gollux Pendant', 'Superior Engraved Gollux Belt'})
ReinforcedGolluxSet = frozenset({'Reinforced Gollux Earrings', 'Reinforced Gollux Ring', 'Reinforced Engraved Gollux Pendant', 'Reinforced Engraved Gollux Belt'})
SengokuTreasureSet = frozenset({'Kanna\'s Treasure', 'Ayame\'s Treasure', 'Hayato\'s Treasure'})
DawnBossSet = frozenset({'Daybreak Pendant', 'Twilight Mark', 'Estella Earrings', 'Dawn Guardian Angel Ring'})
PensalirWarrior = frozenset({'Pensalir Battle Helm', 'Pensalir Battle Mail', 'Pensalir Battle Boots', 'Pensalir Battle Gloves', 'Pensalir Battle Cape', 'Utgard Restraint', 'Utgard Desperado', 'Utgard Saber', 'Utgard Axe', 'Utgard Hair', 'Utgard Two-handed Sword', 'Utgard Two-handed Axe', 'Utgard Two-handed Hammer', 'Utgard Spear', 'Utgard Hellslayer', 'Utgard Katana', 'Utgard Hrimthurs'})
PensalirMagician = frozenset({'Pensalir Mage Sallet', 'Pensalir Mage Robe', 'Pensalir Mage Boots', 'Pensalir Mage Gloves', 'Pensalir Mage Cape', 'Utgard Shining Rod', 'Utgard Shining Stick', 'Utgard Psy-limiter', 'Utgard Lucent Gauntlet', 'Utgard Wand', 'Utgard Staff', 'Utgard Fan'})
PensalirBowman = frozenset({'Pensalir Sentinel Cap', 'Pensalir Sentinel Suit', 'Pensalir Sentinel Boots', 'Pensalir Sentinel Gloves', 'Pensalir Sentinel Cape', 'Utgard Whispershot', 'Utgard Bow', 'Utgard Crossbow', 'Utgard Dual Bowguns', 'Utgard Ancient Bow'})
PensalirThief = frozenset({'Pensalir Chaser Hat', 'Pensalir Chaser Armor', 'Pensalir Chaser Boots', 'Pensalir Chaser Gloves', 'Pensalir Chaser Cape', 'Utgard Energy Chain (Thief)', 'Utgard Chain', 'Utgard Giant Ritual Fan', 'Utgard Dagger', 'Utgard Cane', 'Utgard Cetus', 'Utgard Guards'})
PensalirPirate = frozenset({'Pensalir Skipper Hat', 'Pensalir Skipper Coat', 'Pensalir Skipper Boots', 'Pensalir Skipper Gloves', 'Pensalir Skipper Cape', 'Utgard Dragon Soul', 'Utgard Energy Chain (Pirate)', 'Utgard Claw', 'Utgard Pistol', 'Utgard Siege Gun'})
SengokuWarrior = frozenset({'Amaterasu\'s Helm', '  Amaterasu\'s Armor', '  Amaterasu\'s Shoes', '  Amaterasu\'s Gloves', '  Amaterasu\'s Cape', '  Amaterasu\'s Belt', '  Amaterasu\'s Epaulet', '  Amaterasu\'s Bladecaster', '  Amaterasu\'s Judgment', '  Amaterasu\'s Storm', '  Amaterasu\'s Thousandaxe', '  Amaterasu\'s Goldcutter', '  Amaterasu\'s Keensword', '  Amaterasu\'s Emberaxe', '  Amaterasu\'s Hammer', '  Amaterasu\'s Whisper', '  Amaterasu\'s Lament', '  Amaterasu\'s Muramasa', '  Amaterasu\'s Bunker Buster', '  Amaterasu\'s Lupine Bladecaster', '  Amaterasu\'s Lupine Judgment', '  Amaterasu\'s Lupine Storm', '  Amaterasu\'s Lupine Thousandaxe', '  Amaterasu\'s Lupine Goldcutter', '  Amaterasu\'s Lupine Keensword', '  Amaterasu\'s Lupine Emberaxe', '  Amaterasu\'s Lupine Hammer', '  Amaterasu\'s Lupine Whisper', '  Amaterasu\'s Lupine Lament', '  Amaterasu\'s Lupine Muramasa', '  Amaterasu\'s Lupine Bunker Buster'})
SengokuMagician = frozenset({'Ame-no-Uzume\'s Helm', 'Ame-no-Uzume\'s Armor', 'Ame-no-Uzume\'s Shoes', 'Ame-no-Uzume\'s Gloves', 'Ame-no-Uzume\'s Cape', 'Ame-no-Uzume\'s Belt', 'Ame-no-Uzume\'s Epaulet', 'Ame-no-Uzume\'s Shining Rod', 'Ame-no-Uzume\'s Spirit Pole', 'Ame-no-Uzume\'s Psy-limiter', 'Ame-no-Uzume\'s Lucent Gauntlet', 'Ame-no-Uzume\'s Wand', 'Ame-no-Uzume\'s Conduit', 'Ame-no-Uzume\'s Red Flower', 'Ame-no-Uzume\'s Lupine Shining Rod', 'Ame-no-Uzume\'s Lupine Spirit Pole', 'Ame-no-Uzume\'s Lupine Psy-limiter', 'Ame-no-Uzume\'s Lupine Lucent Gauntlet', 'Ame-no-Uzume\'s Lupine Wand', 'Ame-no-Uzume\'s Lupine Conduit', 'Ame-no-Uzume\'s Lupine Red Flower'})
SengokuBowman = frozenset({'Oyamatsumi\'s Helm', 'Oyamatsumi\'s Armor', 'Oyamatsumi\'s Shoes', 'Oyamatsumi\'s Gloves', 'Oyamatsumi\'s Cape', 'Oyamatsumi\'s Belt', 'Oyamatsumi\'s Epaulet', 'Oyamatsumi\'s Whispershot', 'Oyamatsumi\'s Fire Spirit Bow', 'Oyamatsumi\'s Inspiration', 'Oyamatsumi\'s Dragons', 'Oyamatsumi\'s Ancient Bow', 'Oyamatsumi\'s Lupine Whispershot', 'Oyamatsumi\'s Lupine Fire Spirit Bow', 'Oyamatsumi\'s Lupine Inspiration', 'Oyamatsumi\'s Lupine Dragons', 'Oyamatsumi\'s Lupine Ancient Bow'})
SengokuThief = frozenset({'Tsukuyomi\'s Helm', 'Tsukuyomi\'s Armor', 'Tsukuyomi\'s Shoes', 'Tsukuyomi\'s Gloves', 'Tsukuyomi\'s Cape', 'Tsukuyomi\'s Belt', 'Tsukuyomi\'s Epaulet', 'Tsukuyomi\'s Energy Chain', 'Tsukuyomi\'s Chain', 'Tsukuyomi\'s Ritual Fan', 'Tsukuyomi\'s Mercy', 'Tsukuyomi\'s Wraith Hand', 'Tsukuyomi\'s Fist of Malice', 'Tsukuyomi\'s Lupine Energy Chain (Thief)', 'Tsukuyomi\'s Lupine Chain', 'Tsukuyomi\'s Lupine Ritual Fan', 'Tsukuyomi\'s Lupine Mercy', 'Tsukuyomi\'s Lupine Wraith Hand', 'Tsukuyomi\'s Chakram', 'Tsukuyomi\'s Lupine Chakram', 'Tsukuyomi\'s Lupine Fist of Malice'})
SengokuPirate = frozenset({'Susano-o\'s Helm', 'Susano-o\'s Armor', 'Susano-o\'s Shoes', 'Susano-o\'s Gloves', 'Susano-o\'s Cape', 'Susano-o\'s Belt', 'Susano-o\'s Epaulet', 'Susano-o\'s Rainbow Shooter', 'Susano-o\'s Energy Chain', 'Susano-o\'s Fist', 'Susano-o\'s Baleful Blaster', 'Susano-o\'s Solar Cannon', 'Susano-o\'s Lupine Rainbow Shooter', 'Susano-o\'s Lupine Energy Chain (Pirate)', 'Susano-o\'s Lupine Fist', 'Susano-o\'s Lupine Baleful Blaster', 'Susano-o\'s Lupine Solar Cannon'})
CRAWarrior = frozenset({'Royal Warrior Helm', 'Eagle Eye Warrior Armor', 'Trixter Warrior Pants', 'Fafnir Mercy', 'Fafnir Death Bringer', 'Fafnir Mistilteinn', 'Fafnir Twin Cleaver', 'Fafnir Guardian Hammer', 'Fafnir Penitent Tears', 'Fafnir Battle Cleaver', 'Fafnir Lightning Striker', 'Fafnir Brionak', 'Fafnir Moon Glaive', 'Fafnir Raven Ring', 'Fafnir Big Mountain'})
CRAMagician = frozenset({'Royal Dunwitch Hat', 'Eagle Eye Dunwitch Robe', 'Trixter Dunwitch Pants', 'Fafnir Mana Cradle', 'Fafnir Scepter', 'Fafnir Psy-limiter', 'Fafnir Lucent Gauntlet', 'Fafnir Mana Taker', 'Fafnir Mana Crown', 'Fafnir Indigo Flash'})
CRABowman = frozenset({'Royal Ranger Beret', 'Eagle Eye Ranger Cowl', 'Trixter Ranger Pants', 'Fafnir Nightchaser', 'Fafnir Wind Chaser', 'Fafnir Windwing Shooter', 'Fafnir Dual Windwing', 'Fafnir Ancient Bow'})
CRAThief = frozenset({'Royal Assassin Hood', 'Eagle Eye Assassin Shirt', 'Trixter Assassin Pants', 'Fafnir Split Edge (Thief)', 'Fafnir Chain', 'Fafnir Dragon Ritual Fan', 'Fafnir Damascus', 'Fafnir Ciel Claire', 'Fafnir Chakram', 'Fafnir Risk Holder'})
CRAPirate = frozenset({'Royal Wanderer Hat', 'Eagle Eye Wanderer Coat', 'Trixter Wanderer Pants', 'Fafnir Angelic Shooter', 'Fafnir Split Edge (Pirate)', 'Fafnir Perry Talon', 'Fafnir Zeliska', 'Fafnir Lost Cannon'})
ABWarrior = frozenset({'AbsoLab Knight Helm', 'AbsoLab Knight Suit', 'AbsoLab Knight Shoes', 'AbsoLab Knight Gloves', 'AbsoLab Knight Cape', 'AbsoLab Knight Shoulder', 'AbsoLab Bladecaster', 'AbsoLab Desperado', 'AbsoLab Saber', 'AbsoLab Axe', 'AbsoLab Bit Hammer', 'AbsoLab Broad Saber', 'AbsoLab Broad Axe', 'AbsoLab Broad Hammer', 'AbsoLab Piercing Spear', 'AbsoLab Hellslayer', 'AbsoLab Katana', 'AbsoLab Pile God'})
ABMagician = frozenset({'AbsoLab Mage Crown', 'AbsoLab Mage Suit', 'AbsoLab Mage Shoes', 'AbsoLab Mage Gloves', 'AbsoLab Mage Cape', 'AbsoLab Mage Shoulder', 'AbsoLab Shining Rod', 'AbsoLab Scepter', 'AbsoLab Psy-limiter', 'AbsoLab Lucent Gauntlet', 'AbsoLab Spellsong Wand', 'AbsoLab Spellsong Staff', 'AbsoLab Summoner'})
ABBowman = frozenset({'AbsoLab Archer Hood', 'AbsoLab Archer Suit', 'AbsoLab Archer Shoes', 'AbsoLab Archer Gloves', 'AbsoLab Archer Cape', 'AbsoLab Archer Shoulder', 'AbsoLab Whispershot', 'AbsoLab Sureshot Bow', 'AbsoLab Crossbow', 'AbsoLab Dual Bowguns', 'AbsoLab Ancient Bow'})
ABThief = frozenset({'AbsoLab Bandit Cap', 'AbsoLab Bandit Suit', 'AbsoLab Bandit Shoes', 'AbsoLab Bandit Gloves', 'AbsoLab Bandit Cape', 'AbsoLab Thief Shoulder', 'AbsoLab Whip Blade', 'AbsoLab Chain', 'AbsoLab Monster Ritual Fan', 'AbsoLab Blade Lord', 'AbsoLab Forked Cane', 'AbsoLab Chakram', 'AbsoLab Revenge Guard'})
ABPirate = frozenset({'AbsoLab Pirate Fedora', 'AbsoLab Pirate Suit', 'AbsoLab Pirate Shoes', 'AbsoLab Pirate Gloves', 'AbsoLab Pirate Cape', 'AbsoLab Pirate Shoulder', 'AbsoLab Soul Shooter', 'AbsoLab Whip Blade', 'AbsoLab Blast Knuckle', 'AbsoLab Point Gun', 'AbsoLab Blast Cannon'})
AUWarrior = frozenset({'Arcane Umbra Knight Hat', 'Arcane Umbra Knight Suit', 'Arcane Umbra Knight Shoes', 'Arcane Umbra Knight Gloves', 'Arcane Umbra Knight Cape', 'Arcane Umbra Knight Shoulder', 'Arcane Umbra Bladecaster', 'Arcane Umbra Desperado', 'Arcane Umbra Saber', 'Arcane Umbra Axe', 'Arcane Umbra Hammer', 'Arcane Umbra Two-handed Sword', 'Arcane Umbra Two-handed Axe', 'Arcane Umbra Two-Handed Hammer', 'Arcane Umbra Spear', 'Arcane Umbra Polearm', 'Arcane Umbra Katana', 'Arcane Umbra Ellaha'})
AUMagician = frozenset({'Arcane Umbra Mage Hat', 'Arcane Umbra Mage Suit', 'Arcane Umbra Mage Shoes', 'Arcane Umbra Mage Gloves', 'Arcane Umbra Mage Cape', 'Arcane Umbra Mage Shoulder', 'Arcane Umbra Shining Rod', 'Arcane Umbra Scepter', 'Arcane Umbra Psy-limiter', 'Arcane Umbra Lucent Gauntlet', 'Arcane Umbra Wand', 'Arcane Umbra Staff', 'Arcane Umbra Fan'})
AUBowman = frozenset({'Arcane Umbra Archer Hat', 'Arcane Umbra Archer Suit', 'Arcane Umbra Archer Shoes', 'Arcane Umbra Archer Gloves', 'Arcane Umbra Archer Cape', 'Arcane Umbra Archer Shoulder', 'Arcane Umbra Whispershot', 'Arcane Umbra Bow', 'Arcane Umbra Crossbow', 'Arcane Umbra Dual Bowguns', 'Arcane Umbra Ancient Bow'})
AUThief = frozenset({'Arcane Umbra Thief Hat', 'Arcane Umbra Thief Suit', 'Arcane Umbra Thief Shoes', 'Arcane Umbra Thief Gloves', 'Arcane Umbra Thief Cape', 'Arcane Umbra Thief Shoulder', 'Arcane Umbra Energy Chain (Thief)', 'Arcane Umbra Chain', 'Arcane Umbra Super Ritual Fan', 'Arcane Umbra Dagger', 'Arcane Umbra Cane', 'Arcane Umbra Chakram', 'Arcane Umbra Guards'})
AUPirate = frozenset({'Arcane Umbra Pirate Hat', 'Arcane Umbra Pirate Suit', 'Arcane Umbra Pirate Shoes', 'Arcane Umbra Pirate Gloves', 'Arcane Umbra Pirate Cape', 'Arcane Umbra Pirate Shoulder', 'Arcane Umbra Soul Shooter', 'Arcane Umbra Energy Chain (Pirate)', 'Arcane Umbra Knuckle', 'Arcane Umbra Pistol', 'Arcane Umbra Siege Gun'})
EternalWarrior = frozenset({'Eternal Knight Helm', 'Eternal Knight Armor', 'Eternal Knight Pants', 'Eternal Knight Shoulder', 'Genesis Bladecaster', 'Genesis Desperado', 'Genesis Saber', 'Genesis Axe', 'Genesis Hammer', 'Genesis Two-Handed Sword', 'Genesis Two-Handed Axe', 'Genesis Two-Handed Hammer', 'Genesis Spear', 'Genesis Polearm', 'Genesis Katana', 'Genesis Lapis', 'Genesis Lazuli', 'Genesis Ellaha'})
EternalMagician = frozenset({'Eternal Mage Hat', 'Eternal Mage Robe', 'Eternal Mage Pants', 'Eternal Mage Shoulder', 'Genesis Shining Rod', 'Genesis Scepter', 'Genesis Psy-limiter', 'Genesis Lucent Gauntlet', 'Genesis Wand', 'Genesis Staff', 'Genesis Fan'})
EternalBowman = frozenset({'Eternal Archer Hat', 'Eternal Archer Hood', 'Eternal Archer Pants', 'Eternal Archer Shoulder', 'Genesis Whispershot', 'Genesis Bow', 'Genesis Crossbow', 'Genesis Dual Bowguns', 'Genesis Ancient Bow'})
EternalThief = frozenset({'Eternal Thief Bandana', 'Eternal Thief Shirt', 'Eternal Thief Pants', 'Eternal Thief Shoulder', 'Genesis Energy Chain (Thief)', 'Genesis Chain', 'Genesis Ritual Fan', 'Genesis Dagger', 'Genesis Cane', 'Genesis Eclipse', 'Genesis Guards'})
EternalPirate = frozenset({'Eternal Pirate Hat', 'Eternal Pirate Coat', 'Eternal Pirate Pants', 'Eternal Pirate Shoulder', 'Genesis Soul Shooter', 'Genesis Energy Chain (Pirate)', 'Genesis Claw', 'Genesis Pistol', 'Genesis Siege Gun'})
set_names = {
    BossAccessorySet: 'Boss Accessory Set',
    PitchedBossSet: 'Pitched Boss Set',
    SuperiorGolluxSet: 'Superior Gollux Set',
    ReinforcedGolluxSet: 'Reinforced Gollux Set',
    SengokuTreasureSet: 'Sengoku Treasure Set',
    DawnBossSet: 'Dawn Boss Set',
    PensalirWarrior: '8th Warrior Set',
    PensalirMagician: '8th Magician Set',
    PensalirBowman: '8th Bowman Set',
    PensalirThief: '8th Thief Set',
    PensalirPirate: '8th Pirate Set',
    SengokuWarrior: 'Amaterasu Set',
    SengokuMagician: 'Ame-no-Uzume Set',
    SengokuBowman: 'Oyamatsumi Set',
    SengokuThief: 'Tsukuyomi Set',
    SengokuPirate: 'Susano-o Set',
    CRAWarrior: 'Root Abyss Set (Warrior)',
    CRAMagician: 'Root Abyss Set (Magician)',
    CRABowman: 'Root Abyss Set (Bowman)',
    CRAThief: 'Root Abyss Set (Thief)',
    CRAPirate: 'Root Abyss Set (Pirate)',
    ABWarrior: 'AbsoLab Set (Warrior)',
    ABMagician: 'AbsoLab Set (Magician)',
    ABBowman: 'AbsoLab Set (Bowman)',
    ABThief: 'AbsoLab Set (Thief)',
    ABPirate: 'AbsoLab Set (Pirate)',
    AUWarrior: 'Arcane Umbra Set (Warrior)',
    AUMagician: 'Arcane Umbra Set (Magician)',
    AUBowman: 'Arcane Umbra Set (Bowman)',
    AUThief: 'Arcane Umbra Set (Thief)',
    AUPirate: 'Arcane Umbra Set (Pirate)',
    EternalWarrior: 'Eternal Set (Warrior)',
    EternalMagician: 'Eternal Set (Magician)',
    EternalBowman: 'Eternal Set (Bowman)',
    EternalThief: 'Eternal Set (Thief)',
    EternalPirate: 'Eternal Set (Pirate)'
}

slotMapping = {
    'Belt': 'belt',
    'Shield': 'sub-weapon',
    'Shoes': 'shoe',
    'Cape': 'cape',
    'Bottom': 'bottom',
    'Mechanical Heart': 'heart',
    'Shoulder Accessory': 'shoulder',
    'Overall': 'overall',
    'Pocket Item': 'pocket',
    'Top': 'top',
    'Badge': 'badge',
    'Eye Decoration': 'eye',
    'Face Accessory': 'face',
    'Pendant': 'pendant',
    'Earrings': 'earring',
    'Hat': 'hat',
    'Ring': 'ring',
    'Glove': 'glove',
    'Medal': 'medal',
}

fileNames = {
    'Accessory': 'Accessory',
    'Two-Handed Weapon': 'Weapon',
    'Secondary Weapon': 'Secondary Weapon',
    'One-Handed Weapon': 'Weapon',
    'Other': 'Accessory',
    'Armor': 'Armor',
}

HEADER = '''import { Equipment } from "models/Equipment"
import { EquipStats } from "models/EquipStats"
'''

def openFiles():
    files = {}
    files['Accessory'] = open('Accessory.ts', 'w', encoding='utf-8')
    files['Armor'] = open('Armor.ts', 'w', encoding='utf-8')
    files['Weapon'] = open('Weapon.ts', 'w', encoding='utf-8')
    files['Secondary Weapon'] = open('SecondaryWeapon.ts', 'w', encoding='utf-8')
    return files

def closeFiles(files):
    for _name, file in files.items():
        file.close()

def main(argv):
    files = openFiles()
    with open('itemsDetails.json', 'r') as f:
        items = json.load(f)
    equipments = {
        'Accessory': set(),
        'Armor': set(),
        'Weapon': set(),
        'Secondary Weapon': set()
    }
    for item in items:
        set_name = ''
        if item['typeInfo']['subCategory'] == 'Whip Blade':
            if 'incLUK' in item['metaInfo']:
                item['description']['name'] += ' (Thief)'
            else:
                item['description']['name'] += ' (Pirate)'
        for sets, name in set_names.items():
            if(item['description']['name'] in sets):
                set_name = name
        slot = 'weapon'
        if item['typeInfo']['subCategory'] in slotMapping:
            slot = slotMapping[item['typeInfo']['subCategory']]
        elif item['typeInfo']['category'] == 'Secondary Weapon':
            slot = 'sub-weapon'
        if 'bossReward' not in item['metaInfo']:
            item['metaInfo']['bossReward'] = False
        if 'incSTR' not in item['metaInfo']:
            item['metaInfo']['incSTR'] = 0
        if 'incDEX' not in item['metaInfo']:
            item['metaInfo']['incDEX'] = 0
        if 'incINT' not in item['metaInfo']:
            item['metaInfo']['incINT'] = 0  
        if 'incLUK' not in item['metaInfo']:
            item['metaInfo']['incLUK'] = 0  
        if 'incMHP' not in item['metaInfo']:
            item['metaInfo']['incMHP'] = 0  
        if 'incMMP' not in item['metaInfo']:
            item['metaInfo']['incMMP'] = 0  
        if 'incPAD' not in item['metaInfo']:
            item['metaInfo']['incPAD'] = 0  
        if 'incMAD' not in item['metaInfo']:
            item['metaInfo']['incMAD'] = 0  
        if 'incPDD' not in item['metaInfo']:
            item['metaInfo']['incPDD'] = 0  
        if 'imdR' not in item['metaInfo']:
            item['metaInfo']['imdR'] = 0  
        if 'bdR' not in item['metaInfo']:
            item['metaInfo']['bdR'] = 0  
        equip = '''
export const {} = (starForce: number, flame: EquipStats, soul: EquipStats, potential: EquipStats) => new Equipment(
  \'{}\',
  \'{}\',
  {},
  starForce,
  {},
  true,
  true,
  new EquipStats(
    {},  
    {},
    {},
    {},
    {},
    {},
    0,
    0,
    {},
    {},
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    {},
    {},
    {},
    0
  ),
  \'{}\',
  flame,
  soul,
  potential,
  \'{}\'
)
'''.format(re.sub(r'[_\' \-,!<>()]', '', item['description']['name']),
            re.sub(r'\'', '\\\'', item['description']['name']),
            set_name,
            item['metaInfo']['reqLevelEquip'],
            str(item['metaInfo']['bossReward']).lower(),
            item['metaInfo']['incSTR'],
            item['metaInfo']['incDEX'],
            item['metaInfo']['incINT'],
            item['metaInfo']['incLUK'],
            item['metaInfo']['incMHP'],
            item['metaInfo']['incMMP'],
            item['metaInfo']['incPAD'],
            item['metaInfo']['incMAD'],
            item['metaInfo']['incPDD'],
            item['metaInfo']['imdR'],
            item['metaInfo']['bdR'],
            slot,
            item['metaInfo']['icon'],
        )
        if(item['typeInfo']['subCategory'] == 'Shield'):
            equipments['Secondary Weapon'].add(equip)
        else:
            equipments[fileNames[item['typeInfo']['category']]].add(equip)
    for category, equips in equipments.items():
        files[category].write(HEADER)
        for equip in equips:
            files[category].write(equip)
    closeFiles(files)
    return

if __name__ == '__main__':
    main(sys.argv)
