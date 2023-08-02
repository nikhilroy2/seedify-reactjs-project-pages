import React from 'react';
import './Igo.css';
function Igo(props) {
    return (
        <div id='Igo'>
            <Section1></Section1>
        </div>
    );
}

const Section1 = () => {
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
                    </div>
                    <div className="graphich_box">
                        <video src={require('../../static/videos/machine.webm')} muted loop autoPlay ></video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Igo;