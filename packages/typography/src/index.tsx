import * as React from 'react'
import styles from './styles.module.css'
import cn from 'classnames';

export interface TypographyProps {
    element?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    className?: string;
}

export const Typography: React.FC<TypographyProps> = (props) => {
    const { element: Element = 'span', children, className } = props;

    React.useEffect(() => {
        console.log(Element);
    }, []);

    return <Element className={cn(styles.typography, className)}>{children}</Element>;
};