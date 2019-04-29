import * as React from 'react';
import Gallery from '../../gallery/Gallery';

import hostess from '../../../../images/gallery-wildtangent-casino/final/casino-hostess.jpg';
import lobbyTiles from '../../../../images/gallery-wildtangent-casino/final/lobby-tiles.jpg';
import bonusGame from '../../../../images/gallery-wildtangent-casino/final/pb-bonus-game.jpg';
import dialogs from '../../../../images/gallery-wildtangent-casino/final/pb-dialogs.jpg';
import freeSpins from '../../../../images/gallery-wildtangent-casino/final/pb-free-spins.jpg';
import playScreenPB from '../../../../images/gallery-wildtangent-casino/final/pb-playscreen.jpg';
import symbolsPB from '../../../../images/gallery-wildtangent-casino/final/pb-symbols.jpg';
import playScreenS7 from '../../../../images/gallery-wildtangent-casino/final/s7-playscreen.jpg';
import symbolsS7 from '../../../../images/gallery-wildtangent-casino/final/s7-symbols.jpg';

export interface GalleryWTCProps {
    readonly classes: string;
}

class GalleryWTC extends React.Component<GalleryWTCProps> {
    render() {
        const classes = this.props.classes;
    
        return (
            <Gallery classes={`${classes ? classes : ''}`}
                elements={[ hostess, lobbyTiles, bonusGame, dialogs, freeSpins, playScreenPB, symbolsPB, playScreenS7, symbolsS7 ]}
            />
        );
    }
}

export default GalleryWTC;