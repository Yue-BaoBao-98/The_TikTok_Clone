import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { HeartIcon, CommentIcon, BookMarkIcon, ShareIcon } from '~/components/Icons';

import styles from '~/components/NewFeed/NewFeed.module.scss';

function Actions({ likes, comments, bookmarks, shares }) {
    const [likeActive, setLikeActive] = useState(false);
    const handleActiveLike = () => {
        setLikeActive(!likeActive);
    };
    return (
        <div className={clsx(styles.actions)}>
            <span onClick={handleActiveLike}>
                {likeActive ? (
                    <HeartIcon className={clsx(styles.action_icon_active)} />
                ) : (
                    <HeartIcon className={clsx(styles.action_icon)} />
                )}
            </span>
            <span className={clsx(styles.action_number_label)}>{likes}</span>
            <CommentIcon className={clsx(styles.action_icon)} />
            <span className={clsx(styles.action_number_label)}>{comments}</span>
            <BookMarkIcon className={clsx(styles.action_icon)} />
            <span className={clsx(styles.action_number_label)}>{bookmarks}</span>
            <ShareIcon className={clsx(styles.action_icon)} />
            <span className={clsx(styles.action_number_label)}>{shares}</span>
        </div>
    );
}

Actions.propTypes = {
    likes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    bookmarks: PropTypes.string.isRequired,
    shares: PropTypes.string.isRequired,
};

export default Actions;
