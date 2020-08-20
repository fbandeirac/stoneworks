import React from 'react'

import { Twitter, Github, Linkedin } from 'styled-icons/boxicons-logos'

import * as S from './styled'

const SocialLinks = () => {
    return (
        <S.SocialLinksList>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://linkedin.com/in/fbandeirac"
                    title="Linkedin"
                    target="_blank"
                >
                    <Linkedin />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://github.com/fbandeirac"
                    title="Github"
                    target="_blank"
                >
                    <Github />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
            <S.SocialLinksItem>
                <S.SocialLinksLink
                    href="https://twitter.com/fbandeirac"
                    title="Twitter"
                    target="_blank"
                >
                    <Twitter />
                </S.SocialLinksLink>
            </S.SocialLinksItem>
        </S.SocialLinksList>
    )
}

export default SocialLinks
