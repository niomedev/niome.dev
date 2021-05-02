import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { ImageContainer, Text } from '../../components/Manga/Manga'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'

export default function Manga() {

    function addOne(num:number) {
        return ++num;
    }

    const router = useRouter()
    const { id } = router.query;
    let convId = id as unknown as number;

    const newNum = addOne(convId);
    let newUrl;

    if(convId > 0 == true && convId < 15 == true){
        if(convId < 14){
            newUrl = `/177013/${newNum}`
        }else{
            newUrl = `/177013/${id}`
        }
        
        const imgUrl = `/Manga/Ch1/${id}.png`
    
        return(
            <>
                <Head>
                    <title>Rie's Manga</title>
                    <link rel="icon" href="/Assets/Rie.png" />
                </Head>
                <ImageContainer>
                    <Text>
                        {id}/14
                    </Text>
                    <Link href={newUrl} passHref>
                        <img src={imgUrl}/>
                    </Link>
                </ImageContainer>
            </>
        )
    }else return <DefaultErrorPage statusCode={404}/>
}