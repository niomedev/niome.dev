import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ImageContainer, Text } from '../../components/Manga/Manga'

const one = () => {
    return (
        <>
        <Head>
        <title>Rie&apos;s Manga</title>
        <link rel="icon" href="/Assets/Rie.png" />
        </Head>
        <ImageContainer>
        <Text>
            1/14
        </Text>
            <Link href='/177013/2.html' passHref>
                <img src='/Manga/Ch1/1.png'/>
            </Link>
        </ImageContainer>
        </>
    )
}

export default one