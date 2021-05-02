import React, { FC, ReactNode } from 'react'

type Props = {
  title: string,
  children: ReactNode,
}

const Tab: FC<Props> = ({ children }: Props) => {
  return <>{children}</>
}

export default Tab