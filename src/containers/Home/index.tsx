import React from 'react';
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  List,
  ListItem,
} from 'framework7-react';

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar title="My App"/>
    {/* Page content */}
    <Block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>

    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/example/" title="Example" />
      <ListItem link="/404/" title="404" />
    </List>
  </Page>
);
