import * as React from 'react';
import './banner.css';
import { string } from 'prop-types';

class Banner extends React.Component<any, any> {
  render() {
    return (
        <>
            <div className="banner">
                <h2>{this.props.content}</h2>
            </div>
        </>
    );
  }
}

export default Banner;