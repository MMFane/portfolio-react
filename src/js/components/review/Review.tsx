import * as React from 'react';
import './review.css';

export interface ReviewProps {
    readonly image: string;
    readonly src: string;
}

class ResponsiveImage extends React.Component<ReviewProps> {
    render() {

        return (
            <div className={`no-overflow`}>
            </div>
        );
    }
}

export default ResponsiveImage;