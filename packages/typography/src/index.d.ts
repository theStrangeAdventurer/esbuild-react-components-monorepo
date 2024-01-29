import * as React from 'react';
export interface TypographyProps {
    element?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    className?: string;
}
export declare const Typography: React.FC<TypographyProps>;
