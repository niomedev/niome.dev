import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ImageContainer,Text } from '../../../components/Manga/Manga'

const index = () => {
    return (
        <>
        <Head>
        <title>Rie&apos;s Manga</title>
        <link rel="icon" href="/Assets/Rie.png" />
        </Head>
        <Text>
            8/14
        </Text>
        <ImageContainer>
            <Link href='/177013/9.html' passHref>
                <img src='/Manga/Ch1/8.png'/>
            </Link>
            </ImageContainer>
        </>
    )
}

export default index;