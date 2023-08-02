import React from 'react';
import './upcoming_pools.css';
function UpcomingPools(props) {
    return (
        <div id='UpcomingPools'>
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
    );
}

export default UpcomingPools;