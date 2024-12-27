import PropTypes from 'prop-types';
import clsx from 'clsx';
import Tippy from '@tippyjs/react/headless';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const emptyFn = () => {};

function Menu({ children, items = [], hideOnClick = 'false', onChange = emptyFn }) {
    const [menuLevel, setMenuLevel] = useState([{ data: items }]);
    // console.log('menuLevel: ', menuLevel);

    const currentMenuLevel = menuLevel[menuLevel.length - 1];
    // console.log('currentMenuLevel: ', currentMenuLevel);

    const MenuItems = () => {
        return currentMenuLevel.data.map((item, index) => {
            //check if that item has child => yes = true
            const isParent = !!item.children;
            // console.log(item);

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // console.log(item.children);
                            setMenuLevel((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBackMenuButton = () => {
        return setMenuLevel((prev) => prev.slice(0, prev.length - 1));
    };

    const renderMenu = (attrs) => {
        return (
            <div className={clsx(styles.menu_option)} tabIndex="-1" {...attrs}>
                <PopperWrapper className={clsx(styles.menu_popper)}>
                    {menuLevel.length > 1 && (
                        <MenuHeader
                            title={currentMenuLevel.title === 'Language' ? currentMenuLevel.title : 'No Title yet'}
                            onBack={handleBackMenuButton}
                        />
                    )}
                    <div className={clsx(styles.menu_body)}>{MenuItems()}</div>
                </PopperWrapper>
            </div>
        );
    };

    const handleResetToFirstPage = () => {
        return setMenuLevel((prev) => prev.slice(0, 1));
    };

    //Main render for Menu
    return (
        <Tippy
            // visible
            delay={[0, 1000]}
            offset={[14, 8]}
            interactive={true}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderMenu}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
