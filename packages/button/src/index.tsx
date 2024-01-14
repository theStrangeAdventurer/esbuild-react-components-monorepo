import * as React from 'react'
import styles from './styles.module.css'
import { Typography } from '@esbuild-libs/typography'
import { useProviderContext } from '@esbuild-libs/provider'
import cn from 'classnames'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props
  const { testValue } = useProviderContext()
  console.log('testValue >>>', testValue)
  return (
        <button {...rest} className={cn(styles.button, className)}>
            <Typography>
                    {props.children}
            </Typography>;
        </button>
  )
}
