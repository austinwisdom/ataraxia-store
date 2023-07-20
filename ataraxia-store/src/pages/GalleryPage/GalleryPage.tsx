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
                          `これはテストです`,
                          5000,
                          `THISはテストです`,
                          200,
                          `THISはTESTです`,
                          200,
                          `THIS IS A TEST`,
                          5000
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