import * as React from 'react';
import Banner from './banner/Banner';
import Hero from './hero/Hero';
import Nav from './nav/Nav';
import ResponsiveImage from './responsive-image/ResponsiveImage';
import logo from '../../images/signature.png';
// import background from '../../images/bg-chalkboard.jpg';
import { hot } from 'react-hot-loader/root';
import FlexGroup from './flex-group/FlexGroup';
import ImageButton from './image-button/ImageButton';

class App extends React.Component<any, any> {
  render() {
    return (
      <>
      <Nav />
      <Hero classes="first" color="black" height="large"
      // image={background}
      >
        <div className="content">
          <ResponsiveImage classes="logo" src={logo} width={100}/>
          <h1>Samantha Yeager</h1>
          <h2><em>UI / UX Designer</em></h2>
        </div>
      </Hero>
      <Hero classes="second" color="black"
      // image={background}
      >
        <div className="content">
        <FlexGroup classes="justify-center align-i-center mt-1">
          <ImageButton classes="mr-3 first" src="" text="Project 1"/>
          <ImageButton classes="mr-3" src="" text="Project 2"/>
          <ImageButton classes="last" src="" text="Project 3"/>
        </FlexGroup>
        </div>
      </Hero>
      <Banner content="Portfolio" />
      <Banner content="Portfolio" />
      <Banner content="Portfolio" />
      <Banner content="Portfolio" />
      <Banner content="Portfolio" />
      <Banner content="Portfolio" />
      <Banner content="Portfolio" />
      </>
    );
  }
}

export default hot(App);