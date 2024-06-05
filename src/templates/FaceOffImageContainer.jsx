import React from 'react';
import PropTypes from 'prop-types';

const FaceOffImages = ({ imgSrc1, imgSrc2, alt1, alt2 }) => {
    return (
        <div className="face-off-image-container">
            <img src={imgSrc1} alt={alt1} className="face-off-image" />
            <img src={imgSrc2} alt={alt2} className="face-off-image" />
        </div>
    );
};

FaceOffImages.propTypes = {
    imgSrc1: PropTypes.string.isRequired,
    imgSrc2: PropTypes.string.isRequired,
    alt1: PropTypes.string,
    alt2: PropTypes.string,
};

FaceOffImages.defaultProps = {
    alt1: '',
    alt2: '',
};

export default FaceOffImages;
