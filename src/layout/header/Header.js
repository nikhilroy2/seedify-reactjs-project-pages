import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <header id='Header'>
            <Navbar></Navbar>
        </header>
    );
}

export default Header;


const Navbar = () => {

    const dropdown_object = {
        igo_launchpad: [
            {
                id: 1,
                icon: require('../../static/icons/homead17.png'),
                name: 'IGO Launchpad Home',
                link: '/igo',
                description: 'Learn more about the way the IGOs work at Seedify, and how to join them.'
            },
            {
                id: 2,
                icon: require('../../static/icons/purchase4aa1.png'),
                name: 'Purchase SFUND',
                link: '#',
                description: 'Acquire our main token and reap the rewards of its utility in our ecosystem.'
            },
            {
                id: 3,
                icon: require('../../static/icons/claims7606.png'),
                name: 'Claim',
                link: '/profile/claims',
                description: 'Browse the available claims and see the ones you are eligible for.'
            },
            {
                id: 4,
                icon: require('../../static/icons/guides56dc.png'),
                name: 'Guides',
                link: '#',
                description: 'Explore our documentation and help articles to guide your quest at Seedify.'
            },
        ],

        stack_farm: [
            {
                id: 1,
                icon: require('../../static/icons/staking.webp'),
                name: 'Stake SFUND',
                link: '#',
                description: 'Stake SFUND and get benefits in our ecosystem.'
            },
            {
                id: 2,
                icon: require('../../static/icons/staking.webp'),
                name: 'Stake SNFTS',
                link: '#',
                description: 'Stake SNFTS and get benefits in our ecosystem.'
            },
            {
                id: 3,
                icon: require('../../static/icons/guides56dc.png'),
                name: 'Guides',
                link: '#',
                description: 'Explore our documentation and help articles to guide your quest at Seedify.'
            },
            {
                id: 4,
                icon: require('../../static/icons/farming.webp'),
                name: 'Farm SFUND',
                link: '#',
                description: 'See the different farming pool options and select a strategy for maximum yields.'
            },
            {
                id: 5,
                icon: require('../../static/icons/farming.webp'),
                name: 'Farm SNFTS',
                link: '#',
                description: 'See the different farming pool options and select a strategy for maximum yields.'
            },
        ],

    }

    const social_object = [
        {
            id: 1,
            icon: require('../../static/images/twitter.9eda0fa1.svg').default,
            link: '#',
            alt: 'twitter'
        },
        {
            id: 2,
            icon: require('../../static/images/telegram.4833c734.svg').default,
            link: '#',
            alt: 'telegram'
        },
        {
            id: 3,
            icon: require('../../static/images/medium.d6937e0d.svg').default,
            link: '#',
            alt: 'medium'
        },
        {
            id: 4,
            icon: require('../../static/images/discord.e58e4bd2.svg').default,
            link: '#',
            alt: 'discord'
        },
    ]
    return (
        <nav id='Navbar'>
            <div className="flex alilgn-items-center">
                <div className="item_box">
                    <Link className="logo" to="/">
                        <img src={require('../../static/images/logo.c8a4712a.svg').default} alt="" />

                    </Link>

                </div>

            </div>

            <ul className='item_box flex items-center h-full'>
                <li className='hover_dropdown h-full'>
                    <a href="#" className='action_item h-full flex items-center'>IGO Launchpad</a>
                    <div className="hover_dropdown_content h-full">
                        <ul className="hover_dropdown_list">
                            <li className="dropdown_item">
                                <ul className='dropdown_action_list'>

                                    {dropdown_object?.igo_launchpad?.map(v => {
                                        return (
                                            <li key={v.id} className='dropdown_action_list_item'>

                                                <Link to={v.link} className='dropdown_action'>
                                                    <div className="flex items-start">
                                                        <img className='me-3' src={v.icon} alt="" />
                                                        <div className="colntent">
                                                            <h3 className='text-xl dropdown_title font-bold'>{v.name}</h3>
                                                            <p className='text-sm desc'>
                                                                {v.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </li>
                        </ul>

                        <div className="hover_dropdown_info h-full flex items-center">
                            <a href="#" className="block">
                                <img src={require('../../static/images/howTo.webp')} alt="img" />
                                <strong className='text-[18px] mt-[14px] block'>How to Participate in IGOs?</strong>
                                <p className='text-[12px] mt-1'>Learn how to join exciting Seedify IGOs</p>
                                <button className="btn_action_blink">Read More</button>
                            </a>
                        </div>
                    </div>

                </li>

                <li className='hover_dropdown h-full'>
                    <a href="#" className='action_item h-full flex items-center'>INO Launchpad</a>
                    <div className="hover_dropdown_content h-full">
                        <ul className="hover_dropdown_list">
                            <li className="dropdown_item">
                                <ul className='dropdown_action_list'>

                                    {dropdown_object?.igo_launchpad?.map(v => {
                                        return (
                                            <li key={v.id} className='dropdown_action_list_item'>
                                                <Link to={v.link} className="dropdown_action">
                                                    <div className="flex items-start">
                                                        <img className='me-3' src={v.icon} alt="" />
                                                        <div className="colntent">
                                                            <h3 className='text-xl dropdown_title font-bold'>{v.name}</h3>
                                                            <p className='text-sm desc'>
                                                                {v.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </li>
                        </ul>

                        <div className="hover_dropdown_info h-full flex items-center">
                            <a href="#" className="block">
                                <img src={require('../../static/images/snftsIntro.png')} alt="img" />
                                <strong className='text-[18px] mt-[14px] block'>Introducing SNFTS</strong>
                                <p className='text-[12px] mt-1'>Learn all about our newest master product.</p>
                                <button className="btn_action_blink">Read More</button>
                            </a>
                        </div>

                    </div>

                </li>

                <li className='hover_dropdown h-full'>
                    <a href="#" className='action_item h-full flex items-center'>Stake/Farm</a>
                    <div className="hover_dropdown_content h-full">
                        <ul className="hover_dropdown_list lg_list">
                            <li className="dropdown_item">
                                <ul className='dropdown_action_list'>

                                    {dropdown_object?.stack_farm?.map(v => {
                                        return (
                                            <li key={v.id} className='dropdown_action_list_item'>
                                                <Link to={v.link} className="dropdown_action">
                                                    <div className="flex items-start">
                                                        <img className='me-3' src={v.icon} alt="" />
                                                        <div className="colntent">
                                                            <h3 className='text-xl dropdown_title font-bold'>{v.name}</h3>
                                                            <p className='text-sm desc'>
                                                                {v.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </li>


                        </ul>

                        <div className="hover_dropdown_info h-full flex items-center">
                            <a href="#" className="block">
                                <img src={require('../../static/images/snftsIntro.png')} alt="img" />
                                <strong className='text-[18px] mt-[14px] block'>Introducing SNFTS</strong>
                                <p className='text-[12px] mt-1'>Learn all about our newest master product.</p>
                                <button className="btn_action_blink">Read More</button>
                            </a>
                        </div>
                    </div>

                </li>
                <li>
                    <Link to="/profile/claims" className='action_item'>
                        Claims
                    </Link>
                </li>
            </ul>

            <ul className="item_box social_list flex items-center">
                {social_object.map(v => {
                    return (
                        <li key={v.id}>
                            <a href={v.link} className="action_item inline-block">
                                <img src={v.icon} alt={v.alt} />
                            </a>
                        </li>
                    )
                })}

            </ul>
            <ul className="item_box user_control flex items-center">
                <li className='me-3'>
                    <button className="connect_btn text-white bg-[#512fd9] hover:bg-[#6444e2]">Connect</button>
                </li>
                <li>



                    <Link to="/profile/overview" className="user_btn text-white bg-[#ffffff0a]">
                        <img src={require('../../static/images/user.36506f07.svg').default} alt="" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}