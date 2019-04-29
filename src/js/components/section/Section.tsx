import * as React from 'react';
import './section.css';

export interface SectionProps {
    readonly classes: string;
    readonly color: string;
    readonly image: string;
}

class Section extends React.Component<SectionProps> {
    render() {

        const children = this.props.children;
        const classes = this.props.classes;
        const color = this.props.color;
        const image = this.props.image;

        return (
            <>
                <div className={`section ${classes ? classes : ''} ${color ? color : ''} ${image ? "bg-"+image : ''}`}>
                    <div className="section-content">
                        {children}
                    </div>
                </div>
            </>
        );
    }
}

export default Section;