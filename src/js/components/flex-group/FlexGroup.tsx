import * as React from 'react';
import './flex-group.css';

export interface FlexGroupProps {
    readonly classes: string;
}

class FlexGroup extends React.Component<FlexGroupProps> {
    render() {
        const classes = this.props.classes;
        const children = this.props.children;

        return (
            <div className={`flex ${classes}`}>
                {children}
            </div>
        );
    }
}

export default FlexGroup;