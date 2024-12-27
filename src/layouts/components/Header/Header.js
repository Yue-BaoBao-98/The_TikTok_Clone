import { useState } from 'react';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLanguage,
    faEllipsisVertical,
    faGear,
    faDollarSign,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';

import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon, SearchIcon } from '~/components/Icons';
import avatar_img from '~/assets/images/user_ava.jpg';

const MENU_ICON_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'zh',
                    title: 'Chinese',
                },
                {
                    code: 'es',
                    title: 'Spanish',
                },
                {
                    code: 'fr',
                    title: 'French',
                },
                {
                    code: 'de',
                    title: 'German',
                },
                {
                    code: 'ru',
                    title: 'Russian',
                },
                {
                    code: 'it',
                    title: 'Italian',
                },
                {
                    code: 'pt',
                    title: 'Portuguese',
                },
                {
                    code: 'hi',
                    title: 'Hindi',
                },
                {
                    code: 'bn',
                    title: 'Bengali',
                },
                {
                    code: 'ar',
                    title: 'Arabic',
                },
                {
                    code: 'ur',
                    title: 'Urdu',
                },
                {
                    code: 'fa',
                    title: 'Persian',
                },
                {
                    code: 'tr',
                    title: 'Turkish',
                },
                {
                    code: 'th',
                    title: 'Thai',
                },
                {
                    code: 'ms',
                    title: 'Malay',
                },
                {
                    code: 'id',
                    title: 'Indonesian',
                },
                {
                    code: 'pl',
                    title: 'Polish',
                },
                {
                    code: 'uk',
                    title: 'Ukrainian',
                },
                {
                    code: 'ro',
                    title: 'Romanian',
                },
                {
                    code: 'cs',
                    title: 'Czech',
                },
                {
                    code: 'sv',
                    title: 'Swedish',
                },
                {
                    code: 'nl',
                    title: 'Dutch',
                },
                {
                    code: 'da',
                    title: 'Danish',
                },
                {
                    code: 'fi',
                    title: 'Finnish',
                },
                {
                    code: 'el',
                    title: 'Greek',
                },
                {
                    code: 'he',
                    title: 'Hebrew',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU_OPTION_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/user_profile',
    },
    {
        icon: <FontAwesomeIcon icon={faDollarSign} />,
        title: 'Get coins',
        to: '/get_coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ICON_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

const UserLoggedIn = true;

function Header() {
    const handleChange = (menuItems) => {
        // console.log(menuItems);
    };

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <Link to={config.routesConfig.home} className={clsx(styles.logo_icon)}>
                    <img src={images.logo} alt="TikTok logo" />
                </Link>

                {/* SEARCH BAR SECTION */}
                <Search />

                {/* ACTIONS CONTROLLER SECTION */}
                <div className={clsx(styles.actions)}>
                    {UserLoggedIn ? (
                        <div className={clsx(styles.user_logged_in)}>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                {/* <button className={clsx(styles.actions_btn)}>
                                    <UploadIcon />
                                </button> */}
                                <Button
                                    outline
                                    size={'small'}
                                    leftIcon={<UploadIcon className={'upload_action_btn'} />}
                                >
                                    Upload
                                </Button>
                            </Tippy>

                            <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                                <button className={clsx(styles.actions_btn)}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={clsx(styles.actions_btn, styles.inbox_act_btn)}>
                                    <InboxIcon className={'inbox_action_btn'} />
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button text size="medium">
                                Upload
                            </Button>
                            <Button primary size="medium">
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={UserLoggedIn ? USER_MENU_OPTION_ITEMS : MENU_ICON_ITEMS} onChange={handleChange}>
                        {UserLoggedIn ? (
                            <Image className={clsx(styles.user_avatar)} src={avatar_img} alt="User's avatar" />
                        ) : (
                            // if there is no avatar image => do this for fallback to other default image
                            // <Image
                            //     className={clsx(styles.user_avatar)}
                            //     src={'as'}
                            //     alt="User's avatar"
                            //     fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7qwpJ4unoJEyvw7y7c9GoMlBhHvO8dw3uQ&s"
                            // />
                            <button className={clsx(styles.option_btn)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
