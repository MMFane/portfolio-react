import * as React from 'react';
import Gallery from '../../gallery/Gallery';

import artTest from '../../../../images/gallery-stellar-fortune/art-test.jpg';
import bonus from '../../../../images/gallery-stellar-fortune/sf-bonus.jpg';
import bonusWild from '../../../../images/gallery-stellar-fortune/sf-bonus-wild.jpg';
import symbols from '../../../../images/gallery-stellar-fortune/sf-symbols.jpg';
import topGlass from '../../../../images/gallery-stellar-fortune/sf-top-glass.jpg';

export interface GallerySFProps {
    readonly classes: string;
}

class GallerySF extends React.Component<GallerySFProps> {
    render() {
        const classes = this.props.classes;

        return (
            <Gallery classes={`${classes ? classes : ''}`}
                elements={[artTest, bonus, bonusWild, symbols, topGlass]}
            />
        );
    }
}

export default GallerySF;