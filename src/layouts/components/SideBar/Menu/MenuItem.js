import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

function SideBarMenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            className={(nav_link_data) =>
                clsx(styles.menu_item, {
                    [styles.active]: nav_link_data.isActive,
                })
            }
            to={to}
        >
            <span className={clsx(styles.icon)}>{icon}</span>
            <span className={clsx(styles.active_icon)}>{activeIcon}</span>
            <span className={clsx(styles.menu_item_title)}>{title}</span>
        </NavLink>
    );
}

SideBarMenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default SideBarMenuItem;
