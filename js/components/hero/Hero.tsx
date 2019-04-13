import * as React from 'react';
import './hero.css';

class Hero extends React.Component<any, any> {
  render() {
    return (
        <>
            <div className="hero">
                <h1 className="hero-content">{this.props.content}</h1>
                <div className="hero-bg"></div>
                <div className="hero-color"></div>
            </div>
        </>
    );
  }
}

export default Hero;