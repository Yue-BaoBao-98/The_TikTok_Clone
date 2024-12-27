import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';

function SideBarMenu({ children }) {
    return <nav className={clsx(styles.side_bar_menu)}>{children}</nav>;
}

SideBarMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SideBarMenu;
