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
                    <div className="item_box">
                        <div id="myTabContent">
                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="Basics" role="tabpanel" aria-labelledby="Basics-tab">
                                <div id="accordion-collapse" data-accordion="collapse">
                                    <h2 id="accordion-collapse-heading-1">
                                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                            <span>What is Flowbite?</span>
                                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-2">
                                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                            <span>Is there a Figma file available?</span>
                                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                        </div>
                                    </div>
                                    <h2 id="accordion-collapse-heading-3">
                                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="SFUND" role="tabpanel" aria-labelledby="SFUND-tab">
                                SFund
                            </div>

                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="SNFTS" role="tabpanel" aria-labelledby="SNFTS-tab">

                            </div>

                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="IGOs" role="tabpanel" aria-labelledby="IGOs-tab">

                            </div>
                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="INOs" role="tabpanel" aria-labelledby="INOs-tab">

                            </div>

                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="Blockchain" role="tabpanel" aria-labelledby="Blockchain-tab">

                            </div>
                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="Security" role="tabpanel" aria-labelledby="Security-tab">

                            </div>
                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="psf" role="tabpanel" aria-labelledby="psf-tab">

                            </div>
                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="seed-staking" role="tabpanel" aria-labelledby="psf-tab">

                            </div>
                            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="web3-games" role="tabpanel" aria-labelledby="psf-tab">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}