import * as React from 'react';
import './image-button.css';

export interface ImageButtonProps {
    readonly classes: string;
    readonly image: string;
    readonly text: string;
}

class ImageButton extends React.Component<ImageButtonProps> {
    render() {
        const classes = this.props.classes;
        const image = this.props.image;
        const text = this.props.text;

        return (
            <div className={`image-button ${classes}`}>
                <img src={image} />
                <h3 className="text">{text}</h3>
            </div>
        );
    }
}

export default ImageButton;