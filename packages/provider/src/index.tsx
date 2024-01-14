import * as React from 'react'
import type { ReactNode } from 'react'
import styles from './styles.module.css'

const ProviderContext = React.createContext<{ testValue: string } | null>(null)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useProviderContext = () => {
  return React.useContext(ProviderContext)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Provider: React.FC<{ children: ReactNode, value: ReturnType<typeof useProviderContext> }> = ({ children, value }) => {
  return <ProviderContext.Provider value={value}>
    <div className={styles.provider}>
      {children}
    </div>
  </ProviderContext.Provider>
}
