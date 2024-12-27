import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHashtag, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './NewFeed.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Video from '~/components/Video';
import Actions from './Actions';

function NewFeed({
    avatar_img,
    nickname,
    check,
    full_name,
    status,
    hashtags,
    music,
    video_src,
    likes,
    comments,
    bookmarks,
    shares,
}) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Image className={clsx(styles.avatar)} src={avatar_img} alt="User's avatar" />

            <div className={clsx(styles.content)}>
                <header className={clsx(styles.header)}>
                    <div className={clsx(styles.names_wrapper)}>
                        <span className={clsx(styles.nickname)}>
                            {nickname}
                            {check && <FontAwesomeIcon className={clsx(styles.check_icon)} icon={faCheckCircle} />}
                        </span>
                        <span className={clsx(styles.full_name)}>{full_name}</span>
                    </div>

                    <div className={clsx(styles.status_wrapper)}>
                        <span className={clsx(styles.status)}>{status}</span>
                        {hashtags &&
                            hashtags.map((hashtag, index) => {
                                return (
                                    <span className={clsx(styles.hashtag_wrapper)} key={index}>
                                        <FontAwesomeIcon className={clsx(styles.hashtag_icon)} icon={faHashtag} />
                                        <span className={clsx(styles.hashtag)}>{hashtag}</span>
                                    </span>
                                );
                            })}
                    </div>

                    {music && (
                        <div className={clsx(styles.music_wrapper)}>
                            <FontAwesomeIcon className={clsx(styles.music_icon)} icon={faMusic} />
                            <span className={clsx(styles.music_label)}>{music}</span>
                        </div>
                    )}
                </header>

                <section className={clsx(styles.body)}>
                    <div className={clsx(styles.video_wrapper)}>
                        <Video video_src={video_src} />
                    </div>

                    <Actions likes={likes} comments={comments} bookmarks={bookmarks} shares={shares} />
                </section>
            </div>

            <span className={clsx(styles.following_btn)}>
                <Button outline size="small">
                    Follow
                </Button>
            </span>
        </div>
    );
}

NewFeed.propTypes = {
    avatar_img: PropTypes.node,
    nickname: PropTypes.string.isRequired,
    check: PropTypes.bool,
    full_name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    hashtags: PropTypes.array,
    music: PropTypes.string,
    video_src: PropTypes.node.isRequired,
    likes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    bookmarks: PropTypes.string.isRequired,
    shares: PropTypes.string.isRequired,
};

export default NewFeed;
