import Navbar from "./Navbar";
import Head from 'next/head';

export default function Container(props) {
    const {children, ...customMeta} = props;
    const meta = {
        title: 'Credit',
        description: `A thoughtful social media`,
        type: 'website',
        ...customMeta
    };

    return (
        <div className="w-full">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Darshan Hindocha"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-col sm:items-center">
                <main
                    className="flex flex-col justify-center max-w-2xl px-8"
                >
                    {children}
                </main>
            </div>
        </div>
    );
}