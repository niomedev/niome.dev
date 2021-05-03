import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { Image, ImageContainer, ButtonContainer, Background } from '../../components/Manga/Manga'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next';
import { BtnWrap, Button } from '../../components/InfoSection/InfoElements';

export default function Manga() {

    function addOne(num:number) {
        return ++num;
    }
    
    function delOne(num:number) {
        return --num;
    }

    const router = useRouter()
    const { id } = router.query;
    const convId = id as unknown as number;

    const newNum = addOne(convId);
    let oldNum = delOne(convId);

    if(oldNum < 1){
        oldNum = 1;
    }

    let newUrl;
    let prevUrl;

    if(convId > 0 == true && convId < 15 == true){
        if(convId < 14){
            newUrl = `/177013/${newNum}`;
            prevUrl = `/177013/${oldNum}`;
        }else{
            newUrl = `/177013/${id}`;
            prevUrl = `/177013/${id}`;
        }
        
        const imgUrl = `/Manga/Ch1/${id}.png`
    
        return(
            <>
                <Head>
                    <title>Rie&apos;s Manga</title>
                    <link rel="icon" href="/Assets/Rie.png" />
                </Head>
                <Background />
                <ImageContainer>
                    <Link href={newUrl} as={newUrl} prefetch passHref>
                        <Image src={imgUrl}/>
                    </Link>
                </ImageContainer>
                <ButtonContainer>
                    <BtnWrap btnEnable={true}>
                            <Link href={prevUrl} as={prevUrl} prefetch passHref>
                                <Button>&lt; Previous</Button>
                            </Link>
                    </BtnWrap>
                    <BtnWrap btnEnable={true}>
                            <Link href={newUrl} as={newUrl} prefetch passHref>
                                <Button>Next &gt;</Button>
                            </Link>
                    </BtnWrap>
                </ButtonContainer>
            </>
        )
    }else return <DefaultErrorPage statusCode={404}/>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id
    return { props: { id: id } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: Array.from(Array(15).keys()).map(num => ({
            params: { id: num.toString() }
        })),
        fallback: false
    }
}