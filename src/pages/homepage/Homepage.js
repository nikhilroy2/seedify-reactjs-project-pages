import React from 'react';
import './Homepage.css'

function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
        </div>
    );
}

export default Homepage;

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
                            Join Top-Tier AI, Web3 Gaming & Metaverse IDOs With <span className='text-[#7bf5fb]'>Seedify</span>
                        </h1>

                        <h3 className="text-xl mt-9">
                            Decide your tier, stake or farm $SFUND, and participate in all the token launches we bring to you in a guaranteed way.
                        </h3>
                        <div className="btn_group mt-6 flex gap-6">
                            <button className="btn_how font-bold  text-base">
                                Buy $SFUND
                            </button>
                            <button className="btn_how font-bold  text-base">
                                How to Start
                            </button>
                        </div>

                        <div className="company_wrapper mt-12">
                            <h4 style={{ opacity: .6 }} className='font-bold'>AVAILABLE ON:</h4>
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
                        <video src={require('../../static/videos/machine.webm')} muted loop autoPlay ></video>
                    </div>
                </div>
            </div>
            <div className="section_graphich">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}


const Section2 = () => {
    return (
        <section id="Section2">
            <div className="section_container">
                <div className="content_wrapper">
                    <h2 className='font-bold text-4xl section_title'>
                        Upcoming Pools
                    </h2>
                    <a href='#' className="pool_card block">
                        <div className="card_header flex  gap-6 p-3">
                            <img src={require('../../static/images/1688740172997solidus-logo.webp')} alt="img" />
                            <div className="content">
                                <div className="flex items-start mb-3 justify-between"><h3>Solidus AI</h3>
                                    <a href="#" className="igo_action">IGO</a></div>
                                <p>
                                    Solidus has successfully constructed an environmentally conscious, state-of-the-art High-Performance Computing (HPC) Data Centre spanning over 8,000 square feet. This facility is strategically situated in a highly secure European location. In conjunction with this remarkable achievement, Solidus is poised to unveil the ...
                                </p>
                            </div>
                        </div>
                        <div className="card_body p-3">
                            <div className="flex justify-between gap-2">
                                <div className="item_box">
                                    <span className="block content">MIN. ALLOCATION</span>
                                    <span className="block value">0.01 BUSD</span>
                                </div>
                                <div className="item_box">
                                    <span className="block content">MAXIMUM</span>
                                    <span className="block value">0.01</span>
                                </div>
                                <div className="item_box">
                                    <span className="block content">ACCESS</span>
                                    <span className="block value">Public</span>
                                </div>
                            </div>
                        </div>
                        <div className="card_footer"></div>
                    </a>
                </div>
            </div>
        </section>
    )
}


const Section3 = () => {
    return (
        <section id="Section3">
            <div className="section_body">
                <div className="section_container">
                    <h2 className='font-bold text-4xl section_title text-center'>
                        How To Buy SFUND
                    </h2>

                    <div className="content_body text-center">
                        <iframe title="how to buy sfund" class="HowToBuy_iframe__kye5N" src="https://www.youtube.com/embed/TL-6czMQ5Ac?showinfo=0" allowfullscreen=""></iframe>
                    </div>
                </div>
                <div className="section_graphich">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="section_footer flex justify-center gap-4 items-center">
                <h3 className='text-3xl font-bold'>Find out more about what you can do with SFUND</h3>
                <a href="#" className='btn_base'>Watch Videos</a>
            </div>
        </section>
    )
}


const Section4 = () => {
    const line_list_object = [
        {
            id: 1,
            line_img: require('../../static/images/purchase-icon.2574b485.svg').default,
            line_img_alt: 'purchase',
            line_title: 'Purchase SFUND Token',
            line_desc: 'SFUND is Seedify`s token that enables its holders to participate in the IGOs, INOs, stake and farm for passive income',
            btn: {
                name: 'Buy SFUND',
                link: '#',
                action_name: 'modal'
            }
        },
        {
            id: 2,
            line_img: require('../../static/images/stake-icon.65a2f88b.svg').default,
            line_img_alt: 'stake',
            line_title: 'Stake or Farm your SFUND',
            line_desc: 'Add your SFUND to one of our staking or farming pools and earn passive income',
            btn: {
                name: 'Start Now',
                link: 'https://verify-with.blockpass.org/?clientId=seedifyfund_launchpad_kyc_cbe49&serviceName=Seedify.fund%20Launchpad%20KYC&env=prod',
                action_name: 'http'
            }
        },
        {
            id: 3,
            line_img: require('../../static/images/kyc-icon.039dae53.svg').default,
            line_img_alt: 'kyc',
            line_title: 'Complete KYC',
            line_desc: 'It’s a simple step to ensure your participation in the IGOs (not necessary for INOs)',
            btn: {
                name: 'Register',
                link: '/sfund?type=farm',
                action_name: 'http'
            }
        },
        {
            id: 4,
            line_img: require('../../static/images/allset-icon.fe17d868.svg').default,
            line_img_alt: 'allset',
            line_title: 'You’re all set!',
            line_desc: 'Now you can participate in the sales for tokens and NFTs of the best blockchain projects',
            btn: {
                name: 'Register',
                link: '#',
                action_name: ''
            }
        },
    ]
    return (
        <section id="Section4">
            <div className="section_container">
                <div className="section_inner flex gap-[200px]">
                    <div className="item_box max-w-[440px]">
                        <div className="section_content">
                            <h3 className='text-[56px] font-bold leading-[120%]'>How to join the blockchain gaming revolution with us</h3>
                            <p>Only 3 little steps are needed for you to start enjoying all the advantages of Seedify</p>
                        </div>
                    </div>
                    <div className="item_box">
                        <ul className="line_list">

                            {
                                line_list_object.map(v => {
                                    return (
                                        <li key={v} className='flex gap-[25px] pb-[25px] line_list_item'>
                                            <div className="process_img">
                                                <img src={v.line_img} alt={v.line_img_alt} />
                                            </div>
                                            <div className="line_content">
                                                <h3 className='text-[22px] text-white font-bold'>{v.title}</h3>
                                                <p>{v.line_desc}</p>
                                                {v.btn.action_name !== '' ? (

                                                    v.btn.action_name === 'modal' ? <button className="btn_line">Buy SFUND</button> :
                                                        <a className="btn_line" href={v.btn.link}>Buy SFUND</a>

                                                ) : ''}
                                            </div>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>

            </div>
            <div className="section_graphich">
                <span></span>
            </div>
        </section>
    )
}

const Section5 = () => {
    return (
        <section id="Section5">
            <div className="section_container">
                <div className="section_inner">
                    <div className="item_box">
                        <h2>
                            Frequently Asked Questions
                        </h2>
                        <p>
                            Haven't found the answers you are looking for? Contact us at
                            <span>support@seedify.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}