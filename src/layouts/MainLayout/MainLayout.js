import PropTypes from 'prop-types';
import clsx from 'clsx';

import Header from '~/layouts/components/Header';
import SideBar from '../components/SideBar';

import styles from './MainLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <SideBar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
