import React from 'react';
import './Igo.css';
import UpcomingPools from '../../components/upcoming_pools/upcoming_pools';
function Igo(props) {
    return (
        <div id='Igo'>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
        </div>
    );
}


const Section1 = () => {

    const company_images = [
        {
            id: 1,
            img: require('../../static/images/KUCOIN.5de7f494.svg').default,
            alt: 'KUCOIN',
            height: '60px'
        },
        {
            id: 2,
            img: require('../../static/images/gate.e8da8d92.svg').default,
            alt: 'gate',
            height: '60px'
        },
        {
            id: 3,
            img: require('../../static/images/huobiwhite.cd990df3.svg').default,
            alt: 'huobiwhite',
            height: '60px'
        },
        {
            id: 4,
            img: require('../../static/images/bybitwhite.6eac7867.svg').default,
            alt: 'bybitwhite',
            height: '100px'
        },
        {
            id: 5,
            img: require('../../static/images/pancakeswap-white.7c015e8f.svg').default,
            alt: 'pancakeswap',
            height: '100px'
        },
    ]

    return (
        <section id="Section1">
            <div className="section_container">
                <div className="flex justify-between gap-4 items-center">
                    <div className="content_box mt-12 max-w-xl">
                        <h1 className='text-5xl font-bold'>
                            Enter the gateway of Blockchain Gaming
                        </h1>


                        <div className="btn_group flex gap-6 mt-[105px]">
                            <button className="btn_how font-bold  text-base">
                                Buy $SFUND
                            </button>
                            <button className="btn_how font-bold  text-base">
                                How to Start
                            </button>
                        </div>


                        <div className="company_wrapper mt-12">
                            <h4 className='font-bold opacity-60 -mb-5'>AVAILABLE ON:</h4>
                            <ul className='flex items-center gap-3'>
                                {company_images.map((v) => {
                                    return (
                                        <li key={v.id}>
                                            <img style={{ height: v.height }} src={v.img} alt={v.alt} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="graphich_box">
                        <img src={require('../../static/images/SeedifyHeader.webp')} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}


const Section2 = () => {
    const learning_card_object = [
        {
            id: 1,
            title: 'What is Seedify.fund',
            description: `Before getting started, let's dig into Seedify and what it stands for`,
            action_name: 'Learn More',
            action_link: 'https://medium.com/seedify/what-is-seedify-e4e99a7a255a'
        },
        {
            id: 2,
            title: 'Tier System',
            description: `Get to know more about the IGO allocation system here`,
            action_name: 'Learn More',
            action_link: 'https://medium.com/seedify/the-updated-tier-system-c9652ce5cf5b'
        },
        {
            id: 3,
            title: 'How to get started?',
            description: `Time for action! This guide enlights you on your blockchain gaming path`,
            action_name: 'Learn More',
            action_link: 'https://medium.com/seedify/how-to-get-started-with-seedify-33b4bfd0a001'
        },
    ]
    return (
        <section id="Section2">
            <div className="section_container">
                <div className="section_inner">
                    <div className="learning_card flex items-center justify-between gap-[30px]">

                        {learning_card_object.map(v => {
                            return (
                                <div key={v.id} className="card_item">
                                    <h3>
                                        {v.title}
                                    </h3>
                                    <p>
                                        {v.description}
                                    </p>
                                    <a href={v.action_link} className="card_action">
                                        {v.action_name}
                                    </a>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}

const Section3 = () => {
    return (
        <section id="Section3" className='py-[96px]'>
            <div className="section_container">
                <UpcomingPools></UpcomingPools>
            </div>
        </section>
    )
}


const Section4 = () => {

    const com_pools_card_object = [
        {
            id: 1,
            title: 'Solidus AI',
            pool_img: require('../../static/images/1690375629869Sophia20Black20bg.webp'),
            pool_alt: 'img',
            description: `Solidus has successfully constructed an environmentally conscious, state-of-the-art High-Performance Computing (HPC) Data Centre spanning over 8,000 square feet. This facility is strategically situated in a highly secure European location. In conjunction with this remarkable achievement, Solidus is poised to unveil the ...`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '400K',
            coin_tooltip: '400000',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 33.33 SOPH',
            progress: '100%',
            progress_value: '6484392.75 / 6484392.75 CGV',
            participants: 6096
        },
        {
            id: 2,
            title: 'Cogito Protocol',
            pool_img: require('../../static/images/coin_bg_2.webp'),
            pool_alt: 'img',
            description: `Cogito Protocol offers a decentralized and AI-driven tracercoin - a stablecoin uncorrelated to fiat currencies. It is a spin-off from SingularityNET (AGIX).`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '259.4K',
            coin_tooltip: '259375.71',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 25 CGV',
            progress: '100%',
            progress_value: '6484392.75 / 6484392.75 CGV',
            participants: 6280
        },
        {
            id: 3,
            title: 'Orbofi AI (Public)',
            pool_img: require('../../static/images/coin_bg_3.webp'),
            pool_alt: 'img',
            description: `Orbofi AI is the most sophisticated AI-generated content infrastructure and platform currently in the web3 market, that serves as the main factory and engine for all AI-generated gaming/media assets on web3.`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '400K',
            coin_tooltip: '400000',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 125 OBI',
            progress: '100%',
            progress_value: '6484392.75 / 6484392.75 CGV',
            participants: 6280
        },
        {
            id: 4,
            title: 'Orbofi AI (Public)',
            pool_img: require('../../static/images/coin_bg_3.webp'),
            pool_alt: 'img',
            description: `Orbofi AI is the most sophisticated AI-generated content infrastructure and platform currently in the web3 market, that serves as the main factory and engine for all AI-generated gaming/media assets on web3.`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '90K',
            coin_tooltip: '90000',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 133.33 OBI',
            progress: '100%',
            progress_value: '12000000 / 12000000 OBI',
            participants: 683
        },
        {
            id: 5,
            title: 'Eldarune',
            pool_img: require('../../static/images/coin_bg_4.webp'),
            pool_alt: 'img',
            description: `Eldarune is an AI-Powered medieval RPG based on a storyline with 4K graphics, PvP, and PVE modes. While playing Eldarune you will travel 21 islands, fight in the hundreds of dungeons, and defeat the strongest monsters with your friends or alone.`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '253K',
            coin_tooltip: '253000',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 66.67 ELDA',
            progress: '100%',
            progress_value: '16866666.67 / 16866666.67 ELDA',
            participants: 6259
        },
        {
            id: 6,
            title: 'Synergy Land',
            pool_img: require('../../static/images/coin_bg_5.webp'),
            pool_alt: 'img',
            description: `Synergy Land is a cutting-edge web3 multiplayer game that fuses MOBA mechanics with the aRPG genre in a breathtaking fantasy world of earth, water, ice and fire ! An immersive gameplay experience for casual and hardcore gamers alike offering players true ownership of their assets!`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '383.5K',
            coin_tooltip: '383523.78',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 8.3333 SNG',
            progress: '100%',
            progress_value: '3196018.79 / 3196018.79 SNG',
            participants: 6184
        },
        {
            id: 7,
            title: 'HyperCycle',
            pool_img: require('../../static/images/coin_bg_6.webp'),
            pool_alt: 'img',
            description: `A Layer 0++ Blockchain Architecture Optimised for Scalable AI Microservices`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '577.5K',
            coin_tooltip: '577500',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 11.7647 HYPC',
            progress: '100%',
            progress_value: '6794117.65 / 6794117.65 HYPC',
            participants: 6768
        },
        {
            id: 8,
            title: 'LitLab Games',
            pool_img: require('../../static/images/coin_bg_7.webp'),
            pool_alt: 'img',
            description: `LitLab Games is the first esports developer and publisher launching games backed by blockchain technology with a token-based economy thanks to LITT. It's first title is CyberTitans, a 100% playable game of genre autobattler for 4/8 players where gamers will compete for LITT.`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '390K',
            coin_tooltip: '390000',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 100 LITT',
            progress: '100%',
            progress_value: '39000000 / 39000000 LITT',
            participants: 6701
        },
        {
            id: 9,
            title: 'Shockwaves (Private)',
            pool_img: require('../../static/images/coin_bg_8.webp'),
            pool_alt: 'img',
            description: `Shockwaves is a groundbreaking online blockchain game designed to deliver an unparalleled gaming experience through its innovative blend of AI-driven NFTs, algorithmically generated cities, and music-infused gameplay.`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '72.1K',
            coin_tooltip: '72132.19',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 54.054 NEUROS',
            progress: '100%',
            progress_value: '3499033.67 / 3499033.67 NEUROS',
            participants: 638
        },
        {
            id: 10,
            title: 'Shockwaves (Public)',
            pool_img: require('../../static/images/coin_bg_8.webp'),
            pool_alt: 'img',
            description: `Shockwaves is a groundbreaking online blockchain game designed to deliver an unparalleled gaming experience through its innovative blend of AI-driven NFTs, algorithmically generated cities, and music-infused gameplay.`,
            coin_img: require('../../static/icons/bnb.webp'),
            coin_alt: 'bnb',
            coin_amount: '284.6K',
            coin_tooltip: '284635.66',
            coin_name: 'BUSD',
            coin_rate: '1 BUSD = 50 NEUROS',
            progress: '100%',
            progress_value: '14231782.89 / 19505006 NEUROS',
            participants: 6516
        },
    ]
    return (
        <section id="Section4">
            <div className="section_container">
                <div className="content_wrapper">
                    <h2 className='font-bold text-4xl section_title'>
                        Completed Pools
                    </h2>

                    <div className="com_pools_card flex items-center justify-between flex-wrap">

                        {com_pools_card_object.map(v => {
                            return (
                                <div key={v.id} className="com_pools_card_item ">
                                    <div className="card_header flex  gap-6 p-3">
                                        <img src={v.pool_img} alt={v.pool_alt} />
                                        <div className="content">
                                            <div className="flex items-start mb-3 justify-between"><h3> {v.title} </h3>
                                            </div>
                                            <p>
                                                {v.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card_body">
                                        <div className="card_body_section_1 flex items-center">
                                            <div className="item_box ">
                                                <small>TOTAL RAISED</small>
                                                <div className="coin_box flex items-center gap-[8px]">
                                                    <img src={v.coin_img} alt="bnb" />
                                                    <span data-tooltip-target={`coin_tooltip_${v.id}`} data-tooltip-placement="top" className="coin_amount text-[32px] font-bold">
                                                        {v.coin_amount}
                                                    </span>
                                                    <div id={`coin_tooltip_${v.id}`} role="tooltip" class="absolute text-[32px] z-10 invisible inline-block 
                                                    font-medium text-white  rounded-lg shadow-sm opacity-0 tooltip ">
                                                        {v.coin_tooltip}
                                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                                    </div>

                                                    <span className="coin_name text-[32px] font-bold">
                                                        {v.coin_name}
                                                    </span>
                                                    <span className="coin_type">Filled</span>
                                                </div>
                                            </div>
                                            <div className="item_box">
                                                <button className="btn_card_gray">{v.coin_rate}</button>
                                            </div>
                                        </div>
                                        <div className="card_body_section_2 flex items-center">
                                            <ul className='w-full'>
                                                <li className="flex justify-between py-[24px]">
                                                    <span>
                                                        Progress {v.progress}
                                                    </span>
                                                    <span>6484392.75 / 6484392.75 CGV</span>
                                                </li>
                                                <li style={{ '--percentage': v.progress }}>
                                                    <span className="progress_bar">

                                                    </span>
                                                </li>

                                                <li className='flex justify-between py-[24px] opacity-70 text-[14px]'>
                                                    <span>LIMITED</span>
                                                    <span>PARTICIPANTS: {v.participants}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}




                    </div>
                </div>
            </div>
        </section>
    )
}

export default Igo;