import * as React from 'react';
import './hero.css';

export interface HeroProps {
  readonly classes: string;
  readonly angle: string;
  readonly color: string;
  readonly height: string;
  readonly image: string;
}

class Hero extends React.Component<any, any> {
  render() {

    const children = this.props.children;
    const classes = this.props.classes;
    const angle = this.props.angle;
    const color = this.props.color;
    const height = this.props.height;
    const image = this.props.image;

    return (
        <>
            <div className={`hero ${classes ? classes : ''} ${angle ? "angle-"+angle : ''} ${height ? height : ''}`}>
                <div className="hero-content">
                    { children }
                </div>
                <div className={`hero-bg ${image ? "bg-"+image : ''}`}></div>
                <div className={`hero-color ${color ? color : ''}`}></div>
            </div>
        </>
    );
  }
}

export default Hero;