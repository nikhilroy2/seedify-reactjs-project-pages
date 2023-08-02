import React from 'react';
import './PrivacyPolicy.css';
function PrivacyPolicy(props) {
    return (
        <div id="PrivacyPolicy">
            <Section1></Section1>
        </div>
    );
}


const Section1 = () => {
    const content_object_list = {
        "introduction": [
            {
                id: 1,
                list: <>Thank you for visiting <a href="https://seedify.fund/igo" target="_blank" rel="noreferrer noopener">[https://seedify.fund/igo]</a>, <a href="https://seedify.fund/sfund?type=stake" target="_blank" rel="noreferrer noopener">[https://seedify.fund/sfund?type=stake]</a> ("Website"). The Website is owned and operated by Seedify Inc, a company with limited liability incorporated in the Seychelles, and its affiliates ("Company", "we", "our", or "us"). </>
            },

        ],
    }

    return (
        <section id="Section1">
            <div className="section_container">
                <h1 className='section_title'>
                    Seedify Inc. Privacy Policy
                </h1>

                <div className="section_body mb-[50px]">
                    <ul>
                        <li>
                            {/* <h3 className="section_subtitle">
                                Seedify Inc. Privacy Policy
                            </h3> */}
                            <ol className='content_list'>
                                {content_object_list?.introduction?.map(v => {
                                    return (
                                        <li key={v.id}>
                                            {v.list}
                                        </li>
                                    )
                                })}
                            </ol>
                        </li>

                    </ul>
                </div>
            </div>





        </section>
    )
}
export default PrivacyPolicy;