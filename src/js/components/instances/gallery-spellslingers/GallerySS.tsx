import * as React from 'react';
import Gallery from '../../gallery/Gallery';

import duelScreens from '../../../../images/gallery-spellslingers/final/faction-duel-screens.jpg';
import factionSymbols from '../../../../images/gallery-spellslingers/final/faction-symbols.jpg';
import menus from '../../../../images/gallery-spellslingers/final/menus.jpg';

export interface GallerySSProps {
    readonly classes: string;
}

class GallerySS extends React.Component<GallerySSProps> {
    render() {
        const classes = this.props.classes;

        return (
            <Gallery classes={`${classes ? classes : ''}`}
                elements={[duelScreens, factionSymbols, menus ]}
            />
        );
    }
}

export default GallerySS;