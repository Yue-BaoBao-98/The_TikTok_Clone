import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import styles from './Image.module.scss';

import images from '~/assets/images';

// console.log(images.noAvatar);

const Image = forwardRef(({ className, src, alt, fallback = images.noAvatar, ...props }, ref) => {
    const [imgFallback, setImgFallback] = useState();

    const handleError = () => {
        setImgFallback(fallback);
    };

    return (
        <img
            ref={ref}
            className={clsx(styles.wrapper, className)}
            src={imgFallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
