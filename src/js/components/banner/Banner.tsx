import * as React from 'react';
import './banner.css';

export interface BannerProps {
    readonly classes: string;
    readonly bgColor: string;
    readonly bgImage: string;
}

class Banner extends React.Component<BannerProps> {
  render() {
    const children = this.props.children;
    const classes = this.props.classes;
    const bgColor = this.props.bgColor;
    const bgImage = this.props.bgImage;

    return (
        <div className={`banner ${classes ? classes : ''} ${bgColor ? bgColor : ''} ${bgImage ? 'bg-'+bgImage : ''}`}>
            {children}
        </div>
    );
  }
}

export default Banner;