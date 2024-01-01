import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'zh'],
    react: {
      useSuspense: false
    },
    resources: {
      'zh': {
        translations: {
          ':': '：',
          'submit': '确认',
          'start': '开始',
          'reset': '重置',
          'clear': '清空棋盘',
          'instructions': '使用方法',
          'legion': {
            'add-char': '添加角色',
            'rem-char': '删除角色',
            'button1': 'fill with my legion(auto calculate legion rank)',
            'button2': 'fill with my legion(ignore character limit)',
            'instruction1': '1. Click the grid spaces you want to be filled, the region click will help you fill it in faster.',
            'instruction2': '2. Input the amount of each shape you want to be filled in the board.',
            'instruction3': '3. The space that the pieces take up should equal the amount of grid spaces you filled, \'although the program will still try to run otherwise.',
            'instruction4': '4. When you press Start the program will try to fill the board spaces with the pieces you\'ve chosen, click on Live Solve if you want to see the board filled in real time.',
            'lvl60': 'lvl60',
            'lvl100': 'lvl100',
            'warriorPirate140': 'warriorPirate140',
            'mageThiefArcher140': 'mageThiefArcher140',
            'warrior200': 'warrior200',
            'archer200': 'archer200',
            'thiefLab200': 'thiefLab200',
            'mage200': 'mage200',
            'pirate200': 'pirate200',
            'warrior250': 'warrior250',
            'archer250': 'archer250',
            'thief250': 'thief250',
            'mage250': 'mage250',
            'pirate250': 'pirate250',
            'xenon250': 'xenon250',
            'enhancedLab200': 'enhancedLab200',
            'enhancedLab250': 'enhancedLab250',
            'lab250': 'lab250',
            'bigclick': '选择区域'
          }
        }
      },
      'en': {
        translations: {
          ':': ':',
          'submit': 'Submit',
          'reset': 'Reset',
          'start': 'Start',
          'clear': 'Clear',
          'instructions': 'Instructions',
          'legion': {
            'add-char': 'Add Character',
            'rem-char': 'Remove Character',
            'button1': 'fill with my legion(auto calculate legion rank)',
            'button2': 'fill with my legion(ignore character limit)',
            'instruction1': '1. Click the grid spaces you want to be filled, the region click will help you fill it in faster.',
            'instruction2': '2. Input the amount of each shape you want to be filled in the board.',
            'instruction3': '3. The space that the pieces take up should equal the amount of grid spaces you filled, \'although the program will still try to run otherwise.',
            'instruction4': '4. When you press Start the program will try to fill the board spaces with the pieces you\'ve chosen, click on Live Solve if you want to see the board filled in real time.',
            'lvl60': 'lvl60',
            'lvl100': 'lvl100',
            'warriorPirate140': 'warriorPirate140',
            'mageThiefArcher140': 'mageThiefArcher140',
            'warrior200': 'warrior200',
            'archer200': 'archer200',
            'thiefLab200': 'thiefLab200',
            'mage200': 'mage200',
            'pirate200': 'pirate200',
            'warrior250': 'warrior250',
            'archer250': 'archer250',
            'thief250': 'thief250',
            'mage250': 'mage250',
            'pirate250': 'pirate250',
            'xenon250': 'xenon250',
            'enhancedLab200': 'enhancedLab200',
            'enhancedLab250': 'enhancedLab250',
            'lab250': 'lab250',
            'bigclick': 'Region Group Click'
          }
        }
      }
    },
    fallbackLng: ['zh', 'en' ],
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnEmptyString: false
  })


export default i18n