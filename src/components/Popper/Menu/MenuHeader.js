import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

function MenuHeader({ title, onBack }) {
    const handleBack = () => {
        onBack();
    };

    return (
        <header className={clsx(styles.menu_header)}>
            <button className={clsx(styles.back_btn)} onClick={handleBack}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <h4 className={clsx(styles.menu_header_icon)}>{title}</h4>
        </header>
    );
}

MenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default MenuHeader;
