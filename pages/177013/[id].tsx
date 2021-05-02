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
    const convId = id as unknown as number;

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
                    <title>Rie&apos;s Manga</title>
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

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../177013')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post:any) => ({
      params: { id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }:{ params:any }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://.../177013/${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }