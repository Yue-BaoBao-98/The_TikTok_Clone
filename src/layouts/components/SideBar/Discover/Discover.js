import clsx from 'clsx';
import PropTypes from 'prop-types';

import {
    faFilm,
    faFire,
    faUtensils,
    faMusic,
    faGamepad,
    faLocationDot,
    faTrainSubway,
    faCamera,
} from '@fortawesome/free-solid-svg-icons';

import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

import styles from './Discover.module.scss';
import DiscoverHashtag from './DiscoverHashtag';

function Discover({ label }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <h4 className={clsx(styles.label)}>{label}</h4>

            <div className={clsx(styles.discover_items)}>
                <DiscoverHashtag icon={faFire} hashtagLabel="anhtraivuotnganchonggai" />
                <DiscoverHashtag icon={faMusic} hashtagLabel="lady gaga" />
                <DiscoverHashtag icon={faFilm} hashtagLabel="thewildrobot" />
                <DiscoverHashtag icon={faFire} hashtagLabel="chidepdapgioresong" />
                <DiscoverHashtag icon={faMusic} hashtagLabel="motthegiobanghaigangtay" />
                <DiscoverHashtag icon={faCamera} hashtagLabel="sony a7c2" />
                <DiscoverHashtag hashtagLabel="photography tips" />
                <DiscoverHashtag icon={faMusic} hashtagLabel="taylor swift" />
                <DiscoverHashtag icon={faMusic} hashtagLabel="Die With A Smile" />
                <DiscoverHashtag icon={faGamepad} hashtagLabel="black myth wukong" />
                <DiscoverHashtag icon={faLocationDot} hashtagLabel="Korea" />
                <DiscoverHashtag hashtagLabel="travel tips" />
                <DiscoverHashtag icon={faUtensils} hashtagLabel="christine ha" />
                <DiscoverHashtag icon={faMusic} hashtagLabel="bomhengio" />
                <DiscoverHashtag hashtagLabel="skin care" />
                <DiscoverHashtag icon={faTrainSubway} hashtagLabel="metro1" />
                <DiscoverHashtag icon={faLocationDot} hashtagLabel="Paris" />
                <DiscoverHashtag icon={faMusic} hashtagLabel="neuanhlaem" />
                <DiscoverHashtag hashtagLabel="Samsung" />
                <DiscoverHashtag icon={faFilm} hashtagLabel="strangerthings" />
                <DiscoverHashtag icon={faApple} hashtagLabel="Apple" />
                <DiscoverHashtag icon={faAndroid} hashtagLabel="android" />
            </div>
        </div>
    );
}

Discover.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Discover;
