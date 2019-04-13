import * as React from 'react';
import Nav from './nav/Nav';
import Hero from './hero/Hero';

class App extends React.Component<any, any> {

  render() {
    return (
      <>
      <Nav />
      <h1>Portfolio</h1>
      <Hero content="Hero Image" />
      </>
    );
  }
}

export default App;