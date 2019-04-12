import * as React from 'react';
import Nav from './nav/Nav';

class App extends React.Component<any, any> {

  render() {
    return (
      <>
      <Nav />
      <h1>Hi! I am your app</h1>
      </>
    );
  }
}

export default App;