import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import config from '~/config';

import styles from './SuggestedFollowingAccounts.module.scss';
import AccountItem from './AccountItem';

function SuggestedAccounts({ label }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <h4 className={clsx(styles.label)}>{label}</h4>

            <Link to={config.routesConfig.profile}>
                <AccountItem />
            </Link>
            <Link to={config.routesConfig.profile}>
                <AccountItem />
            </Link>
            <Link to={config.routesConfig.profile}>
                <AccountItem />
            </Link>
            <Link to={config.routesConfig.profile}>
                <AccountItem />
            </Link>
            <Link to={config.routesConfig.profile}>
                <AccountItem />
            </Link>

            <p className={clsx(styles.see_all)}>See all</p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
