import * as React from 'react';
import './responsive-image.css';
import { string } from 'prop-types';

export interface ResponsiveImageProps {
    readonly src: string;
    readonly width: number;
}

class ResponsiveImage extends React.Component<ResponsiveImageProps> {
    render() {
        const src = this.props.src;
        const width = this.props.width;

        return (
            <div className="no-overflow">
                <img src={src} width={width}/>
            </div>
        );
    }
}

export default ResponsiveImage;