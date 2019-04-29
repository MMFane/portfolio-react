import * as React from 'react';
import './flex-group.css';

export interface FlexGroupProps {
    readonly classes: string;
    readonly id: string;
}

class FlexGroup extends React.Component<FlexGroupProps> {
    render() {
        const classes = this.props.classes;
        const id = this.props.id;
        const children = this.props.children;

        return (
            <div id={id ? id : ''} className={`flex ${classes}`}>
                {children}
            </div>
        );
    }
}

export default FlexGroup;