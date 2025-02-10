import { useState, useEffect } from 'react';
import { HeroImage01, HeroImage02, HeroImage03 } from "../assets"; // Adjust your image imports accordingly  

const images = [HeroImage01, HeroImage02, HeroImage03]; // Array of images  

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index  

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Loop through images  
        }, 3000); // Change image every 3 seconds  

        return () => clearInterval(interval); // Cleanup interval on unmount  
    }, []);

    return (
        <div className="w-full overflow-hidden relative mb-5">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`hero image ${index + 1}`}
                        className="object-cover w-full h-full"
                    // style={{ height: '300px' }} // Ensure the image does not exceed viewport height  
                    />
                ))}
            </div>
        </div>
    );
}

export default Hero;