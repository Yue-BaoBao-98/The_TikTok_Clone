import clsx from 'clsx';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import avatar_img from '~/assets/images/user_ava.jpg';
import AccountPreview from './AccountPreview';
import styles from './SuggestedFollowingAccounts.module.scss';

function AccountItem() {
    return (
        <div>
            <HeadlessTippy
                interactive={true}
                placement="bottom"
                offset={[-25, 6]}
                delay={[1000, 0]}
                render={() => {
                    return (
                        <div>
                            <PopperWrapper>
                                <AccountPreview />
                            </PopperWrapper>
                        </div>
                    );
                }}
                // visible
            >
                <div className={clsx(styles.account_item)}>
                    <Image className={clsx(styles.user_avatar)} src={avatar_img} alt="" />

                    <div className={clsx(styles.account_info)}>
                        <span className={clsx(styles.user_nick_name)}>
                            nguyehuagiabao
                            <FontAwesomeIcon className={clsx(styles.check_icon)} icon={faCheckCircle} />
                        </span>
                        <span className={clsx(styles.user_name)}>Nguyễn Hứa Gia Bảo</span>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;
