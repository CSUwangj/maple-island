# %%
import json

# %%
with open('equipIDs.json') as f:
    arr = json.load(f)

# %%
# Utgard | Pensalir
# Fafnir [weapon] | Royal Hat | Eagle Eye [] Robe | Trixter [] Pants
# Absolab
# Arcane Umbra
# Eternal
BossAccessorySet = {'Condensed Power Crystal', 'Aquatic Letter Eye Accessory', 'Black Bean Mark', 'Papulatus Mark', 'Dea Sidus Earring', 'Will o\' the Wisps', 'Silver Blossom Ring', 'Noble Ifia\'s Ring', 'Guardian Angel Ring', 'Horntail Necklace', 'Chaos Horntail Necklace', 'Mechanator Pendant', 'Dominator Pendant', 'Golden Clover Belt', 'Enraged Zakum Belt', 'Royal Black Metal Shoulder', 'Stone of Eternal Life', 'Pink Holy Cup', 'Crystal Ventus Badge'}
CRAArmor = {'Royal Warrior Helm', 'Eagle Eye Warrior Armor', 'Trixter Warrior Pants', 'Royal Dunwitch Hat', 'Eagle Eye Dunwitch Robe', 'Trixter Dunwitch Pants', 'Royal Ranger Beret', 'Eagle Eye Ranger Cowl', 'Trixter Ranger Pants', 'Royal Assassin Hood', 'Eagle Eye Assassin Shirt', 'Trixter Assassin Pants', 'Royal Wanderer Hat', 'Eagle Eye Wanderer Coat', 'Trixter Wanderer Pants'}
EternalArmor = {'Eternal Mage Hat', 'Eternal Mage Robe', 'Eternal Mage Pants', 'Eternal Mage Shoulder', 'Eternal Pirate Hat', 'Eternal Pirate Coat', 'Eternal Pirate Pants', 'Eternal Pirate Shoulder', 'Eternal Thief Bandana', 'Eternal Thief Shirt', 'Eternal Thief Pants', 'Eternal Thief Shoulder', 'Eternal Archer Hat', 'Eternal Archer Hood', 'Eternal Archer Pants', 'Eternal Archer Shoulder', 'Eternal Knight Helm', 'Eternal Knight Armor', 'Eternal Knight Pants', 'Eternal Knight Shoulder'}
PitchedBossSet = {'Black Heart', 'Berserked', 'Magic Eyepatch', 'Source of Suffering', 'Cursed Red Spellbook', 'Cursed Blue Spellbook', 'Cursed Green Spellbook', 'Cursed Yellow Spellbook', 'Commanding Force Earring', 'Endless Terror', 'Dreamy Belt', 'Genesis Badge', 'Mitra\'s Rage: Warrior', 'Mitra\'s Rage: Bowman', 'Mitra\'s Rage: Pirate', 'Mitra\'s Rage: Magician', 'Mitra\'s Rage: Thief'}
SuperiorGolluxSet = {'Superior Gollux Earrings', 'Superior Gollux Ring', 'Superior Engraved Gollux Pendant', 'Superior Engraved Gollux Belt'}
ReinforcedGolluxSet = {'Reinforced Gollux Earrings', 'Reinforced Gollux Ring', 'Reinforced Engraved Gollux Pendant', 'Reinforced Engraved Gollux Belt'}
SengokuTreasureSet = {'Kanna\'s Treasure', 'Ayame\'s Treasure', 'Hayato\'s Treasure'}
DawnBossSet = {'Daybreak Pendant', 'Twilight Mark', 'Estella Earrings', 'Dawn Guardian Angel Ring'}
FafnirPattern = {'Fafnir'}
PensalirPattern = {'Utgard', 'Pensalir'}
AbsolabPattern = {'Absolab'}
AUPattern = {'Arcane Umbra'}
GenesisPattern = {'Genesis'}
SweetwaterPattern = {'Sweetwater '}
Names = BossAccessorySet | CRAArmor | EternalArmor | PitchedBossSet | SuperiorGolluxSet | ReinforcedGolluxSet | SengokuTreasureSet | DawnBossSet
Patterns = FafnirPattern | PensalirPattern | AbsolabPattern | AUPattern | GenesisPattern | SweetwaterPattern


# %%
itemsWeNeed = []
for item in arr:
    if 'name' not in item:
        continue
    itis = False
    for name in Names:
        if name == item['name']:
            itis = True
    for pattern in Patterns:
        if pattern in item['name']:
            itis = True
    if itis:
        itemsWeNeed.append(item)

# %%
with open('itemsWeNeed.json', 'w') as f:
    json.dump(itemsWeNeed, f)


