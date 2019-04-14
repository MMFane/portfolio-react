import * as React from 'react';
import './nav.css';
import Button from '../button/Button';
import FlexGroup from '../flex-group/FlexGroup';
import ResponsiveImage from '../responsive-image/ResponsiveImage';

export interface NavProps {

}

class Nav extends React.Component<NavProps> {
  render() {
    const logo = require('../../../images/Signature.png');

    return (
        <div id="nav">
            <FlexGroup classes="justify-center align-i-center">
                <Button text="Projects" />
                <Button text="Resume" />
                <ResponsiveImage src={logo} width={25}/>
                <Button text="About" />
                <Button text="Contact" />
            </FlexGroup>
        </div> 
    );
  }
}

export default Nav;