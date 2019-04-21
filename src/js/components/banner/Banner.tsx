import * as React from 'react';
import './banner.css';

export interface BannerProps {
    readonly classes: string;
}

class Banner extends React.Component<BannerProps> {
  render() {
    const children = this.props.children;
    const classes = this.props.classes;

    return (
      <div className={`banner ${classes ? classes : ''}`}>
            {children}
        </div>
    );
  }
}

export default Banner;