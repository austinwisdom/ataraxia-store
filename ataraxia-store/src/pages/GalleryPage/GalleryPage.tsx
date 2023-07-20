import { FC } from "react";
import testImage from "../../assets/images/ai-images/computer2.png"

import "./GalleryPage.scss"


const GalleryPage: FC = () => {
    return (
        <div>
            <main className="gallery">
            <img className="gallery__image" src={testImage} />
            </main>
        </div>
    );
};

export default GalleryPage;