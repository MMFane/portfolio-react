import * as React from 'react';
import Masonry from 'react-masonry-component';
import './gallery.css';

const masonryOptions = {
    transitionDuration: 0
};


export interface GalleryProps {
    readonly classes: string;
    readonly elements: Array<string>;
}

class Gallery extends React.Component<GalleryProps> {
    render() {
        const classes = this.props.classes;
        const elements = this.props.elements;
        // const children = this.props.children;

        const childElements = elements.map(function (element) {
            return (
                <li className="image-element-class" key={element}>
                    <img src={element} />
                </li>
            );
        });

        return (
            <Masonry
                className={`gallery ${classes ? classes : ''}`}
                elementType={'ul'} // default 'div'
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                // imagesLoadedOptions={imagesLoadedOptions}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;