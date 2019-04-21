import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Banner from './banner/Banner';
import FlexGroup from './flex-group/FlexGroup';
import Hero from './hero/Hero';
import ImageButton from './image-button/ImageButton';
import Nav from './nav/Nav';
import ResponsiveImage from './responsive-image/ResponsiveImage';

import logo from '../../images/signature.png';
import headerWTCasino from '../../images/project-headers/header-wildtangent-casino.png';
import headerSpellSlingers from '../../images/project-headers/header-spellslingers.png';
import headerStellarFortune from '../../images/project-headers/header-stellar-fortune.png';

class App extends React.Component<any, any> {
  render() {
    return (
        <>
        <Nav />
        <Hero classes="first" angle="bottom-left" color="black" height="large" image="chalkboard">
            <div className="content mt-1">
                <ResponsiveImage classes="logo" src={logo} width={100}/>
                <h1>Samantha Yeager</h1>
                <h2><em>UI / UX Designer</em></h2>
            </div>
        </Hero>
        <Hero classes="second" angle="" height="x-large" color="black" image="casino">
            <div className="content">
            <FlexGroup classes="justify-center align-i-center mt-1 w-100">
                <ImageButton classes="" image={headerWTCasino} text="WildTangent Casino"/>
                <ImageButton classes="" image={headerSpellSlingers} text="SpellSlingers"/>
                <ImageButton classes="" image={headerStellarFortune} text="Stellar Fortune"/>
            </FlexGroup>
            </div>
        </Hero>
        <Banner classes="">
            <h2>Spacer</h2>
        </Banner>
        <Banner classes="">
            <h2>Spacer</h2>
        </Banner>
        <Banner classes="">
            <h2>Spacer</h2>
        </Banner>
        <Banner classes="footer">
            <h2>Footer</h2>
        </Banner>
        </>
    );
  }
}

export default hot(App);