import { FC } from "react";

import { TypeAnimation } from 'react-type-animation';

import tv from "../../assets/images/ai-images/computer2.png"
import garden from "../../assets/images/ai-images/garden.png"
import cy from "../../assets/images/ai-images/cy.png"
import "./GalleryPage.scss"


const GalleryPage: FC = () => {
    return (
        <div>
            <main className="gallery">
                <div className="gallery__div--image">
                    <img className="d-1 gallery__image" src={tv} />
                <div className="text__transform">
                    <TypeAnimation className="gallery__typewriter"
                        style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                        sequence={[
                          `ビデオゲームをするのが好きです`,
                          1000,
                          `I ビデオゲームをするのが好きです`,
                          200,
                          `I ビデオゲームをするのがLIKE`,
                          200,
                          `I ビデオGAMESをするのが LIKE`,
                          200,
                          `I ビデオ GAMESをPLAYINGのが LIKE`,
                          200,
                          `I VIDEO GAMESをPLAYINGのが LIKE`,
                          200,
                          `I LIKE VIDEO GAMES PLAYINGのが`,
                          200,
                          `I LIKE PLAYING VIDEO GAMES のが`,
                          200,
                          `I LIKE PLAYING VIDEO GAMES`
                        ]}
                        speed={99}
                        omitDeletionAnimation={true}
                        repeat={0}
                        cursor={false}
                    />
                </div>
                </div>
                <div className="gallery__div--image">
                    <img className="d-1 gallery__image" src={garden} />
                </div>
                <div className="gallery__div--image">
                    <img className="d-1 gallery__image" src={cy} />
                </div>

            </main>
        </div>
    );
};

export default GalleryPage;