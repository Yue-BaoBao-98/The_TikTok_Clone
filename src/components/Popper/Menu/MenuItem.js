import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Menu.module.scss';

import Button from '~/components/Button';
import { data } from 'react-router-dom';

// console.log('styles: ', styles);

function MenuItem({ data, onClick }) {
    const classes = clsx(styles.menu_item, {
        [styles.separate]: data.separate,
        // separate: data.separate,
    });

    // console.log(onClick);
    const handleClick = () => {
        // console.log('Inside handleClick');
        onClick();
    };
    return (
        <div className={classes}>
            <Button leftIcon={data.icon} to={data.to} size="normal_100" onClick={handleClick}>
                {data.title}
            </Button>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
