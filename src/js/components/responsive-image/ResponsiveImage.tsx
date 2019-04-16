import * as React from 'react';
import './responsive-image.css';

export interface ResponsiveImageProps {
    readonly classes: string;
    readonly src: string;
    readonly width: number;
}

class ResponsiveImage extends React.Component<ResponsiveImageProps> {
    render() {
        const classes = this.props.classes;
        const src = this.props.src;
        const width = this.props.width;

        return (
            <div className={`${classes} no-overflow`}>
                <img src={src} width={width}/>
            </div>
        );
    }
}

export default ResponsiveImage;