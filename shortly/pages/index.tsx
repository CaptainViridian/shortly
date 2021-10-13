import type {NextPage} from 'next';
import Head from "next/head";

import {CallToAction, Footer, Header, Hero, Shortener, StoredLinks} from '../components'
import {useEffect, useState} from "react";
import {Link} from "../model/Link";
import {getStoredLinks} from "../thunks";

const Home: NextPage = () => {
    const [links, setLinks] = useState<Array<Link>>([]);
    const addNewLink = function (link: Link) {
        console.log([...links, link])
        setLinks([...links, link]);
    };

    useEffect(() => {
        const storedLinks = getStoredLinks();
        setLinks(storedLinks);
    }, []);

    return (
        <>
            <Head>
                <title>Shortly - Shorten your URLs</title>
                <meta name="description" content="Shortly, a URL shortener"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div id="home">
                <Header/>
                <Hero/>
                <Shortener addNewLink={addNewLink}/>
                <StoredLinks links={links} />
                <CallToAction/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;
