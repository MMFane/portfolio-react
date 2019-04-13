import * as React from 'react';
import Banner from './banner/Banner';
import Hero from './hero/Hero';
import Nav from './nav/Nav';
import { hot } from 'react-hot-loader/root'

class App extends React.Component<any, any> {

  render() {
    return (
      <>
      <Nav />
      <Banner content="Portfolio" />
      <Hero content="Hero Image" />
      </>
    );
  }
}

export default hot(App);