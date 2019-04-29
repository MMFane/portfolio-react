import * as React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { hot } from 'react-hot-loader/root';

import Banner from './banner/Banner';
import FlexGroup from './flex-group/FlexGroup';
import Gallery from './gallery/Gallery';
import Hero from './hero/Hero';
import ImageButton from './image-button/ImageButton';
import Nav from './nav/Nav';
import ResponsiveImage from './responsive-image/ResponsiveImage';
import Section from './section/Section';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faInstagram, faLinkedin);

import logo from '../../images/signature.png';
import headerWTCasino from '../../images/project-headers/header-wildtangent-casino.png';
import headerSpellSlingers from '../../images/project-headers/header-spellslingers.png';
import headerStellarFortune from '../../images/project-headers/header-stellar-fortune.png';

class App extends React.Component<any, any> {
  render() {
    return (
        <>
        <Nav />
         <Section classes="fixed-bg" color="black" image="chalkboard">
            <div className="content">
                <FlexGroup id="" classes="column align-center">
                    <ResponsiveImage classes="logo" src={logo} width={100} />
                    <h1>Samantha Yeager</h1>
                    <h2 className="dark-white"><em>UI / UX Designer</em></h2>
                </FlexGroup>
                <HashRouter>
                    <FlexGroup id="gallery-links" classes="justify-center align-i-center mt-1 w-100">
                        <NavLink to ="/wildtangent-casino">
                            <ImageButton classes="" image={headerWTCasino} text="WildTangent Casino" />
                        </NavLink>
                        <NavLink to="/spellslingers">
                            <ImageButton classes="" image={headerSpellSlingers} text="SpellSlingers" />
                        </NavLink>
                        <NavLink to="/stellar-fortune">
                            <ImageButton classes="" image={headerStellarFortune} text="Stellar Fortune" />
                        </NavLink>
                    </FlexGroup>
                    <div id="router-content">
                        <Route path="/wildtangent-casino" render={() => <Gallery classes="">WildTangent Casino Gallery</Gallery>} />
                        <Route path="/spellslingers" render={() => <Gallery classes="">SpellSlingers Gallery</Gallery>} />
                        <Route path="/stellar-fortune" render={() => <Gallery classes="">Stellar Fortune Gallery</Gallery>} />
                    </div>
                </HashRouter>
            </div>
        </Section>

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
            <FlexGroup id="" classes="justify-center align-i-center mt-1">
                    <a href="https://www.instagram.com/mmfane/">
                        <FontAwesomeIcon icon={faInstagram} size="lg" className="mr-1" />
                    </a>
                    <a href="https://www.linkedin.com/in/samerinyeager">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr-1" />
                    </a>
                    <a href="https://twitter.com/M_M_Fane">
                        <FontAwesomeIcon icon={faTwitter} size="lg"/>
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