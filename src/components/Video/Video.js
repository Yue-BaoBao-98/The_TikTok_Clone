import PropTypes from 'prop-types';
import { useRef } from 'react';

function Video({ video_src }) {
    const videoRef = useRef();

    return (
        <video
            controls
            autostart="false"
            autoPlay={false}
            ref={videoRef}
            src={video_src}
            type="video/mp4"
            style={{ width: '300px' }}
        />
    );
}

Video.propTypes = {
    video_src: PropTypes.string,
};

export default Video;
