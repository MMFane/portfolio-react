import * as React from 'react';
import './image-button.css';

export interface ImageButtonProps {
    readonly classes: string;
    readonly src: string;
    readonly text: string;
}

class ImageButton extends React.Component<ImageButtonProps> {
    render() {
        const classes = this.props.classes;
        const src = this.props.src;
        const text = this.props.text;

        return (
            <div className={`image-button ${classes}`}>
                <img src={src} />
                <h3 className="text">{text}</h3>
            </div>
        );
    }
}

export default ImageButton;