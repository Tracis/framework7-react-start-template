import './index.less';
import * as React from 'react';
import { Page, Navbar } from 'framework7-react';
import { connect } from 'react-redux';
import { AppState } from 'modules';
import ChatHistory from './ChatHistory';
import ChatInterface from './ChatInterface';
import { SystemState } from 'modules/types/system';
import { updateSession } from 'modules/actions/system';

import { ChatState } from 'modules/types/chat';
import { sendMessage } from 'modules/actions/chat';
import { thunkSendMessage } from './thunks';
interface AppProps {
  sendMessage: typeof sendMessage;
  updateSession: typeof updateSession;
  chat: ChatState;
  system: SystemState;
  thunkSendMessage: any;
}

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<AppProps> {
  state = {
    message: '',
  };

  componentDidMount() {
    this.props.updateSession({
      loggedIn: true,
      session: 'my_session',
      userName: 'myName',
    });
    this.props.sendMessage({
      user: 'Chat Bot',
      message: `This is a very basic chat application written in typescript using react
        and redux. Feel free to explore the source code.`,
      timestamp: new Date().getTime(),
    });

    this.props.thunkSendMessage('This message was sent by a thunk!');
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  }

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: this.props.system.userName,
      message,
      timestamp: new Date().getTime(),
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <Page name="example">
        <Navbar title="Chat Room" />
        <div className="chat-example parent">
          <ChatHistory messages={this.props.chat.messages} />
          <ChatInterface
            userName={this.props.system.userName}
            message={this.state.message}
            updateMessage={this.updateMessage}
            sendMessage={this.sendMessage}
          />
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat,
});

export default connect(
  mapStateToProps,
  { sendMessage, updateSession, thunkSendMessage },
)(App);
