import React, { useCallback } from "react";
import { Button } from './CommandElements';

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
      <Button onClick={onClick}>{title}</Button>
  )
}

export default TabTitle