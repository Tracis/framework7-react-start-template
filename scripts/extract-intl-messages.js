'use strict'
const extractReactIntlMessages = require('extract-react-intl-messages')

const locales = ['en','zh-CN'];
const pattern = 'src/messages/**/!(*.test).{ts,tsx}';
const buildDir = 'src/translations';
const defaultLocale = 'zh-CN';
const flat = false;
const extractComments = true;

extractReactIntlMessages(locales, pattern, buildDir, { defaultLocale, flat, extractComments }).then(
  () => {
    console.log('finish extractReactIntlMessages')
  }
)