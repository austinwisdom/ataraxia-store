import { useState, FC } from "react";

// import ImageGrid from "../../components/ImageGrid.js"
import testImage from "../../assets/images/ai-images/computer2.png"

import "./GalleryPage.scss"

interface ImageProps {
    selectedImage: "string"
    setSelectedImage: () => void
}

// const [_selectedImage, _setSelectedImage] = useState(testImage);

const GalleryPage: FC<ImageProps> = () => {
    return (
        <div>
            {/* <ImageGrid setSelectedImg={setSelectedImage} /> */}
            <img src={testImage} />
            <h1>TEST</h1>
        </div>
    );
};

export default GalleryPage;