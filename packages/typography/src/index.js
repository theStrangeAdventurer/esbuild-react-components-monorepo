import * as React from 'react';
import styles from './styles.module.css';
import cn from 'classnames';
export const Typography = (props) => {
    const { element: Element = 'span', children, className } = props;
    return React.createElement(Element, { className: cn(styles.typography, className) }, children);
};
