import React from 'react';
import './TermsOfServices.css';


function TermsOfServices(props) {
    return (
        <div id='TermsOfServices'>
            <Section1></Section1>
        </div>
    );
}

const Section1 = () => {

    const content_object_list = {
        "introduction": [
            {
                id: 1,
                list: <>These Terms of Services govern the use of the
                    <a className='text-[#7bf5fb] mx-2' href="https://seedify.fund/igo"
                        target="_blank" rel="noreferrer noopener">https://seedify.fund/igo</a>
                    and<a className='text-[#7bf5fb] mx-2' href="https://seedify.fund/sfund?type=stake" target="_blank" rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a>the Services provided by Seedify Inc. a company with limited liability incorporated and registered under the laws of Seychellesas defined below. These Terms constitute a binding and enforceable legal contract between the Company and its affiliate and subsidiaries worldwide and you, an end user of the Services in relation to the Services. You and the Company are referred to separately as "Party" and collectively as "Parties”. You should read these Terms of Service carefully to determine which provisions apply to you. By accessing or using any of the Services (as defined below), you acknowledge that you have read, understand, and completely agree to these Terms of Service, as updated and amended from time to time. If you do not agree to be bound by these Terms of Service or with any subsequent amendments, changes or updates, please do not access or use any of the Services, and if you do access or use any of the Services, you will be bound by these Terms of Service, as updated and amended from time to time; your only recourse in the case of your unwillingness to be bound by these Terms of Service is to stop using all of the Services. These Terms of Service were last updated on 28.10 2021.
                </>
            },
            {
                id: 2,
                list: <>The Company is under no obligation to assess the suitability of the Services for users and any comment or statement which may be made by the Company or any of its associates as to the suitability of the Services to you should under no circumstances be considered as investment or legal advice and should not be received or relied upon as such.</>
            },
            {
                id: 3,
                list: <>These Terms of Service may be amended, changed, or updated by the Company at any time and without prior notice to you. You should check back often on the Website to confirm that your copy and understanding of these Terms of Service is current and correct. Your non-termination or continued access or use of any Services after the effective date of any amendments, changes, or updates constitutes your acceptance of these Terms of Service, as modified by such amendments, changes, or updates.</>
            },
            {
                id: 4,
                list: <>These Terms, including the Privacy Policy and any rules contained on the Website, constitute the sole and entire agreement between You and the Company with respect to your use of the Website, and supersedes other prior or contemporaneous negotiations, discussions, agreements, understandings, representations, and warranties, both written and oral, between You and the Company with respect to such subject matter.</>
            },
            {
                id: 5,
                list: <>In the event of any inconsistency between these Terms of Service and any other pages, policies, terms, conditions, licenses, limitations, or obligations contained within or on the Website, these Terms of Service shall prevail.</>
            },
        ],
        "definitions": [
            {
                id: 1,
                list: <>“AML” means anti-money laundering, including, but not limited to, all Laws applicable to the Parties prohibiting money laundering or any acts or attempted acts to conceal or disguise the identity or origin of; change the form of; or move, transfer, or transport, illicit proceeds, property, funds, Fiat Currencies, or Cryptocurrency Tokens;</>
            },
            {
                id: 2,
                list: <>“Affiliate”means the Company and each and every one of its shareholders, directors, officers, associates, employees, contractors, agents, partners, insurers, and attorneys who are acting or performing or have acted or performed services for the benefit of or on behalf of the Website;</>
            },
            {
                id: 3,
                list: <>"Allocation Round/First Round" means Round 1 of the Company fundraising Project tokens allocation, which will be managed by the Seedify tiered system.</>
            },
            {
                id: 4,
                list: <>“BNB”means Binance Cryptocurrency which is required to pay transaction fees on the Binance Smart Chain network.</>
            },
            {
                id: 5,
                list: <>"CFT" means to Combating the Financing of Terrorism.</>
            },
            {
                id: 6,
                list: <>“Company” means Seedify Inc, a company with limited liability incorporated in the Seychelles;</>
            },
            {
                id: 7,
                list: <>"FCFS Round/Second Round" means First Come First Serve Round or Round 2 of the Company fundraising project token allocation for the unsold IGO project tokens left from the Allocation Round.</>
            },
            {
                id: 8,
                list: <>“IGO” means Initial Game Offering, refers to a project launching a coin or token via a decentralized liquidity exchange;</>
            },
            {
                id: 9,
                list: <>“Impermenant Loss” means a temporary loss of funds occurring due to price changes of the LP Tokens when providing liquidity to farming pools;</>
            },
            {
                id: 10,
                list: <>“KYC” means Know Your Customer/Know Your Clientis the mandatory process of identifying and verifying the User’s identity in order to avail access to the Services or participate IGOs launched on the Website;</>
            },
            {
                id: 11,
                list: <>“Launchpad” means Website, or platform that facilitates token swaps, and where the IGO fundraising Projects is officially launched;</>
            },
            {
                id: 12,
                list: <>“LP Tokens” means liquidity for a token pairasequal amount of SFUND/BNB, that represent shares of liquidity in the farming pool of the Website.</>
            },
            {
                id: 13,
                list: <>"Project" refers to the Company’s project, a third party, who as a client of Seedify, offers any tokens, products and services being launched for Initial Game Offering (‘IGO’) event on Website.</>
            },
            {
                id: 14,
                list: <>“Seedify Inc.” refers to the company with limited liability incorporated and registered under the laws of Seychelles. Herein after referred to as Company, Seedify, we, us, our in this Terms.</>
            },
            {
                id: 15,
                list: <>“Services” refers to the services provided to the Users through the Website, which include the accessibility to the new IGO token offered from each IGO fundraising project, staking/farming services and other relevant services available through the Website</>
            },
            {
                id: 16,
                list: <>“SFUND Token” refers to the native token of Companyrefers to a blockchain based token which is issued, stored, transferred, transacted on the Binance Smart Chain Network. Users need to hold SFUND Token to participate in any Services on the website including Staking or IGO sale of Projects selected for the Launchpad.</>
            },
            {
                id: 17,
                list: <>“Staking or Stake” refers to the staking or deposit service in which the Users can delegate or deposit the User’s Sfund Tokens in exchange for a share of Net Staking Rewards on the<a href="https://seedify.fund/sfund?type=stake" className='text-[#7bf5fb] mx-2' target="_blank" rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a></>
            },
            {
                id: 18,
                list: <>“Terms” means these Terms and Services;</>
            },
            {
                id: 19,
                list: <>“User” means you or your ;</>
            },
            {
                id: 20,
                list: <>“Website” refers to the online platform accessible through <a href="https://seedify.fund/igo" target="_blank" rel="noreferrer noopener">https://seedify.fund/igo</a> or<a href="https://seedify.fund/sfund?type=stake" target="_blank" className='text-[#7bf5fb] mx-2' rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a>fully owned and operated by Seedify ;</>
            },
            {
                id: 21,
                list: <>“Yield Farming/Farming” means the practice of staking or lending crypto assets in order to generate high returns or rewards in the form of additional cryptocurrency. Users can delegate or deposit the Sfund/BNBLP Tokens in exchange for a share of Net Farming Rewards on the<a className='text-[#7bf5fb] mx-2' href="https://seedify.fund/sfund?type=stake" target="_blank" rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a></>
            },
        ]
    }
    return (
        <section id="Section1">
            <div className="section_container">
                <h1 className='section_title'>
                    Terms of Services
                </h1>



                <ul>
                    <li>
                        <h3 className="section_subtitle">
                            1) Introduction
                        </h3>
                        <ol className='content_list order_list'>
                            {content_object_list?.introduction?.map(v => {
                                return (
                                    <li key={v.id}>
                                        {v.list}
                                    </li>
                                )
                            })}
                        </ol>
                    </li>

                    <li>
                        <div className="content_wrapper">
                            <h3 className="section_subtitle">
                                2) Definitions
                            </h3>
                            <ol className='content_list alpha_list'>
                                {content_object_list?.definitions?.map(v => {
                                    return (
                                        <li key={v.id}>
                                            {v.list}
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </li>


                    <li>
                        <div className="content_wrapper">
                            <h3 className="section_subtitle">
                                2) General
                            </h3>
                            <ol className='content_list alpha_list'>
                                {content_object_list?.general?.map(v => {
                                    return (
                                        <li key={v.id}>
                                            {v.list}
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    )
}
export default TermsOfServices;