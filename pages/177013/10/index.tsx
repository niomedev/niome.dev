import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Text } from '../../../components/Manga/Manga'

const index = () => {
    return (
        <>
        <Head>
        <title>Rie&apos;s Manga</title>
        <link rel="icon" href="/Assets/Rie.png" />
        </Head>
        <Text>
            10/14
        </Text>
            <Link href='/177013/11' passHref>
                <img src='/Manga/Ch1/10.png'/>
            </Link>
        </>
    )
}

export default index;