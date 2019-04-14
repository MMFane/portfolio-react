import * as React from 'react';
import './button.css';

export interface ButtonProps {
    readonly text: string;
}

class Button extends React.Component<ButtonProps> {
    render() {
        const buttonText = this.props.text;

        return (
            <button className="button">{buttonText}</button>
        );
    }
}

export default Button;