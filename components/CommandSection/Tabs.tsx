import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"
import { TabsDiv, BtnWrapper } from './CommandElements'

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <TabsDiv>
        <BtnWrapper>
            {children.map((item, index) => (
            <TabTitle
                key={index}
                title={item.props.title}
                index={index}
                setSelectedTab={setSelectedTab}
            />
            ))}
        </BtnWrapper>
      {children[selectedTab]}
    </TabsDiv>
  )
}

export default Tabs