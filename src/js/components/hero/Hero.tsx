import * as React from 'react';
import './hero.css';

export interface HeroProps {
  readonly color: string;
  readonly image: string;
  readonly height: string;
  readonly classes: string;
}

class Hero extends React.Component<any, any> {
  render() {

    const children = this.props.children;
    const color = this.props.color;
    const image = this.props.image;
    const height = this.props.height;
    const classes = this.props.classes;

    return (
        <>
            <div className={`hero ${classes ? classes : ''} ${height ? height : ''}`}>
                <div className="hero-content">
                    { children }
                </div>
                <div className="hero-bg"></div>
                <div className={`hero-color ${color}`}></div>
            </div>
        </>
    );
  }
}

export default Hero;