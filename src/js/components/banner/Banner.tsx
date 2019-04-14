import * as React from 'react';
import './banner.css';

export interface BannerProps {
    readonly content: any;
}

class Banner extends React.Component<BannerProps> {
  render() {
    const content = this.props.content;

    return (
        <div className="banner">
            <h2>{content}</h2>
        </div>
    );
  }
}

export default Banner;