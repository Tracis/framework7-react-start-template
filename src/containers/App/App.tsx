import * as React from 'react';
import PropTypes from 'prop-types';
import { App, View } from 'framework7-react';
import { makeRoutes } from 'utils';
import messages from 'messages';

export default class AppIndex extends React.Component<any, any> {
  static contextTypes = {
    intl: PropTypes.object,
  };

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  getParams = () => {
    const { intl } = this.context;
    const routes = makeRoutes();
    console.log(routes);
    return {
      theme: 'auto',
      name: '0.0.1',
      id: 'start-template-mobile',
      routes,
      on: {},
      dialog: {
        buttonOk: intl.formatMessage(messages.buttonOk),
        buttonCancel: intl.formatMessage(messages.buttonCancel),
      },
    };
  }

  render() {
    const params = this.getParams();
    return (
      <App params={params}>
        <View
          id="main-view"
          className="safe-areas"
          main
          router
          url="/"
          pushState
          pushStateSeparator="#"
        />
      </App>
    );
  }
}
