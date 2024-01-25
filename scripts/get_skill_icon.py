#!/usr/bin/python3
# -*- coding: UTF-8 -*-
import argparse
import json
import requests
from tqdm import tqdm

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True, type=argparse.FileType('r', encoding='utf-8'))
    parser.add_argument('--output', required=True, type=argparse.FileType('w', encoding='utf-8'))
    args = parser.parse_args()
    jobs = json.load(args.input)
    icons = dict()
    for job in tqdm(jobs):
        skill_book = None
        suc = False
        while not suc:
            try:
                r = requests.get('https://maplestory.io/api/GMS/232/job/{}/skillbook'.format(job['id']))
                suc = True
                skill_book = r.json()
            except:
                pass
        if skill_book is None:
            print(job)
            continue
        for skill in skill_book['skills']:
            if 'description' not in skill or 'name' not in skill['description']:
                continue
            icons[skill['description']['name']] = skill['icon']
    result = []
    for name, icon in icons.items():
        result.append({'name': name, 'icon': icon})
    json.dump(result, args.output, indent=2)
    return

if __name__ == '__main__':
    main()
