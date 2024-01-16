#!/usr/bin/python3
# -*- coding: UTF-8 -*-
import sys
import json
import requests
from tqdm import tqdm

TOTAL_EQUIP = 57053

def main(argv):
    equipments = []
    for i in tqdm(range(0, TOTAL_EQUIP, 50)):
        j = None
        while j is None:
            try:
                r = requests.get('https://maplestory.io/api/GMS/247/item/list?count=50&startPosition={}&cashFilter=false'.format(i))
                j = r.json()
                equipments += j
            except:
                pass
    with open('equipIDs.json', 'w', encoding='utf-8') as f:
        json.dump(equipments, f)
    return

if __name__ == '__main__':
    main(sys.argv)
