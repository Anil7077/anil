import Image from 'next/image';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/images/anilimg-2.jpg" },
    { url: "/images/anilimg-3.jpg" },
    { url: "/images/anilimg-2.jpg" },
];

const ImageSlider = () => {

    return (
        <>
            <div>
                <SimpleImageSlider
                    width={150}
                    height={284}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
        </>
    )
}

export default ImageSlider;