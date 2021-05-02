import React from 'react'
import Head from 'next/head'
import { ImageContainer,Text } from '../../../components/Manga/Manga'

const index = () => {
    return (
        <>
        <Head>
        <title>Rie&apos;s Manga</title>
        <link rel="icon" href="/Assets/Rie.png" />
        </Head>
        <Text>
            14/14
        </Text>
            <ImageContainer>
            <img src='/Manga/Ch1/14.png'/>
            </ImageContainer>
        </>
    )
}

export default index;