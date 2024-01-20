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
Shields = {'Deimos Warrior Shield', 'Deimos Warrior Shield', 'Deimos Shadow Shield', 'Ruin Force Shield'}
FafnirPattern = {'Fafnir'}
PensalirPattern = {'Utgard', 'Pensalir'}
AbsolabPattern = {'Absolab'}
AUPattern = {'Arcane Umbra'}
GenesisPattern = {'Genesis'}
SweetwaterPattern = {'Sweetwater'}
PrincessNoPattern = {'Princess No\'s'}
EvolvingSecondaryPattern = {'Evolving'}
EmblemPattern = {'Emblem', 'Hybrid Heart'}
Totem = {'Dark Doom Totem', 'Dark Avenger Totem', 'Dark Hellia Totem', 'Dark Grin Totem', 'Frenzy Totem', 'Beodog Figurine', 'Billy Figurine', 'Adler Figurine', 'Mansa Figurine', 'Lireni\'s Wish', 'Guild Castle Blue Brooch', 'Guild Castle Red Brooch', 'Guild Castle Green Brooch', 'Horseback Riding Doll Totem', 'Jade Kettle Totem', 'Bronze Incense Burner Totem', 'Nine-Tailed Fox Totem', 'Ancient Slate Replica'}
Medal = {'Diligent Explorer', 'Quest Specialist', 'Celebrity', 'Veteran Hunter', 'Legendary Hunter', 'Maple Idol', 'Horntail Slayer', 'Pink Bean Slayer', 'Henesys Donor', 'Ellinia Donor', 'Perion Donor', 'Kerning City Donor', 'Sleepywood Donor', 'Nautilus Donor', 'Lith Harbor Donor', 'Noblesse', 'Tristan\'s Successor', 'Outstanding Citizen', 'Wonderful Pet Owner', 'Chair King', 'Azalea Corsage', 'Forsythia Corsage', 'Clover Corsage', 'Spring Flower Corsage', 'Humble Honor', 'Bearded Ambition', 'King\'s Dignity', 'Hawk\'s Eyes', 'Fairy\'s Pupil', 'Clairvoyant', 'No Pain, No Gain', 'Beauty of Patience', 'Patience Incarnate', 'Hand of the Family', 'Expert\'s Heart', 'Midas\'s Touch', 'Troubled Youth', 'Bard', 'Human Enough', 'Eyes on Me', 'The Hotness', 'Epitome of Beauty', 'Fritto\'s Friend', 'Pollo\'s Friend', 'Promising Kid', 'Dynamic Hair', 'Beginner Explorer', 'The One Who\'s Touched the Sky', 'Victoria Monster Collector', 'Victoria Monster Master', 'Edelstein Monster Collector', 'El Nath Monster Collector', 'Ludibrium\'s Collector', 'Nihal\'s Collector', 'Mu Lung Garden Monster Collector', 'Minar Forest Monster Collector', 'Temple\'s Collector', 'Otherworld\'s Collector', 'Island Explorer', 'Deep Sea Monster Collector', 'Arcane River Collector', 'Collector of Friends', 'Ludus Lake Explorer', 'Undersea Explorer', 'Spirit Diviner', 'El Nath Explorer', 'Mu Lung Explorer', 'Sleepywood Explorer', 'Victoria Explorer', 'Soul Conjurer', 'Nihal Desert Explorer', 'Minar Forest Explorer', 'Ossyria Explorer', 'Maple Explorer', 'A Member of The Maple Alliance', 'Soul Guardian', 'Saint Exorcist', 'Ursus Defeater', 'Ursus Defeater King', 'One Who Has Godly Control', 'The Will to Survive', 'Ursus SSS Procurer', 'Ursus SSS Collector', 'Ursus SSS Super Collector', 'Ursus Mouth Wash', 'Ursus Handgrip', 'Master of Assists', 'Monday Monster Park', 'Tuesday Monster Park', 'Wednesday Monster Park', 'Thursday Monster Park', 'Friday Monster Park', 'Saturday Monster Park', 'Sunday Monster Park', 'Seven Day Monster Parker', 'Silent Crusade Champion', 'Hurray That\'s Good!', 'All Aboard the Funk Train', 'Taa Daa', 'HYPER BURNING', 'Ace of the Alliance', 'Maple World Savior', 'Icebreaker', 'Final Hitter', 'A Proper Hero', 'Luminous\'s Focus', 'Freud\'s Leadership', 'Shade\'s Compassion', 'Phantom\'s Freedom', 'Aran\'s Strength', 'Mercedes\'s Speed', 'Shattering Pot', 'Out of My Way', 'Ignorant of the Truth', 'Master of Disguise', 'Mission Possible', 'World Tree Conqueror', 'Herbicider', 'Damien\'s Nemesis', 'Antellion Guardian', 'Commerci\'s Forever-Friend', 'Fire Raccoon Finance Auditor', 'Chaos Von Bon Crusher', 'Chaos Pierre Crusher', 'Chaos Crimson Queen Crusher', 'Chaos Vellum Crusher', 'Savior of the Empress', 'ナノウェーブ専門家', 'カブキ町のナンバーワン', 'Beach Bum', 'Honorary Fairy Professor', 'Deckhand', 'Elodin Bird Dog', 'Swamp Region Troubleshooter', 'Rocky Mountain Hunter', 'Violetta\'s Knight', 'Danger Seeker', 'Helper in the Clouds', 'Snowfield Explorer', 'Ariant Culture Expert', 'Magatia\'s Alchemist', 'White Mage Minion', 'Empress Maker', 'Winter Bard', 'Shadow Alchemist', '豫园守护者勋章', 'Sharenian Knight', 'Bookworm', 'Ellin Forest Guardian', 'Ludibrium Sheriff', 'Heart of a Lion', 'Rose Knight', 'World Tree Guardian', 'Phantom Forest Guardian', 'Savior of Azwan', 'Seeker of Gilded Truth', '101st Time\'s the Charm', 'Like Clouds and Winds', 'Crimsonheart Savior', 'Blazing Hot', 'Sage Asceticism', 'White M-Forcer', 'Shaolin Temple Savior', 'An Equal Among Giants', 'Jackpot Entertainment Co-CEO', 'Rise from Ruins', 'Phoenix of Azwan', 'Hilla Specialist', 'Light of Azwan', 'Krakian Chaser', 'Passion of Singapore', 'Hero of Ulu City', 'Detective Rave\'s Honorary Assistant', 'Legend of Crimsonwood Mountain', 'Fox Point Ranger', 'Twilight Warrior', 'The secret of Ghost Ship', 'Naricain\'s Revival', 'Sengoku Guardian', 'Butterfly Dreams', 'Astral Whale', 'Emblem of the Alliance', 'Void Vanquisher', 'Eternal Light', 'Defying Destiny', 'Waiting for the Sword\'s Owner', 'Salvation In Your Own Hands', 'Slow and Steady', 'Hundun\'s Pallbearer', 'One Who Arrived in Paradise', 'Promise to Meet Again', 'The Eternal Tree\'s Guardian', 'Vanquisher Of Nightmares', 'The True Abyss', 'One with the Labyrinth', 'Good Cook', 'Party Quest Legendary Collector', 'Tourist of Oz', 'Webmaster', 'Camper of Oz', 'Have a Heart', 'Traveler of Oz', 'Courageous', 'Expert of Oz', 'Brainy', 'Master of Oz', 'No Place Like Home'}
Names = Totem | BossAccessorySet | CRAArmor | EternalArmor | PitchedBossSet | SuperiorGolluxSet | ReinforcedGolluxSet | SengokuTreasureSet | DawnBossSet | Medal | Shields
Patterns = FafnirPattern | PensalirPattern | AbsolabPattern | AUPattern | GenesisPattern | SweetwaterPattern | PrincessNoPattern | EvolvingSecondaryPattern

# %%
itemsWeNeed = []
for item in arr:
    if 'name' not in item or item['typeInfo']['overallCategory'] !='Equip':
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


