import React from 'react';
import './Header.css';
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
                link: '#',
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
                link: '#',
                description: 'Browse the available claims and see the ones you are eligible for.'
            },
            {
                id: 4,
                icon: require('../../static/icons/guides56dc.png'),
                name: 'Guides',
                link: '#',
                description: 'Explore our documentation and help articles to guide your quest at Seedify.'
            },
        ]
    }
    return (
        <nav id='Navbar'>
            <div className="flex alilgn-items-center">
                <div className="item_box">
                    <a href="#" className='logo'>
                        <img src={require('../../static/images/logo.c8a4712a.svg').default} alt="" />
                    </a>
                </div>

            </div>

            <ul className='item_box flex items-center'>
                <li className='hover_dropdown'>
                    <a href="#" className='action_item'>IGO Launchpad</a>
                    <ul className="hover_dropdown_list">
                        <li className="dropdown_item">
                            <ul>
                                <li>
                                    <a href="#" className="dropdown_action">
                                        <div className="flex items-start">
                                            <img className='me-3' src={require('../../static/icons/homead17.png')} alt="" />
                                            <div className="colntent">
                                                <h3 className='text-xl'>IGO Launchpad Home</h3>
                                                <p className='text-sm'>
                                                    Learn more about the way the IGOs work at Seedify, and how to join them.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="dropdown_action">
                                        <div className="flex items-start">
                                            <img className='me-3' src={require('../../static/icons/homead17.png')} alt="" />
                                            <div className="colntent">
                                                <h3 className='text-xl'>Purchase SFUND</h3>
                                                <p className='text-sm'>
                                                    Acquire our main token and reap the rewards of its utility in our ecosystem.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className='action_item'>INO Launchpad</a>
                </li>
                <li>
                    <a href="#" className='action_item'>Stake/Farm</a>
                </li>

                <li>
                    <a href="#" className='action_item'>Claims</a>
                </li>
            </ul>
        </nav>
    )
}