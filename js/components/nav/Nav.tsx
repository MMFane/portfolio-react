import * as React from 'react';
import './nav.css';
import Button from '../button/Button';

class Nav extends React.Component<any, any> {
  render() {
    return (
        <>
            <div id="nav">
                <Button text="Projects"/>
                <Button text="Resume"/>
                <Button text="About"/>
                <Button text="Contact"/>
            </div>
        </>
    );
  }
}

export default Nav;