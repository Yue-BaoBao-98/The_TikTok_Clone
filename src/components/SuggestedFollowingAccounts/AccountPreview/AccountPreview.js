import clsx from 'clsx';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Image from '~/components/Image';
import avatar_img from '~/assets/images/user_ava.jpg';

import styles from './AccountPreview.module.scss';

function AccountPreview(attrs) {
    return (
        <div className={clsx(styles.wrapper)} tabIndex="-1" {...attrs}>
            <header className={styles.header}>
                <Image className={clsx(styles.user_avatar)} src={avatar_img} alt="" />
                <Button className={clsx(styles.following_btn)} primary size="small">
                    Follow
                </Button>
            </header>

            <section className={clsx(styles.body)}>
                <span className={clsx(styles.user_nick_name)}>
                    nguyehuagiabao
                    <FontAwesomeIcon className={clsx(styles.check_icon)} icon={faCheckCircle} />
                </span>
                <span className={clsx(styles.user_name)}>Nguyễn Hứa Gia Bảo</span>
            </section>

            <section className={clsx(styles.account_value)}>
                <span className={clsx(styles.followers)}>
                    <strong className={clsx(styles.user_info_number)}>1.4M </strong>
                    Followers
                </span>
                <span className={clsx(styles.likes)}>
                    <strong className={clsx(styles.user_info_number)}>9.8M </strong>
                    Likes
                </span>
            </section>
        </div>
    );
}

export default AccountPreview;
