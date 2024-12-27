import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

// console.log(styles);

const Button = forwardRef(
    (
        {
            to,
            href,
            text = false,

            primary = false,
            outline = false,
            rounded = false,
            disabled = false,

            size = 'small',
            leftIcon,
            rightIcon,
            children,
            className,

            onClick,
            passedProps,
        },
        ref,
    ) => {
        let Comp = 'button';
        const check_size = typeof size === 'boolean' ? 'small' : size;
        const props = {
            onClick,
            ...passedProps,
        };
        // console.log(props);

        // console.log('className: ', className);

        // Remove event listener when btn is disabled
        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }

        const class_name = clsx(styles.wrapper, {
            [styles.primary]: primary,
            [styles.outline]: outline,
            [styles[check_size]]: check_size,
            [styles.text]: text,
            [styles.disabled]: disabled,
            [styles.rounded]: rounded,
            [styles[className]]: className,
            [styles.left_icon]: leftIcon,
            [styles.right_icon]: rightIcon,
        });

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        return (
            <Comp className={class_name} ref={ref} {...props}>
                {leftIcon && <span className={clsx(styles.left_icon)}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className={clsx(styles.right_icon)}>{rightIcon}</span>}
            </Comp>
        );
    },
);

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    passedProps: PropTypes.node,
};

export default Button;
