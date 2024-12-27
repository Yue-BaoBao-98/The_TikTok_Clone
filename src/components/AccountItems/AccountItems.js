import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItems.module.scss';
import Image from '~/components/Image';
import { data } from 'react-router-dom';

function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
            <Image className={clsx(styles.avatar_img)} src={data.avatar} alt={data.full_name} />
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.check_icon)} icon={faCheckCircle} />}
                </h4>
                <span className={clsx(styles.user_name)}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItems.prototype = {
    data: PropTypes.object.isRequired,
};

export default AccountItems;
