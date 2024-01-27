
options = [
    [3, 6, 7, 9, 10, 12, 13],
    [3, 6, 7, 9, 10],
    [15, 30, 35, 40],
    [30, 35, 40]
]
stats = ['PercentSTR', 'PercentDEX', 'PercentINT', 'PercentLUK', 'PercentHP', 'PercentMP', 'PercentAllStats', 'PercentATT', 'PercentMATT',
'IED', 'DMG', 'BD', 'CR']
description = ['STR', 'DEX', 'INT', 'LUK', 'MaxHP', 'MaxMP', 'All Stats', 'ATT', 'Magic ATT', 'Ignore Enemy Defence', 'Damage', 'Boss Monster Damage', 'Critical Rate']
position = [13, 14, 15, 16, 7, 8, 12, 10, 11, 18, 19, 20, 23]
optionType = [0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 3, 0]
base = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

template = '''
const {}{} = new Line(
  \'{}: +{}%\',
  new EffectStats(
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  )
)
'''

lines = []
f = open('tmp. ts', 'w', encoding='utf-8')
for i in range(0, len(stats)):
    for op in options[optionType[i]]:
        stats_num = base.copy()
        stats_num[position[i]] = op
        f.write(template.format(stats[i], op, description[i], op, *stats_num))
        lines.append('{}{}'.format(stats[i], op))
f.write('\nexport const ' + r'{' + '\n')
for line in lines:
    f.write('  {},\n'.format(line))
f.write(r'}')
f.close()
