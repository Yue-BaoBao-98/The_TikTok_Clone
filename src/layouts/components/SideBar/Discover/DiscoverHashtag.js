import clsx from 'clsx';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import styles from './Discover.module.scss';

function DiscoverHashtag({ icon, hashtagLabel }) {
    return (
        <div className={clsx(styles.discover_item_wrapper)}>
            <div className={clsx(styles.discover_item)}>
                {icon ? (
                    <FontAwesomeIcon className={clsx(styles.discover_icon)} icon={icon} />
                ) : (
                    <FontAwesomeIcon className={clsx(styles.discover_icon)} icon={faHashtag} />
                )}
                <span className={clsx(styles.discover_hashtag)}>{hashtagLabel}</span>
            </div>
        </div>
    );
}

DiscoverHashtag.propTypes = {
    icon: PropTypes.object,
    hashtagLabel: PropTypes.string.isRequired,
};

export default DiscoverHashtag;
