import * as React from 'react';
import './hero.css';

class Hero extends React.Component<any, any> {
  render() {
    return (
        <>
            <div className="hero">
                {this.props.content}
                <div className="hero-bg"></div>
                <div className="hero-color"></div>
            </div>
        </>
    );
  }
}

export default Hero;