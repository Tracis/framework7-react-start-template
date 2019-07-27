// @ts-ignore
import flatten from 'flat';
import enMessages from '../translations/en.json';
import zhMessages from '../translations/zh-CN.json';

const messages: {
  [key: string]: {},
} = {
  'en': flatten(enMessages),
  'zh-CN': flatten(zhMessages),
};

export default messages;
