import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
} from './FooterElements'
import { FaTwitter, FaYoutube, FaGithub, FaTwitch, FaSteam, FaDiscord } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='//www.twitter.com/niomedesu' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com/channel/UCplM1HqvRmmNRfigxxbRkuA'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitch.tv/niome'>
                                <FaTwitch />
                            </SocialIconLink>
                            <SocialIconLink href='//www.github.com/Niomeee'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='//www.discord.gg/eternity'>
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href='//www.steamcommunity.com/id/niome'>
                                <FaSteam />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
