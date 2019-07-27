import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';

export default function addIntlLocalData() {
  addLocaleData([...zhLocaleData, ...enLocaleData]);
}
