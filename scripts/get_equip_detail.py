#!/usr/bin/python3
# -*- coding: UTF-8 -*-
import sys
import json
import requests
from tqdm import tqdm
def main(argv):
    with open('itemsWeNeed.json', 'r') as f:
        items = json.load(f)
    itemsDetail = []
    for item in tqdm(items):
        itemDetail = None
        while itemDetail is None:
            try:
                r = requests.get('https://maplestory.io/api/GMS/247/item/{}'.format(item['id']))
                itemDetail = r.json()
            except:
                pass
        if 'frameBooks' in itemDetail:
            itemDetail.pop('frameBooks')
        itemsDetail.append(itemDetail)
    with open('itemsDetail.json', 'w', encoding='utf-8') as f:
        json.dump(itemsDetail, f, indent=2)
    return

if __name__ == '__main__':
    main(sys.argv)
