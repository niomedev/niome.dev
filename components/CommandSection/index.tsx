import React from 'react'
import { CommandContainer, CommandWrapper, TabDiv, TabName, TabAlias, TabDesc, TabUsage } from './CommandElements'
import Tab from './Tab';
import Tabs from './Tabs'
import {
    InfoRow,
    Column1,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    BtnLink,
    Button,
    Column2,
    ImgWrap,
    TextWrapper,
    Img,
} from '../InfoSection/InfoElements';

const CommandSection = () => {
    return(
        <>
        <CommandContainer id='rie-commands'>
            <CommandWrapper>
                <InfoRow imgStart={false}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                Discord Bot
                            </TopLine>
                            <Heading lightText={true}>
                                Rie
                            </Heading>
                            <Subtitle darkText={false}>
                                A Multi-purpose discord bot created by me for Island of Eternity, ranging features from Back-end server usage to Fun commands.
                                Check out the commands below, and don&apos;t forget to pay Rie a visit!
                            </Subtitle>
                            <BtnWrap btnEnable={true}>
                                <BtnLink target="_blank" href='www.discord.gg/eternity'>
                                    <Button>Visit Rie!</Button>
                                </BtnLink>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src='/Assets/Rie-base.png' alt='rie'/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
                <Tabs>
                    <Tab title="Guild">
                        <TabDiv>
                            <TabName>
                                prefix
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Display&apos;s current guild&apos;s Prefix.
                            </TabDesc>
                            <TabUsage>
                                n/a
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Genshin Impact">
                        <TabDiv>
                            <TabName>
                                genshinid
                            </TabName>
                            <TabAlias>
                                gsid gs
                            </TabAlias>
                            <TabDesc>
                                Stores Genshin Impact IDs.
                            </TabDesc>
                            <TabUsage>
                                &lt;set|show|unset&gt; &lt;na|asia|eu|cn&gt; &lt;uid&gt;
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Hats">
                        <TabDiv>
                            <TabName>
                                Santa
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Places a Santa hat on user&apos;s Avatar.
                            </TabDesc>
                            <TabUsage>
                                &lt;user&gt; (optional)
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Fun">
                        <TabDiv>
                            <TabName>
                                chucknorris
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Displays a random Chuck Norris joke.
                            </TabDesc>
                            <TabUsage>
                                n/a
                            </TabUsage>
                        </TabDiv>
                        <TabDiv>
                            <TabName>
                            numberroll
                            </TabName>
                            <TabAlias>
                                nroll
                            </TabAlias>
                            <TabDesc>
                            Rolls random number up to specified number.
                            </TabDesc>
                            <TabUsage>
                            &lt;number&gt;
                            </TabUsage>
                        </TabDiv>
                        <TabDiv>
                            <TabName>
                            ship
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                            Ships 2 people together, creating a new name.
                            </TabDesc>
                            <TabUsage>
                            &lt;user&gt; &lt;user2&gt;
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Minecraft">
                        <TabDiv>
                            <TabName>
                                mcshow
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Show&apos;s minecraft profile of tagged user or self, if whitelisted.
                            </TabDesc>
                            <TabUsage>
                                &lt;user&gt; (optional)
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Music">
                        <TabDiv>
                            <TabName>
                                music
                            </TabName>
                            <TabAlias>
                                m
                            </TabAlias>
                            <TabDesc>
                                All-around music command.
                            </TabDesc>
                            <TabUsage>
                                &lt;play|skip|stop|queue|loop|volume|np|lyric&gt; &lt;title|link&gt;
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Reactions">
                        <TabDiv>
                            <TabName>
                                hug
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Hugs the tagged user.
                            </TabDesc>
                            <TabUsage>
                                &lt;user&gt;
                            </TabUsage>
                        </TabDiv>
                        <TabDiv>
                            <TabName>
                                pat
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Pats the tagged user.
                            </TabDesc>
                            <TabUsage>
                                &lt;user&gt;
                            </TabUsage>
                        </TabDiv>
                        <TabDiv>
                            <TabName>
                                wink
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                winks at tagged user.
                            </TabDesc>
                            <TabUsage>
                                &lt;user&gt;
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Search">
                        <TabDiv>
                            <TabName>
                                google
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Fetches first result of a Query from Google.
                            </TabDesc>
                            <TabUsage>
                                &lt;query&gt;
                            </TabUsage>
                        </TabDiv>
                        <TabDiv>
                            <TabName>
                                youtube
                            </TabName>
                            <TabAlias>
                                yt
                            </TabAlias>
                            <TabDesc>
                            Fetches first video of a Query from Youtube.
                            </TabDesc>
                            <TabUsage>
                                &lt;query&gt;
                            </TabUsage>
                        </TabDiv>
                        <TabDiv>
                            <TabName>
                                image
                            </TabName>
                            <TabAlias>
                                img
                            </TabAlias>
                            <TabDesc>
                            Fetches first image of a Query from Google.
                            </TabDesc>
                            <TabUsage>
                                &lt;query&gt;
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                    <Tab title="Useful">
                        <TabDiv>
                            <TabName>
                                avatar
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Return&apos;s tagged user&apos;s or self&apos;s avatar.
                            </TabDesc>
                            <TabUsage>
                                &lt;user&gt; (optional)
                            </TabUsage>
                        </TabDiv>
                        <TabDiv>
                            <TabName>
                                help
                            </TabName>
                            <TabAlias>
                                n/a
                            </TabAlias>
                            <TabDesc>
                                Shows all available Commands, or specified command.
                            </TabDesc>
                            <TabUsage>
                                &lt;command&gt; (optional)
                            </TabUsage>
                        </TabDiv>
                    </Tab>
                </Tabs>
            </CommandWrapper>
        </CommandContainer>
    </>
    )
}

export default CommandSection
