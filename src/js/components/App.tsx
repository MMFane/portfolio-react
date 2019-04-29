import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Banner from './banner/Banner';
import FlexGroup from './flex-group/FlexGroup';
import Hero from './hero/Hero';
import ImageButton from './image-button/ImageButton';
import Nav from './nav/Nav';
import ResponsiveImage from './responsive-image/ResponsiveImage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faEnvelopeSquare, faTwitter, faInstagram, faFacebook);

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
                <h2 className="dark-white"><em>UI / UX Designer</em></h2>
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
        <Banner classes="" bgImage="" bgColor="red">
            <h2>Spacer</h2>
        </Banner>
        <Banner classes="" bgImage="" bgColor="black">
            <h2>Spacer</h2>
        </Banner>
        <Banner classes="" bgImage="" bgColor="dark-red">
            <h2>Spacer</h2>
        </Banner>
        <Banner classes="social angle-top-right fixed-bg" bgImage="chalkboard" bgColor="">
            <FlexGroup classes="justify-center align-i-center mt-1">
                    <a href="https://twitter.com/M_M_Fane">
                        <FontAwesomeIcon icon={faTwitter} size="lg" className="mr-1" />
                    </a>
                    <a href="https://www.instagram.com/mmfane/">
                        <FontAwesomeIcon icon={faInstagram} size="lg" className="mr-1" />
                    </a>
                    <a href="https://www.linkedin.com/in/samerinyeager">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
            </FlexGroup>
            <p>
                <a href="tel:+1-740-591-7429">+1 (740) 591-7429</a>
            </p>
            <p>
                <a href="mailto:sam.erin.yeager@gmail.com">sam.erin.yeager@gmail.com</a>
            </p>
        </Banner>
        <Banner classes="footer angle-top-left" bgImage="" bgColor="dark-red">
            <p>© 2018-2019 Sam Yeager | <a href="https://github.com/MMFane/portfolio-react">Check out the code on GitHub</a> </p>
        </Banner>
        </>
    );
  }
}

export default hot(App);