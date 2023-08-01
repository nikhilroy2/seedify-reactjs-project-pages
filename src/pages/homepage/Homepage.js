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
                    <div className="item_box accordion_tab_wrapper">
                        <div className="content_header">
                            <h2 className='text-[48px] font-bold mb-[17px]'>
                                Frequently Asked Questions
                            </h2>
                            <p>
                                Haven't found the answers you are looking for? Contact us at <br />
                                <span>support@seedify.com</span>
                            </p>
                        </div>
                        <div className="content_body">
                            <div>
                                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                    <ul className="tab_list" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="Basics-tab" data-tabs-target="#Basics" type="button" role="tab" aria-controls="Basics"
                                                aria-selected="false">Basics</button>
                                        </li>
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="SFUND-tab" data-tabs-target="#SFUND" type="button" role="tab" aria-controls="SFUND"
                                                aria-selected="false">SFUND</button>
                                        </li>
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="SNFTS-tab" data-tabs-target="#SNFTS" type="button" role="tab" aria-controls="SNFTS"
                                                aria-selected="false">SNFTS</button>
                                        </li>
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="IGOs-tab" data-tabs-target="#IGOs" type="button" role="tab" aria-controls="IGOs"
                                                aria-selected="false">IGOs</button>
                                        </li>
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="INOs-tab" data-tabs-target="#INOs" type="button" role="tab" aria-controls="INOs"
                                                aria-selected="false">INOs</button>
                                        </li>

                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="Blockchain-tab" data-tabs-target="#Blockchain" type="button" role="tab" aria-controls="Blockchain"
                                                aria-selected="false">Blockchain</button>
                                        </li>
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="Security-tab" data-tabs-target="#Security" type="button" role="tab" aria-controls="Security"
                                                aria-selected="false">Security</button>
                                        </li>

                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="psf-tab" data-tabs-target="#psf" type="button" role="tab" aria-controls="psf"
                                                aria-selected="false">Project Selection Framework</button>
                                        </li>
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="seed-staking-tab" data-tabs-target="#seed-staking" type="button" role="tab" aria-controls="seed-staking"
                                                aria-selected="false">Seed Staking</button>
                                        </li>
                                        <li className="flex-grow" role="presentation">
                                            <button className="tab_list_button" id="web3-games-tab" data-tabs-target="#web3-games" type="button" role="tab" aria-controls="web3-games"
                                                aria-selected="false">Web3 Games</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="item_box accordion_wrapper flex-grow">
                        <div id="myTabContent">
                            <div className="hidden " id="Basics" role="tabpanel" aria-labelledby="Basics-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                <span>What is Seedify?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-1" className="hidden accordion_body">
                                            <p className="">
                                                Seedify is a blockchain gaming-focused incubator and launchpad ecosystem, empowering innovators and project developers.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-2" aria-expanded="true" aria-controls="accordion-collapse-body-2">
                                                <span>How does the Launchpad work?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-2" className="hidden accordion_body">
                                            <p className="">
                                                In this article we want to provide you answers to questions that you may have in mind, to help you understand everything about Seedify.fund Launchpad better.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="hidden " id="SFUND" role="tabpanel" aria-labelledby="SFUND-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-3" aria-expanded="true" aria-controls="accordion-collapse-body-3">
                                                <span>What are the utilities of SFUND?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-3" className="hidden accordion_body">
                                            <p className="">
                                                SFUND is the token that empowers the entire Seedify ecosystem. Its main utilities are: participating the IGOs and INOs hosted at Seedify, staking or farming to earn passive income, get free incubation tokens via the seed staking feature and use it for travel expenses and bookings at travala.com. The Seedify team is constantly working to bring more relevant utilities to SFUND.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-4" aria-expanded="true" aria-controls="accordion-collapse-body-4">
                                                <span>What should I do after purchasing SFUND? Can I already join an IGO?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-4" className="accordion_body">
                                            <p className="">
                                                To start enjoying all the benefits of being an SFUND holder, you need to stake/farm your SFUNDs in one of the pools available and complete the KYC process (to participate in the IGOs). By having those steps done, you’ll be able to join the next IGO hosted on our platform and other benefits such as the Seed Staking and Staking/Farming rewards. Read more.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="hidden " id="SNFTS" role="tabpanel" aria-labelledby="SNFTS-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-5" aria-expanded="true" aria-controls="accordion-collapse-body-5">
                                                <span>What are the benefits of staking/farming SNFTS?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-5" className="hidden accordion_body">
                                            <p className="">
                                                Simply put, the act of staking and farming earns you more tokens! So instead of buying more you can lock away your $SNFTS and gain interest depending on the number of days you stake as per the staking pools. You can also gain access to Seedify’s Avatar Collection.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden " id="IGOs" role="tabpanel" aria-labelledby="IGOs-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-6" aria-expanded="true" aria-controls="accordion-collapse-body-6">
                                                <span>What is an IGO?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-6" className="hidden accordion_body">
                                            <p className="">
                                                Initial Game Offerings or IGOs allow projects to raise funds and gain a base community of supporters, while providing gamers and game enthusiasts opportunities to purchase new gaming tokens before they’re listed on public exchanges.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-7" aria-expanded="true" aria-controls="accordion-collapse-body-7">
                                                <span>What is the Viral Public Raise Model?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-7" className="hidden accordion_body">
                                            <p className="">
                                                In a nutshell, the model revolves around making each raise more viral, giving also people with no $SFUNDs allocations from our IGOs in a lottery based manner, in ways we can introduce much more virality, adoption for games, buybacks from token price differences which will be deposited for SFUND rewards to our stakers and farmers, in a different kind of pricing model for tokens which will always have people with $SFUNDs buy at a discount still with guaranteed allocations.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-8" aria-expanded="true" aria-controls="accordion-collapse-body-8">
                                                <span>How does the Seedify Incubation Program help IGO projects succeed?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-8" className="hidden accordion_body">
                                            <p className="">
                                                Our primary mission for providing incubation services is to ensure that blockchain games with potential receive the correct guidance for a successful launch and beyond. Having successfully launched over 50 projects in blockchain gaming, we can provide a high level of expertise to increase the likelihood of a project’s success and a higher return for holders, players and partners.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-9" aria-expanded="true" aria-controls="accordion-collapse-body-9">
                                                <span>How can I get back the tokens purchased on an IGO?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-9" className="hidden accordion_body">
                                            <p className="">
                                                After the IGO happens, the token purchased will be listed and only after the TGE (token generation event) SFUND holders who purchased the tokens at the IGO will receive them. There are three ways holders get their tokens back: the first is via claim on Seedify’s claim platform, the second is via airdrop sent by Seedify team and the third is via claim on the project’s platform.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="hidden " id="INOs" role="tabpanel" aria-labelledby="INOs-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-10" aria-expanded="true" aria-controls="accordion-collapse-body-10">
                                                <span>What is an INO?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-10" className="hidden accordion_body">
                                            <p className="">
                                                INO stands for Initial NFT Offering and is an opportunity where users can purchase items from NFT collections before they are available to the public on the NFT marketplaces.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-11" aria-expanded="true" aria-controls="accordion-collapse-body-11">
                                                <span>How should I select which NFT projects to buy?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-11" className="hidden accordion_body">
                                            <p className="">
                                                There are several factors that contribute to an NFT project being successful, and a few ways to get your hands on an NFT, with the most desirable being minting. Unfortunately, it is not easy gaining the opportunity to mint an NFT, and it is normally often only available to people with a whitelist spot.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="hidden " id="Blockchain" role="tabpanel" aria-labelledby="Blockchain-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-12" aria-expanded="true" aria-controls="accordion-collapse-body-12">
                                                <span>What is Blockchain Gaming?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-12" className="hidden accordion_body">
                                            <p className="">
                                                To be classified as a blockchain game, a project must use elements of the blockchain, such as NFTs and cryptocurrency. NFT technology allows players to trade their gaming assets such as weapons, clothes, vehicles etc. which in traditional games usually have no value outside of the game.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-13" aria-expanded="true" aria-controls="accordion-collapse-body-13">
                                                <span>How Do  I get Started with Blockchain Gaming?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-13" className="hidden accordion_body">
                                            <p className="">
                                                For players to join games, in most cases they need to connect their Web3 wallets, such as MetaMask, to the game. This effectively acts as your login to the game and is where your rewards and in-game assets are stored for future gameplay or to be sold on marketplaces.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="hidden " id="Security" role="tabpanel" aria-labelledby="Security-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-14" aria-expanded="true" aria-controls="accordion-collapse-body-14">
                                                <span>What is KYC and how do I complete it on Seedify?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-14" className="hidden accordion_body">
                                            <p className="">
                                                KYC’s abbreviation stands for “Know Your Customer”. Passing KYC usually requires 1-2 forms of valid identification. This is Anti Money Laundering’s (AML) first step of due diligence and is a way for exchanges to protect their users whilst also remaining compliant.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-15" aria-expanded="true" aria-controls="accordion-collapse-body-15">
                                                <span>How do I make sure I store my tokens securely?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-15" className="hidden accordion_body">
                                            <p className="">
                                                The old phrase “not your keys, not your coins” has been repeated across social media channels lately, which has driven many crypto holders to opt for non-custodial wallets. Custodial wallets are offered by platforms like centralized exchanges that store and protect the wallet’s keys. Since users do not have full control over their keys, they don’t have full control over their crypto.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="hidden " id="psf" role="tabpanel" aria-labelledby="psf-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-16" aria-expanded="true" aria-controls="accordion-collapse-body-16">
                                                <span>How does Seedify select its projects?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-16" className="hidden accordion_body">
                                            <p className="">
                                                Due diligence is very important to the quality and performance of the projects we work with. We recently overhauled our selection process, and now by cross-examining every report that is generated, we are much more risk-averse, eliminating all biases that a single team can have while focusing on the bigger picture more vividly.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="hidden " id="seed-staking" role="tabpanel" aria-labelledby="seed-staking-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-17" aria-expanded="true" aria-controls="accordion-collapse-body-17">
                                                <span>What is Seed Staking?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-17" className="hidden accordion_body">
                                            <p className="">
                                                We want to reward our most loyal community members with industry-leading rewards. We will do this by providing $SFUND stakers with free tokens from our incubated projects, and the projects to which we provide the most support.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-18" aria-expanded="true" aria-controls="accordion-collapse-body-18">
                                                <span>What Are The Requirements for Seed Staking?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-18" className="hidden accordion_body">
                                            <p className="">
                                                Since launching this innovative offering we’ve put together the most relevant FAQs to help you understand how the Seed Staking feature will work. Find out more about the requirements and details to get the most out of it.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="hidden " id="web3-games" role="tabpanel" aria-labelledby="web3-games-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-19" aria-expanded="true" aria-controls="accordion-collapse-body-19">
                                                <span>What is the difference between Web2 and Web3 gaming?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-19" className="hidden accordion_body">
                                            <p className="">
                                                To fully understand the main differences between traditional and blockchain gaming, let’s first look at the differences between Web2 and Web3 so we can understand how this can be applied to gaming.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-20" aria-expanded="true" aria-controls="accordion-collapse-body-20">
                                                <span>What types of gaming projects can I expect on Seedify? </span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-20" className="hidden accordion_body">
                                            <p className="">
                                                At Seedify, we work day and night to instill mass adoption of the web3 gaming space. Game studios we are interacting with daily are on the same mission. There is an ever increasing number of professional game studios and teams that are choosing to build in this space. Here’s a look at some of the upcoming project types.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-21" aria-expanded="true" aria-controls="accordion-collapse-body-21">
                                                <span>What Are Storytelling NFTs?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-21" className="hidden accordion_body">
                                            <p className="">
                                                Storytelling NFTs allows projects to build interest around their NFTs early and build a community to support their collection. Community collaboration is a really exciting part of storytelling NFTs. NFT holders can have the power to write the stories themselves or vote on what should happen next and contribute to the creative process of the story.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                    <div className="accordion_item">
                                        <h2 className='accordion_title'>
                                            <button type="button" className="flex pb-0 px-0 pt-0  items-center justify-between w-full p-5 font-medium text-left"
                                                data-accordion-target="#accordion-collapse-body-22" aria-expanded="true" aria-controls="accordion-collapse-body-22">
                                                <span>What is Seedify doing to change the Web3 Gaming industry?</span>
                                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="#7bf5fb" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-collapse-body-22" className="hidden accordion_body">
                                            <p className="">
                                                Dive deeper into our historic bull run, the current state of web3gaming, and what Seedify is doing differently to change the game.
                                                &nbsp; <a href="#" className='text-[#7bf5fb]'>Read more.</a>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section_footer flex justify-center gap-4 items-center">
                <h3 className='text-2xl font-bold'>Are you a web3 game studio looking to get incubated or launched by Seedify?</h3>
                <a href="#" className='btn_base'>Apply now</a>
            </div>
        </section >
    )
}