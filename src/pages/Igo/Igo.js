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
    return (
        <section id="Section4">
            <div className="section_container">
                <div className="content_wrapper">
                    <h2 className='font-bold text-4xl section_title'>
                        Completed Pools
                    </h2>

                    <div className="com_pools_card flex items-center justify-between flex-wrap">

                        <div className="com_pools_card_item ">
                            <div className="card_header flex  gap-6 p-3">
                                <img src={require('../../static/images/1688740172997solidus-logo.webp')} alt="img" />
                                <div className="content">
                                    <div className="flex items-start mb-3 justify-between"><h3>Solidus AI</h3>
                                    </div>
                                    <p>
                                        Solidus has successfully constructed an environmentally conscious, state-of-the-art High-Performance Computing (HPC) Data Centre spanning over 8,000 square feet. This facility is strategically situated in a highly secure European location. In conjunction with this remarkable achievement, Solidus is poised to unveil the ...
                                    </p>
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="card_body_section_1 flex items-center">
                                    <div className="item_box ">
                                        <small>TOTAL RAISED</small>
                                        <div className="coin_box flex items-center gap-[8px]">
                                            <img src={require('../../static/icons/bnb.webp')} alt="bnb" />
                                            <span className="coin_amount text-[32px] font-bold">
                                                400K
                                            </span>
                                            <span className="coin_name text-[32px] font-bold">
                                                BUSD
                                            </span>
                                            <span className="coin_type">Filled</span>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <button className="btn_card_gray">1 BUSD = 33.33 SOPH</button>
                                    </div>
                                </div>
                                <div className="card_body_section_2 flex items-center">
                                    <ul className='w-full'>
                                        <li className="flex justify-between py-[24px]">
                                            <span>
                                                Progress 100%
                                            </span>
                                            <span>6484392.75 / 6484392.75 CGV</span>
                                        </li>
                                        <li style={{ '--percentage': '100%' }}>
                                            <span className="progress_bar">

                                            </span>
                                        </li>

                                        <li className='flex justify-between py-[24px] opacity-70 text-[14px]'>
                                            <span>LIMITED</span>
                                            <span>PARTICIPANTS: 6280</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="com_pools_card_item ">
                            <div className="card_header flex  gap-6 p-3">
                                <img src={require('../../static/images/1688740172997solidus-logo.webp')} alt="img" />
                                <div className="content">
                                    <div className="flex items-start mb-3 justify-between"><h3>Solidus AI</h3>
                                    </div>
                                    <p>
                                        Solidus has successfully constructed an environmentally conscious, state-of-the-art High-Performance Computing (HPC) Data Centre spanning over 8,000 square feet. This facility is strategically situated in a highly secure European location. In conjunction with this remarkable achievement, Solidus is poised to unveil the ...
                                    </p>
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="card_body_section_1 flex items-center">
                                    <div className="item_box ">
                                        <small>TOTAL RAISED</small>
                                        <div className="coin_box flex items-center gap-[8px]">
                                            <img src={require('../../static/icons/bnb.webp')} alt="bnb" />
                                            <span className="coin_amount text-[32px] font-bold">
                                                400K
                                            </span>
                                            <span className="coin_name text-[32px] font-bold">
                                                BUSD
                                            </span>
                                            <span className="coin_type">Filled</span>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <button className="btn_card_gray">1 BUSD = 33.33 SOPH</button>
                                    </div>
                                </div>
                                <div className="card_body_section_2 flex items-center">
                                    <ul className='w-full'>
                                        <li className="flex justify-between py-[24px]">
                                            <span>
                                                Progress 100%
                                            </span>
                                            <span>6484392.75 / 6484392.75 CGV</span>
                                        </li>
                                        <li style={{ '--percentage': '100%' }}>
                                            <span className="progress_bar">

                                            </span>
                                        </li>

                                        <li className='flex justify-between py-[24px] opacity-70 text-[14px]'>
                                            <span>LIMITED</span>
                                            <span>PARTICIPANTS: 6280</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="com_pools_card_item ">
                            <div className="card_header flex  gap-6 p-3">
                                <img src={require('../../static/images/1688740172997solidus-logo.webp')} alt="img" />
                                <div className="content">
                                    <div className="flex items-start mb-3 justify-between"><h3>Solidus AI</h3>
                                    </div>
                                    <p>
                                        Solidus has successfully constructed an environmentally conscious, state-of-the-art High-Performance Computing (HPC) Data Centre spanning over 8,000 square feet. This facility is strategically situated in a highly secure European location. In conjunction with this remarkable achievement, Solidus is poised to unveil the ...
                                    </p>
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="card_body_section_1 flex items-center">
                                    <div className="item_box ">
                                        <small>TOTAL RAISED</small>
                                        <div className="coin_box flex items-center gap-[8px]">
                                            <img src={require('../../static/icons/bnb.webp')} alt="bnb" />
                                            <span className="coin_amount text-[32px] font-bold">
                                                400K
                                            </span>
                                            <span className="coin_name text-[32px] font-bold">
                                                BUSD
                                            </span>
                                            <span className="coin_type">Filled</span>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <button className="btn_card_gray">1 BUSD = 33.33 SOPH</button>
                                    </div>
                                </div>
                                <div className="card_body_section_2 flex items-center">
                                    <ul className='w-full'>
                                        <li className="flex justify-between py-[24px]">
                                            <span>
                                                Progress 100%
                                            </span>
                                            <span>6484392.75 / 6484392.75 CGV</span>
                                        </li>
                                        <li style={{ '--percentage': '100%' }}>
                                            <span className="progress_bar">

                                            </span>
                                        </li>

                                        <li className='flex justify-between py-[24px] opacity-70 text-[14px]'>
                                            <span>LIMITED</span>
                                            <span>PARTICIPANTS: 6280</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="com_pools_card_item ">
                            <div className="card_header flex  gap-6 p-3">
                                <img src={require('../../static/images/1688740172997solidus-logo.webp')} alt="img" />
                                <div className="content">
                                    <div className="flex items-start mb-3 justify-between"><h3>Solidus AI</h3>
                                    </div>
                                    <p>
                                        Solidus has successfully constructed an environmentally conscious, state-of-the-art High-Performance Computing (HPC) Data Centre spanning over 8,000 square feet. This facility is strategically situated in a highly secure European location. In conjunction with this remarkable achievement, Solidus is poised to unveil the ...
                                    </p>
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="card_body_section_1 flex items-center">
                                    <div className="item_box ">
                                        <small>TOTAL RAISED</small>
                                        <div className="coin_box flex items-center gap-[8px]">
                                            <img src={require('../../static/icons/bnb.webp')} alt="bnb" />
                                            <span className="coin_amount text-[32px] font-bold">
                                                400K
                                            </span>
                                            <span className="coin_name text-[32px] font-bold">
                                                BUSD
                                            </span>
                                            <span className="coin_type">Filled</span>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <button className="btn_card_gray">1 BUSD = 33.33 SOPH</button>
                                    </div>
                                </div>
                                <div className="card_body_section_2 flex items-center">
                                    <ul className='w-full'>
                                        <li className="flex justify-between py-[24px]">
                                            <span>
                                                Progress 100%
                                            </span>
                                            <span>6484392.75 / 6484392.75 CGV</span>
                                        </li>
                                        <li style={{ '--percentage': '100%' }}>
                                            <span className="progress_bar">

                                            </span>
                                        </li>

                                        <li className='flex justify-between py-[24px] opacity-70 text-[14px]'>
                                            <span>LIMITED</span>
                                            <span>PARTICIPANTS: 6280</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Igo;