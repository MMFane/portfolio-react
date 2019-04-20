import * as React from 'react';
import Banner from './banner/Banner';
import Hero from './hero/Hero';
import Nav from './nav/Nav';
import ResponsiveImage from './responsive-image/ResponsiveImage';
import logo from '../../images/signature.png';
import headerWTCasino from '../../images/project-headers/header-wildtangent-casino.png';
import headerSpellSlingers from '../../images/project-headers/header-spellslingers.png';
import headerStellarFortune from '../../images/project-headers/header-stellar-fortune.png';
import { hot } from 'react-hot-loader/root';
import FlexGroup from './flex-group/FlexGroup';
import ImageButton from './image-button/ImageButton';

class App extends React.Component<any, any> {
  render() {
    return (
      <>
      <Nav />
      <Hero classes="first" color="black" height="" image="chalkboard">
        <div className="content mt-1">
            <ResponsiveImage classes="logo" src={logo} width={100}/>
            <h1>Samantha Yeager</h1>
            <h2><em>UI / UX Designer</em></h2>
        </div>
      </Hero>
      <Hero classes="second" height="x-large" color="black" image="">
        <div className="content">
        <FlexGroup classes="justify-center align-i-center mt-1 w-100">
            <ImageButton classes="first" image={headerWTCasino} text="WildTangent Casino"/>
            <ImageButton classes="" image={headerSpellSlingers} text="SpellSlingers"/>
            <ImageButton classes="last" image={headerStellarFortune} text="Stellar Fortune"/>
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