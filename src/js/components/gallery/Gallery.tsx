import * as React from 'react';
import './gallery.css';

export interface GalleryProps {
    readonly classes: string;
}

class Gallery extends React.Component<GalleryProps> {
    render() {
        const classes = this.props.classes;
        const children = this.props.children;

        return (
            <div className={`gallery ${classes}`}>
                {children}
            </div>
        );
    }
}

export default Gallery;