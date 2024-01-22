#!/usr/bin/python3
# -*- coding: UTF-8 -*-
import json
import requests
import argparse
from tqdm import tqdm
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True, type=argparse.FileType('r', encoding='utf-8'))
    parser.add_argument('--output', required=True, type=argparse.FileType('w', encoding='utf-8'))
    args = parser.parse_args()
    items = json.load(args.input)
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
    json.dump(itemsDetail, args.output, indent=2)
    return

if __name__ == '__main__':
    main()
