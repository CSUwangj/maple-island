import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en-US', 'zh-CN'],
    react: {
      useSuspense: false
    },
    resources: {
      'zh-CN': {
        translations: {
          'submit': '确认',
          'reset': '重置',
          'legion': {
            'add-char': '添加角色',
            'rem-char': '删除角色'
          }
        }
      },
      'en-US': {
        translations: {
          'submit': 'Submit',
          'reset': 'Reset',
          'legion': {
            'add-char': 'Add Character',
            'rem-char': 'Remove Character'
          }
        }
      }
    },
    fallbackLng: [ 'zh-CN', 'en-US' ],
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  })


export default i18n