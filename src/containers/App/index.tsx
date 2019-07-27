import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { localMessages } from 'utils';
import App from './App';

export default class AppIndex extends React.Component<any, any> {
  render() {
    const locale = 'zh-CN';
    return (
      <IntlProvider
        locale={locale}
        messages={localMessages[locale]}
        key={locale}
      >
        <App />
      </IntlProvider>
    );
  }
}
