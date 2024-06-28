import React, { useState } from 'react';
import { openUrl } from '../utils/helper';
const Post = ({ post }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === post.images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? post.images.length - 1 : prevIndex - 1
        );
    };

    return (

        <div className="carousel">
            <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                &lt;
            </button>
            <img
                src={post.images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                className="carousel__img"
                onClick={() => openUrl(post.url)}
            />
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button>
        </div>

    );
};
export default Post;