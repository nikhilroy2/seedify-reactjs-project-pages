import React from 'react';
import './Footer.css'
function Footer(props) {


    const social_object = [
        {
            id: 1,
            icon: require('../../static/icons/discord.webp'),
            link: '#',
            alt: 'discord'
        },
        {
            id: 2,
            icon: require('../../static/icons/twitter.webp'),
            link: '#',
            alt: 'twitter'
        },
        {
            id: 3,
            icon: require('../../static/icons/telegram.webp'),
            link: '#',
            alt: 'telegram'
        },
        {
            id: 4,
            icon: require('../../static/icons/medium_icon.fdb6e6c4.svg').default,
            link: '#',
            alt: 'medium_icon'
        },
    ]


    return (
        <footer id='Footer'>
            <div className="w-full">
                <div className="w-full">
                    <div className="w-full">
                        <div className="flex justify-around flex-wrap gap-10">
                            <div className='column_item_1'>
                                <a href="#" className='logo block'>
                                    <img src={require('../../static/images/logo.c8a4712a.svg').default} alt="" />
                                </a>

                                <p>
                                    Seedify is a Blockchain Gaming focused Incubator and Launchpad. Through staking $SFUND, become eligible to buy game tokens before everyone else, and have an edge in the play to earn era!
                                </p>
                            </div>
                            <div>
                                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="">
                                        <a href="/tos" className=" ">Terms of Services</a>
                                    </li>
                                    <li>
                                        <a href="#" className="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="">Whitepaper</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='contact_footer'>
                                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Never Miss Updates.</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium contact_list">
                                    <li>
                                        <form>
                                            <div className="relative input_group">
                                                <input type="text" className="block w-full " placeholder="Enter your mail address" required />
                                                <button type="submit" className="submit_btn">
                                                    <img src={require('../../static/images/paper-plane.af286faf.svg').default} alt="img" />
                                                </button>
                                            </div>
                                        </form>

                                    </li>
                                    <li>
                                        <h2 className="mt-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                                            Follow us on
                                        </h2>

                                        <ul className="item_box social_list flex items-center justify-between">
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
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;