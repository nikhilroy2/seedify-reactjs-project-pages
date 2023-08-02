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
        ],
        "general": [
            {
                id: 1,
                list: <>3.1. Disclaimer for Accessibility of the Website and the Services</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <>To the extent permitted by applicable laws, the Website and the Company’s Services are provided on an “as is” and “as available” basis. The Company does not warrant that the features, and functions contained in the Website and the Services will satisfy your preferences. You hereby agree and acknowledge that your access and use of the Website and the Services are at your own risk, and you will be liable for any responsibility, consequences that may arise out of or in connection with the usage or accessibility of the Website and the Services. You expressly agree that the Company will have absolutely no liability in this regard.</>
                    },
                    {
                        id: 2,
                        list: <>The Website merely facilitates the Users accessibility to the Project tokens and does not provide you with any warranty or representation whatsoever regarding its quality, value, specification, fitness for the purpose, completeness or accuracy of its technology or infrastructure of the tokens.</>
                    },
                    {
                        id: 3,
                        list: <>The Company reserves the right to limit the availability of the Website to any person, geographic area, or jurisdiction we so desire and/or terminate your access to and use of the Website and the Services, at any time and in our sole discretion.</>
                    },
                    {
                        id: 4,
                        list: <>The Company may, at our sole discretion, impose limits or restrictions on the use you make of the Website. Further, for commercial, security, technical, maintenance, legal or regulatory reasons, or due to any breach of these Terms, we may withdraw the Website or your access to the Website and the Services at any time and without notice to You.</>
                    },
                    {
                        id: 5,
                        list: <>The Company will be allowed to assign, transfer, and subcontract Our rights and/or obligations under these Terms without the need to provide you any notification or acquire your consent. Nevertheless, you will not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</>
                    },
                    {
                        id: 6,
                        list: <>Nothing in these Terms will be deemed to create any rights to any creditors or other persons, not a party hereto. Moreover, these Terms will not be construed, in any respect, to be a contract, in whole or in part, for the benefit of any third parties.</>
                    },
                    {
                        id: 7,
                        list: <>The Company is merely a technology platform, and is not your broker, intermediary, agent, or legal advisor and has no fiduciary relationship or obligation to you in connection with any decisions or activities effected by you using the Website or the Services. No communication or information provided to you by the Company is intended as or will be considered or construed as, the solicitation of an offer to buy, the investment advice, financial advice, legal advice, or any other sort of advice. All Services, transactions, and Investments will be executed automatically based on the parameters of your consideration. You will be solely responsible for determining whether any Services, or investments are suitable and match your interests according to your judgement, objectives, circumstances, and risk tolerance. You will be solely responsible for any losses or liabilities therefrom.</>
                    },
                    {
                        id: 8,
                        list: <>Before executing any transactions, purchasing SFUND Token or IGO tokens on the Website, you should consult with your independent financial, legal, or tax professionals. The Company will not be liable for the decisions you make to access and purchase through the Company</>
                    },
                ]
            },
            {
                id: 2,
                list: <>3.2. Submissions, Feedback and Suggestions</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <>You acknowledge that you are solely responsible for any submissions of all contents, remarks, suggestions, ideas, materials, feedbacks, or other information, including bug reports in relation to the Services provided through the Website including any submission to our social media platforms such as Discord, Twitter, Telegram, Medium and you, not us, have full responsibility for such submissions, including their accuracy, legality, reliability, appropriateness, originality, and copyright. We shall reply on the information you have provided and will not verify it. Notwithstanding the foregoing, we have the right to refuse to post, remove, edit, or abridge any submission for any reason and to freely use, copy, disclose, publish, display, or exploit such submission as we deem necessary without any payment of royalty, acknowledgement prior to consent, we may retain copies of all information materials relevant to the Service.</>
                    },
                    {
                        id: 2,
                        list: <>By sharing feedback and suggestions with the Company or its affiliates, you grant the Company and its affiliates a worldwide, perpetual, irrevocable, non-exclusive, royalty-free license to any intellectual property rights you may have in the feedback and suggestions you share with the Company or its affiliates to use, including to improve the Services, copy, reproduce, modify, publish, transmit, broadcast, display, and distribute. You agree that by submitting feedback or suggestions to the Company or its affiliates you are not entitled to any form of compensation should the Company or its affiliates consider or develop technology that is the same or similar to such feedback or suggestions.</>
                    },
                ]
            },
            {
                id: 3,
                list: <>3.3. Clickwrap and Link to and From the Website</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <>The Company may deliver the Service through electronic means such as download links, graphical, Tools or other technologies for providing the Service for users. The user interfaces to such electronic means may require that the users agree to these Terms by checking a box, clicking a button, or continuing with the Service. If user through such action the user becomes a Party to these Terms. Such an action of acceptance shall be sufficient to bind the users to the terms and conditions herein these Terms.</>
                    },
                    {
                        id: 2,
                        list: <>You may, through hypertext or other computer links, gain access form the Website to websites operated or made available, or otherwise licensed by persons other than us ("Third Party Services"). Such hyperlinks are provided for your convenience. A link from Third Party Services does not mean that the Company endorses or approves the content on such website or does not mean that the Company is an operator of that website. You understand that you are solely responsible for determining the extent to which you may use or rely upon any content at any other Third Party Services websites which you have accessed from the Website. You further agree that the Company has no liability directly or indirectly for any damage, loss, or consequence arising out of or in connection with the usage or reliance of any content, material, services available through the third-party website.The Company assumes no responsibility for the use of, or inability to use, any Third Party Services' software, other materials, or contents posted and/or uploaded on such website and we will have no liability whatsoever to any person or entity for any inaccuracy or incompleteness of such third-party content. All intellectual property rights in and to Third Party Services are property of the respective third parties.</>
                    },
                ]
            },
        ],

        "right_to_use": [
            {
                id: 1,
                list: <>You hereby agree to make the following representations and warranties by accessing to the Website and/or using the Services:</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <>You have full capacity and authority under the applicable laws to agree and bind yourself to these Terms.</>
                    },
                    {
                        id: 2,
                        list: <>You are eighteen years of age or older.</>
                    },
                    {
                        id: 3,
                        list: <>You are not a citizen or a resident of the Prohibited Jurisdictions, and you do not have any relevant connection with any of the Prohibited Jurisdictions.</>
                    },
                    {
                        id: 4,
                        list: <>You are aware and agree to comply with all applicable domestic and international laws, statutes, ordinances, and regulations applicable to your use of the Website and the Services. Your use of the Website and the Services are not for any unlawful or illegal purposes, including but not limited to the usage against the copyright laws and, AML/CFT laws.</>
                    },
                    {
                        id: 5,
                        list: <>The tokens maintained in your walletis not and will not be derived from money laundering, terrorist financing, fraud, or any other illegal activities under any applicable laws. You further hereby acknowledge and agree that the Company will not be responsible for actions taken by you that result in the loss or destruction of the value of the tokens and rewards you hold in the Wallet.</>
                    },
                    {
                        id: 6,
                        list: <>You validly undertake any action or enter into any transaction with regard to these Terms. You are solely responsible for the use of the Website and the Services for all activities, or transactions that occur on or through your account on Website.</>
                    },
                    {
                        id: 7,
                        list: <>You will provide only accurate, complete, and up-to-date information and documents, if any, for the purposes of accessing or using or participating the Company’s Services on the Website. You will further agree to put your effort to ensure that the confidentiality of your personal or credential information, including your wallet address is restricted, and safely maintained to your device you use to access the Website.</>
                    },
                    {
                        id: 8,
                        list: <>You acknowledged and agree that if you lose access to the Wallet that you connected with Website, the Company will not be able to help you recover the loss, or transfer of IGO tokens or any SFUND Token back to your wallet. It will be your solely responsibility to manage your account, and the private key.</>
                    },
                    {
                        id: 9,
                        list: <>You will be responsible for obtaining the data network access necessary to use the Website. Your network's data and rates and fees may apply if you access or use the Website from a wireless-enabled device, and you will be responsible for such rates and fees.</>
                    },
                    {
                        id: 10,
                        list: <>You understand and are aware of the risks associated with accessing or using or participating in the Services, and you will be fully liable at your own risk.</>
                    },
                    {
                        id: 11,
                        list: <>You are aware that you are subject to tax regulations in the jurisdiction you reside in and will be fully responsible for filling or reporting any taxes and paying them as required by the Applicable Laws. The Company will not be liable to compensate you for your tax obligations or advise you in relation to your tax obligations. Any uncertainties and unpredictable matters in tax legislation with respect to any tokens may expose you to any unknown or unforeseeable tax implications associated with your holding of tokens and the use the Services for which the Company will have no liability. Moreover, you will not hold the Company liable for any expenses or losses resulting from unknown or unforeseeable tax implications.</>
                    },
                    {
                        id: 12,
                        list: <>You agree to fully indemnify, defend and hold harmless Seedify and its affiliates, directors, agents and employees from and against all claims, demands, liabilities, damages, losses, costs and expenses, including legal fees and any other charges whatsoever, howsoever caused, that may arise as a result of: (i) your breach of this Agreement, in whole or in part; (ii) violation by you of any law or any third party rights; and (iii) use by you of the Service.</>
                    },
                    {
                        id: 13,
                        list: <>You will not use the Website and the Services in one of any following manners, except as expressly permitted in these Terms, or at the Company's discretion.</>
                    },
                ]
            },
            {
                id: 2,
                list: <>You will not;</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <>infringe any propriety rights, including but not limited to copyrights, patents, trademarks, or trade secrets of the Company.</>
                    },
                    {
                        id: 2,
                        list: <>use the Website or the Services to transmit any data or send or upload any material or content that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programs or similar computer code designed to adversely affect the operation of the Website and/or the Services.</>
                    },
                    {
                        id: 3,
                        list: <>expressly or impliedly, use the Website and the Services in the manner that is deemed unlawful, offensive, malicious, threatening, libelous, defamatory, obscene, or otherwise objectionable or violates these Terms, or any other party's intellectual property.</>
                    },
                    {
                        id: 4,
                        list: <>modify, make any back-up or archival copies of the Platform or any part thereof including disassembling, and you will also not adapt, hack the Website or modify another website to falsely imply that it is associated with the Website falsely.</>
                    },
                    {
                        id: 5,
                        list: <>crawl, scrape, or otherwise cache any content from the Website, and you agree not to use any automated data collection methods, data mining, robots, or scraping or any data gathering methods of any kind on the Website.</>
                    },
                    {
                        id: 6,
                        list: <>use the Website or any of its contents for advertising or soliciting, for any other commercial, political, or religious purpose, or to compete, either directly or indirectly with the Company.</>
                    },
                ]
            },

        ],
        "services": [
            {
                id: 1,
                list: <>KYC : Company has no role in enforcing KYC by default, however, it is a mandatory requirement for Identification Verification KYC tools for the IDO fundraising companies using Company to enforce on their users, which IDO companies have to comply with the mandatory. Company is implementing KYC tools into the Launchpad through
                    <a href="https://blockpass.org/" className='text-[#7bf5fb] mx-2' target="_blank" rel="noreferrer noopener">https://blockpass.org/</a>.
                    In order to avail access to the Services in the Website, you may be required to go through KYC process as requested by each IGO fundraising Project.
                    Company reserves the right, at any time, to ask for any KYC documentation it deems necessary to determine the identity and location of a User.
                    Company reserves the right to restrict service and payment until identity is sufficiently determined. Company further reserves the right to share
                    submitted KYC information and documentation to 3rd parties to verify the authenticity of submitted information, and you agree to this by using the KYC Service.
                    Company reserves the right to confiscate any and all funds that are found to be in violation of relevant and applicable anti-money laundering (AML) and countering
                    terrorism financing (CFT) laws and regulations, and to cooperate with the competent authorities when and if necessary. You fully acknowledge that your
                    information and KYC/AML/CFT documentation may be disclosed to government agencies or regulators upon a valid request of the court order. Once you have decided
                    to participate in IGO and start stake/farm your SFUND Token, you must ensure that all information provided to the Company is complete, accurate, and updated
                    in a timely manner. The Company will rely on the information you provided and should there be any reasonable grounds for the Company to believe that the partial or the whole of your information provided to us is incomplete, or incorrect, or outdated, the Company reserves the right to send you a notice to demand correction, or to delete such information directly, and, as the case may be, to disable you to access to all or part of the Website and the Services. If the Company has a reasonable ground to believe that any User transacts or use the Services by using crypto currencies derived from any suspicious illegal activities, the Company shall be entitled to freeze, close, or delete the User’s accounts as necessary. The Company will hold no liability to such users for any damage, or loss arising out of or in connection with this manner herein</>,
            },
            {
                id: 2,
                list: <>Staking: Users who stake SFUND Token by connecting their Wallet on the <a href="https://seedify.fund/sfund?type=stake" className='text-[#7bf5fb] mx-2' target="_blank" rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a> will be eligible to participate in IGO Sale according to eligible Tiers. When using “Staking” service, Company locks User’s tokens based on User’s preference among the period of time given on the <a className='text-[#7bf5fb] mx-2' href="https://seedify.fund/sfund?type=stake" target="_blank" rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a> Website for a specified period of time, rendering them invisible in the User’s wallet and unable to be traded, withdrawn or otherwise disposed of in exchange for a share of Net Staking Rewards on the Website. You hereby accept that you cannot unstake your tokens before the end of the locking period. Only locked SFUNDs will be counted towards your Tier for IGO fundraising Projects participation. In other words, unstaking of your SFUND Tokens will not count towards your Tier for IGO fundraising Projects. The Company will levy a withdrawal fee or transaction fee* in the form of BNB amount, which will vary and be subject to the amendment only at its sole discretion of the Company periodically. The Company will not be liable for any loss caused or alleged caused by timing differences and economic loss associated with the actual delivery of the SFUND Token. The Company reserves the right to amend any terms related to any specific Staking program at any time in its sole discretion. The Company will not be liable for any losses due to your misunderstanding of the Staking program terms and changes to such term's rules. Company reserves the right to reject your participation in Staking, if you fail to fulfil to satisfy the identity verification requirements through the KYC/AML/CFT process or commit any other suspicious activity while participating in the Services provided by the Company.</>,
            },
            {
                id: 3,
                list: <>Farming : Users who stake LP Tokens by connecting their Wallet on the <a href="https://seedify.fund/sfund?type=stake" className='text-[#7bf5fb] mx-2' target="_blank" rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a> will be eligible to participate in IGO Sale according to eligible Tiers. You hereby read, understood and accept that farming is subject to Impermanent Loss risk and the Company will not be liable for any loss caused by Impermanent Loss by staking your LP Tokens in the farming pools. When using “Farming” service, Company locks User’s LP tokens based on User’s preference among the period of time given on the <a href="https://seedify.fund/sfund?type=stake" className='text-[#7bf5fb] mx-2' target="_blank" rel="noreferrer noopener">https://seedify.fund/sfund?type=stake</a> Website for a specified period of time, rendering them invisible in the User’s wallet and unable to be traded, withdrawn or otherwise disposed of in exchange for a share of Net Staking Rewards on the Website. You hereby accept that you cannot unstake your LP tokens before the end of the locking period. Only locked SFUND amount on your LP Tokens will be counted towards your Tier for IGO fundraising Projects participation. In other words, unstaking of your LP Tokens will not count towards your Tier for IGO fundraising Projects. The Company will levy a withdrawing fee or transaction fee* in the form of BNB amount, which will vary and be subject to the amendment only at its sole discretion of the Company periodically. The Company will not be liable for any loss caused or alleged caused by timing differences and economic loss associated with the actual delivery of the SFUND and BNB Token. The Company reserves the right to amend any terms related to any specific Farming program at any time in its sole discretion. The Company will not be liable for any losses due to your misunderstanding of the Farming program terms and changes to such term's rules. Company reserves the right to reject your participation in Farming, if you fail to fulfil to satisfy the identity verification requirements through the KYC/AML/CFT process or commit any other suspicious activity while participating in the Services provided by the Company.</>,
            },
            {
                id: 4,
                list: <>IGO Fundraising Project Participation: Each IGO’s details are published on the official Medium account of Seedify. You shall to go through, and study the medium article of each IGO fundraising Project and fully understand the significant information and conditions prior to participating such IGO events such as the allocation date, vesting schedule, IGO Price, the underlying technology, the features and functions of IGO Project tokens. The Company will make all commercially reasonable attempts to facilitate information about the Project on the Website. However, The Company will not be liable to you in any manner for the termination, interruption, delay, or inaccuracy of any Project information launched on the Website. You hereby acknowledge that the Company does not guarantee the accuracy, timeliness, or completeness of such information, and does not provide any warranty in connection with your use or reliance on such information. You agree that your use of the Project information will be at all your own risk. Once you initiate staking or farming your SFUNDs, you will be able to participate each Allocation and FCFS Rounds of IGO fundraising Project tokens event according to your eligible Tier. The User is required to connect their BEP-20 wallet to the Website to gain access to the IGO Pool to participate in IGO fundraising in the given period of time. Company is not responsible for any loss or damage that may arise from such integration, including any loss arising from any purchase of tokens from the Pool. The IGO tokens will be distributed to you based on the level of the tier you are classified and based on your purchase amount according to vesting plan. In the conclusion of the Allocation Round of IGO, if there are unsold IGO tokens, you will be able to join the FCFS Round to purchase the unsold IGO tokens according to announcement of FCFS Tiers that can participate if there are unsold tokens from the Allocation Round. You hereby agree that it is Company’s choice to open the FCFS round to all Tiers or specific Tiers only.</>,
            },

        ],
        "govt_law": [
            {
                id: 1,
                list: <>These Terms of Service shall be governed by and construed and enforced in accordance with the Laws of the Seychelles, and shall be interpreted in all respects as a Seychelles contract. You irrevocably agree that, any dispute, controversy, claim or action arising from or related to your access or use of the Website or these Terms of Service likewise shall be governed by the Laws of the Seychelles, exclusive of choice-of-law principles. Nothing in this clause shall limit the right of Company to take proceedings against you in any other court of competent jurisdiction, nor shall the taking of proceedings in any one or more jurisdictions preclude the taking of proceedings in any other jurisdictions, whether concurrently or not, to the extent permitted by the law of such other jurisdiction.</>,
            },
        ],
        "it_pr_right": [
            {
                id: 1,
                list: <>All present and future copyright, title, interests in and to the Services, registered and unregistered trademarks, design rights, unregistered designs, database rights and all other present and future intellectual property rights and rights in the nature of intellectual property rights that exist in or in relation to the use and access of the Website and Services are owned by or otherwise licensed to the Company. Subject to your compliance with these Terms, the Company grants you a non-exclusive, non-sub license, and any limited license to merely use or access the Website and the Services in the permitted hereunder.</>,
            },
            {
                id: 2,
                list: <>Except as expressly stated in these Terms, nothing in these Terms should be construed as conferring any right in or license to Seedify’s or any other third party’s intellectual rights.</>,
            },
            {
                id: 3,
                list: <>If and to the extent that any such intellectual property rights are vested in you by operation of law or otherwise, you agree to do any and all such acts and execute any and all such documents as we may reasonably request in order to assign such intellectual property rights back to us.</>,
            },
            {
                id: 4,
                list: <>You agree and acknowledge that all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio and text belongs to Company and is protected by copyright and/or other intellectual property rights. Under no circumstances may you shall not be modified, copied, reproduced, reused, translated, redistributed, published, used, created for derivative works, or otherwise dealt with for any other reason without being granted a written consent from the Company Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Seedify.</>,
            },
            {
                id: 5,
                list: <>Third parties participating on the Website may permit the Company to utilize trademarks, copyrighted material, and other Intellectual Property associated with their businesses. The Company will not warrant or represent that the content of the Website does not infringe the rights of any third party.
                </>,
            },
            {
                id: 6,
                list: <>The term "Seedify", its domain names and any other trademarks, or service marks used by Seedify as part of the Service, are solely owned by Company. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio and text (the "Site Content") belongs to Company and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trade Marks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without Company’s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Company.</>,
            }
        ],
        "risks": [
            {
                id: 1,
                list: <>You understand and agree that use of the Services and the Website is completely at your own risk. This clause is not exhaustive and does not disclose all the risks associated with crypto currencies and the use of Services. Therefore, you are recommended carefully consider whether such use is suitable for you in terms of your judgement, financial position, circumstances.</>,
            },
            {
                id: 2,
                list: <>The risk of loss in holding any cryptocurrencies can be substantial. You should therefore carefully consider whether holding any crypto tokens is suitable for you in light of your financial condition. In considering whether to hold any crypto tokens, you should be aware that the price or value of cryptocurrencies can change rapidly, decrease, and potentially even fall to zero. Tokens or any cryptocurrencies are not issued by any central banks or national, supra-national, or quasi-national organizations. They are also not backed by any hard assets or other credit. The value of tokens or any cryptocurrencies is affected by several factors, including but not limited to, the total number of tokens or any cryptocurrencies in existence, the continued willingness of market participants to exchange government-issued currency for tokens or cryptocurrencies , purchasers' expectations with respect to the rate of inflation of fiat currencies, purchasers' expectations with respect to the rate of deflation of cryptocurrencies, interest rates, currency exchange rates, cyber theft of cryptocurrencies from online cryptowallet providers, or news of such theft from such providers or individuals' cryptowallets, investment and trading activities of large investors, monetary policies of the governments, trade restrictions, currency devaluations and revaluations, regulatory measures, the global or regional political, economic or financial events and situations. Thus, all these factors will affect the value of tokens or cryptocurrencies, which may result in the permanent partial or total loss of the value of the Company, a particular tokens or cryptocurrency. No one will be obliged to guarantee the liquidity or the market price of any of the SFUND Token or cryptocurrencies maintained into your Wallets. The volatility and unpredictability of the value of tokens or cryptocurrencies relative to the government-issued currency may result in a significant loss over a short period of time. When using a Website and Services you acknowledge that Seedify is not responsible for any losses resulting from market changes or account misappropriation.</>,
            },
            {
                id: 3,
                list: <>You understand and agree that any cryptoassets, blockchain technology or distributed ledger technology related Projects are new and relatively untested and outside of both our and our Projects’ exclusive control. Any adverse changes in market forces, the technology and regulatory environment impacting our performance under this Agreement shall absolve us from responsibility in this regard, including but not limited to hacking attacks, possible theft, unfavorable regulatory action, or unclear legal/tax status of crypto tokens.</>,
            },
            {
                id: 4,
                list: <>You agree and acknowledge that we do not represent or warrant that any Seedify Services or Website are secure from a hacker or other malicious attack, which may result in the stealing or the loss of the User confidential information or any other data. The Company is unable to anticipate the occurrence of hacks, cyber-attacks, mining attacks, including but not limited to double-spend attacks, majority mining power attacks and selfish-mining attacks, distributed denial of service attacks or errors, vulnerabilities or defects on the Website, SFUND Token, Users' Wallets or any technology, including but not limited to smart contract technology. Also, the Company is unable to detect the hacks as mentioned earlier, mining attacks, cyber-attacks, distributed denials of service errors vulnerabilities, or defects in a timely manner and does not have sufficient resources to efficiently cope with multiple service incidents happening simultaneously or in rapid succession.</>,
            },
            {
                id: 5,
                list: <>Technical and system failure affected the obligations stipulated in these Terms the Company may experience system failures, unplanned interruptions in Binance Smart Chain Network or services, hardware or software defects, security breaches or other causes that could adversely affect the Company’s infrastructure network and Website. The Company's network or the services could be disrupted by numerous events, including natural disasters, equipment breakdown, network connectivity downtime, power losses, or even intentional disruptions of its services, such as disruptions caused by software viruses or attacks by unauthorized users, some of which are beyond the Company's control. Although the Company has taken steps and used its best endeavor against malicious attacks on its appliances or its infrastructure, which are critical for the maintenance of the Website and the Services, there can be no assurance that cyber-attacks, such as distributed denials of the Service, will not be attempted in the future, and that the Company's enhanced security measures will be effective. Any significant breach of the Company's security measures or other disruptions resulting in a compromise of the usability, stability and security of the Company's network or the services, including the Website, may adversely affect SFUND Token.</>,
            },
            {
                id: 6,
                list: <>The Company will have no liability for any delay, error, interruption, or failure to perform any obligation under these Terms where the delay or failure is directly or indirectly resulting from any causes beyond the Company's control, including, but not limited to:</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <> Acts of God, nature, court or government; </>
                    },
                    {
                        id: 2,
                        list: <> Failure or interruption of public or private telecommunication networks, the failure of Binance Smart Chain Network, communication channels or information systems; </>
                    },
                    {
                        id: 3,
                        list: <>Acts or omission of a party for whom the Company is not responsible;</>
                    },
                    {
                        id: 4,
                        list: <>Delay, failure, or interruption in, or unavailability of, third-party services; and</>
                    },
                    {
                        id: 5,
                        list: <>Strikes, lockouts, labour disputes, wars, terrorist acts and riots.</>
                    },
                ]
            },
        ],
        "mis_of_web": [
            {
                id: 1,
                list: <>In the event of any misuse and/or abuse of the Website or breach any provision in these Terms, the Company reserves the right to block your access to the Website and other Services until the matter is solved.</>,
            },
            {
                id: 2,
                list: <>Use of the Website for transmission, publication or storage of any material on or via the Website which is in violation of any applicable laws or regulations or any third-party's rights is strictly prohibited, including but not limited to the use of the Website or the transmission, distribution, publication or storage any material on or via the Website in a matter or for the purpose which infringes copyright, trademark, trade secret or other intellectual property rights, is obscene or harmful to minors or constitutes an illegal act or harassment, is libelous or defamatory, violates any privacy or data protections laws, is fraudulent or breaches any exchange control laws.</>,
            },
        ],

        "res_of_dis": [
            {
                id: 1,
                list: <>Any dispute, claim, controversy or action arising out of or related to (i) these Terms of Service or the existence, breach, termination, enforcement, interpretation or validity thereof, or (ii) your CryptoTokens the operations and Services of the Website, or (iii) your access to or use of the Services at any time, shall be subject to the exclusive jurisdiction of the courts of the Seychelles. For the avoidance of doubt, and without limiting the generality of the foregoing, this provision expressly applies to any claim, whether in tort, contract or otherwise, against the Company.</>,
            },
            {
                id: 2,
                list: <>ou irrevocably and unconditionally agree and consent to the exclusive jurisdiction and venue of the courts of the Seychelles, and you waive any objections thereto. Nothing in this clause shall limit the right of Company to take proceedings against you in any other court of competent jurisdiction, nor shall the taking of proceedings in any one or more jurisdictions preclude the taking of proceedings in any other jurisdictions, whether concurrently or not, to the extent permitted by the law of such other jurisdiction.</>,
            },
            {
                id: 3,
                list: <>You and the Company agree that any Party hereto may bring claims against the others only on an individual basis and not as a plaintiff or class member in any purported class or representative action or proceeding. No adjudicator may consolidate or join more than one Person’s or party’s claims and may not otherwise preside over any form of a consolidated, representative, or class proceeding. Any relief awarded to any one user cannot and may not affect any other users.</>,
            },
            {
                id: 4,
                list: <>ury trial waiver: to the fullest extent permitted by applicable law, the parties hereby irrevocably and unconditionally waive all right to trial by jury in any legal action or proceeding of any kind whatsoever arising out of or relating to these terms of service or any breach thereof, any use or attempted use of the site or the services by you, and/or any other matter involving the parties.</>,
            },
        ],

        "indemnification": [
            {
                id: 1,
                list: <>You irrevocably undertake the responsibility of fully indemnifying and holding harmless each of the Company, its Affiliate, licensors, shareholders, officers, directors, managers, employees, and agents from and against any and all losses, claims, actions, proceedings, damages, demands, judgements, sums, liabilities, damages, costs, charges and expenses, including, but not limited to, any reasonable attorney's fees or penalties imposed by any regulatory authority, and reimbursements arising out of or related to the following situations:</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <>Your breach of or our enforcement of these Terms ;</>
                    },
                    {
                        id: 2,
                        list: <>Your use or any person using the Services on your behalf or participation in accordance with the Services on the Website;</>
                    },
                    {
                        id: 3,
                        list: <>Any violations of Applicable Laws, regulation, or rights of any third-party during your use or participate in the Service.</>
                    },
                    {
                        id: 4,
                        list: <>Any violations of Applicable Laws, regulation, or rights of any third-party during your use or participate in the Service.</>
                    },
                    {
                        id: 5,
                        list: <>IV. If you are obligated to indemnify the Company, its Affiliate, shareholders, licensors, officers, directors, managers, employees, and agents, the Company will have the right, at our sole discretion, to control any action or proceeding and to determine whether Company wishes to proceed, or settle, and if so, on what terms or provisions.</>
                    },
                ]
            },

        ],
        "waiver": [
            {
                id: 1,
                list: <>The failure of Company’s to exercise any of its rights, powers or remedies under this Terms or any delay by Company in doing so the performance of any provision will not affect that Company's right to require performance at any time thereafter. At the same time, the waiver of Company to seek recovery for the User's violation of these Terms of any provisions of applicable terms will not constitute a waiver by Company of any subsequent breach or violation by the User or of the provision itself.Any failure by the Company to exercise any of its rights, powers, or remedies under these Terms of Service, or any delay by the Company in doing so, does not constitute a waiver of any such right, power, or remedy. The single or partial exercise of any right, power, or remedy by the Company does not prevent either from exercising any other rights, powers, or remedies. The remedies of the Company are cumulative with and not exclusive of any other remedy conferred by the provisions of these Terms of Service, or by law or equity. You agree that the remedies to which the Company is entitled include, but are not limited to, (i) injunctions to prevent breaches of these Terms of Service and to enforce specifically the terms and provisions hereof, and you waive the requirement of any posting of a bond in connection with such remedies, (ii) the right to recover the amount of any Losses by set off against any amounts that the Company would otherwise be obligated to pay to you, and (iii) the right to seize and recover against any of your crypto currency, or your interests therein, that are held by the Company or any of its Affiliates.</>,
            },
            {
                id: 2,
                list: <>You and the Company agree that any claims relevant to these Terms, or your relationship with the Company will be brought against the other party in arbitration on an individual basis only and not as a plaintiff or class member in a purported class or representative action. You and the Company further agree to waive any right for such claims to be brought, heard, or arbitrated as a class, collective, representative, or private attorney general action, to the extent permissible by applicable laws. Combining or consolidating individual arbitrations into a single arbitration is not permitted without the consent of all parties involved.</>,
            },
        ],

        "no_re_company": [
            {
                id: 1,
                list: <>The Company makes no representations, warranties, or guarantees to you of any kind and, to the extent permitted by applicable Laws, the Company expressly disclaims all representations, warranties or guarantees, express, implied or statutory, with respect to the Website and the Services. The Website and the Services are offered strictly on an as-is, where-is basis and, without limiting the generality of the foregoing, are offered without any representation as to merchantability or fitness for any particular purpose. You acknowledge and agree that your use of the Website and the Services is at your own risk. We do not represent or warrant that access to the Website or the Services will be continuous, uninterrupted, timely, or secure; that the information contained in the Website and the Services will be accurate, reliable, complete, or current; or that the Website and the Services will be free from errors, defects, viruses, or other harmful elements. No advice, information, or statement that we make should be treated as creating any warranty concerning the Website and the Services. We do not endorse, guarantee, or assume responsibility for any advertisements, offers, or statements made by third parties concerning the Website and the Services.</>,
            }
        ],
        "limitation_liab": [
            {
                id: 1,
                list: <>Notwithstanding any provisions within these Terms, under no circumstances, including negligence in no event shall Seedify, its partners, its affiliate, its employees, agents officers be liable to the User for any incidental, special, exemplary, punitive, indirect, or consequential damages of any kind, under any legal theory arising out of or in connection with your use the Website, any websites linked to it, any other services or items obtained through the Website or such websites including but not limited to lost revenue, lost profits, loss of business or anticipated savings, loss of your credential information, loss of interruption of technology, loss of use service or equipment even if the User was advised of the possibility of such damages, and whether arising under a theory of contract, tort, strict liability or otherwise. Seedify shall also have no liability for any emergency and/or unforeseeable incidents related to your use of the Services on the Website such as stolen private key, seed phrases or hacked accounts.</>,
            },
            {
                id: 2,
                list: <>Nothing in this Agreement shall exclude or limit Company’s liability for death or personal injury resulting from its negligence.</>,
            },
            {
                id: 3,
                list: <>Except as expressly provided in these Terms, and to the maximum extent permitted by any Applicable Laws, we disclaim all other representations or warranties, express or implied, made to you, your affiliates, or any other person, including, without limitation, any warranties regarding the quality, suitability, merchantability, fitness for a particular purpose or otherwise (regardless of any course of dealing, custom or usage of trade) of any service provided incidental to the Services under these Terms.</>,
            },
            {
                id: 4,
                list: <>Except as expressly provided in these Terms, and to the fullest extent permitted by any Applicable Laws, the Company, its Affiliate, and its related parties each disclaim all liability to you for any loss or damage arising out of or due to:</>,
                list_children_object: [
                    {
                        id: 1,
                        list: <> your use of, inability to use, or availability or unavailability of the Services, including any Third Party Services made available through the Services; </>
                    },
                    {
                        id: 2,
                        list: <> the occurrence or existence of any defect, interruption, deletion of files, delays in the operation or transmission of information to, from, or through the Services, communications failure, theft, destruction or unauthorised access to Company’s records, programs, services, server, or other infrastructure relating to the Services; </>
                    },
                    {
                        id: 3,
                        list: <> the Services being infected with any malicious code or viruses; or</>
                    },
                    {
                        id: 4,
                        list: <>the failure of the Services to remain operational for any period of time.</>
                    }
                ]
            },
            {
                id: 5,
                list: <>You hereby agree to release the Company and its affiliates from liability for any and all Losses, and you shall indemnify and save and hold the Company and its affiliates harmless from and against all Losses. The foregoing limitations of liability shall apply whether the alleged liability or Losses are based on contract, negligence, tort, unjust enrichment, strict liability, violation of law or regulation, or any other basis, even if the Company or the Affiliates have been advised of or should have known of the possibility of such Losses and damages, and without regard to the success or effectiveness of any other remedies.</>,
            },
        ],


        "force_majeure": [
            {
                id: 1,
                list: <>The Company is not responsible for damages caused by delay or failure to perform undertakings under these Terms of Service when the delay or failure is due to fires; strikes; floods; pandemics; power outages or failures; acts of God or the state’s enemies; acts of any Government or Government Official; any and all market movements, shifts, or volatility; computer, server, or Internet malfunctions; security breaches or cyberattacks; criminal acts; delays or defaults caused by common carriers; acts or omissions of other Persons; or, any other delays, defaults, failures or interruptions that cannot reasonably be foreseen or provided against. In the event of force majeure, the Company is excused from any and all performance obligations under these Terms of Service.</>,
            },
        ],
        "severabi": [
            {
                id: 1,
                list: <>If any provision of these Terms of Service or part thereof, as amended from time to time, is determined to be invalid, void, or unenforceable, in whole or in part, by any court of competent jurisdiction, such invalidity, voidness, or unenforceability attaches only to such provision to the extent of its illegality, unenforceability, invalidity, or voidness, as may be, such unenforceability or invalidity will not render these Terms unenforceable or invalid as a whole, and such provisions will be deleted without affecting the remaining provisions herein.</>,
            },
        ],
        "termination": [
            {
                id: 1,
                list: <>These Terms will be immediately terminated by discontinuing your use of or participate in the Services and you agree to terminate the accessibility on the Website.</>,
            },
            {
                id: 2,
                list: <>These Terms can be suspended or terminated without a notice from the Company if there is a reasonable ground for the Company to believe that you have breached any of the terms or provisions stipulated in these Terms, or if you do not comply with these Terms.</>,
            },
            {
                id: 3,
                list: <>The termination of these Terms will not prevent the Company from seeking remedies from you in the case where you have breached any terms or provisions of these term before such termination. The Company will not be liable to you or to any third party for any termination, suspension, or modification of your access to the Services.</>,
            },
            {
                id: 4,
                list: <>Any ongoing obligation to you as well as the provisions regarding (i) Seedify’ Intellectual Property, (ii) Indemnification, (iii) Limitation of liability, and (iv) any other provisions designed to survive, will survive any termination or expiration of these Terms for any reason.</>,
            },
        ],
    }
    return (
        <section id="Section1">
            <div className="section_container">
                <h1 className='section_title'>
                    Terms of Services
                </h1>


                <div className="section_body mb-[50px]">
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
                                    3) General
                                </h3>
                                <ol className='content_list '>
                                    {content_object_list?.general?.map(v => {
                                        return (
                                            <li key={v.id}>
                                                {v.list}
                                                <ol className="content_list roman ms-5">
                                                    {v.list_children_object.map(j => {
                                                        return (
                                                            <li key={j.id}>
                                                                {j.list}
                                                            </li>
                                                        )
                                                    })}
                                                </ol>
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </li>


                        <li>
                            <div className="content_wrapper">
                                <h3 className="section_subtitle">
                                    4) Right to Use the Website:
                                </h3>
                                <ol className='content_list '>
                                    {content_object_list?.right_to_use?.map(v => {
                                        return (
                                            <li key={v.id}>
                                                {v.list}
                                                <ol className="content_list roman ms-5">
                                                    {v.list_children_object.map(j => {
                                                        return (
                                                            <li key={j.id}>
                                                                {j.list}
                                                            </li>
                                                        )
                                                    })}
                                                </ol>
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </li>



                        <li>
                            <div className="content_wrapper">
                                <h3 className="section_subtitle">
                                    5) Services
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.services?.map(v => {
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
                                    6) Governing Law
                                </h3>
                                <ol className='content_list'>
                                    {content_object_list?.govt_law?.map(v => {
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
                                    7) Intellectual Property Rights
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.it_pr_right?.map(v => {
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
                                    8) Risks
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.risks?.map(v => {
                                        return (
                                            <li key={v.id}>
                                                {v.list}
                                                {v?.list_children_object && (
                                                    <ol className="content_list roman ms-5">
                                                        {v.list_children_object.map(j => {
                                                            return (
                                                                <li key={j.id}>
                                                                    {j.list}
                                                                </li>
                                                            )
                                                        })}
                                                    </ol>

                                                )}

                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </li>


                        <li>
                            <div className="content_wrapper">
                                <h3 className="section_subtitle">
                                    9) Misuse of the Website
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.mis_of_web?.map(v => {
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
                                    10) Resolution of Disputes:
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.res_of_dis?.map(v => {
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
                                    11) Indemnification
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.indemnification?.map(v => {
                                        return (
                                            <li key={v.id}>
                                                {v.list}
                                                {v?.list_children_object && (
                                                    <ol className="content_list roman ms-5">
                                                        {v.list_children_object.map(j => {
                                                            return (
                                                                <li key={j.id}>
                                                                    {j.list}
                                                                </li>
                                                            )
                                                        })}
                                                    </ol>

                                                )}
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </li>


                        <li>
                            <div className="content_wrapper">
                                <h3 className="section_subtitle">
                                    12) Waiver
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.waiver?.map(v => {
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
                                    13) No Representations and Warranties by the Company:
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.no_re_company?.map(v => {
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
                                    14) Limitation of Liability
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.limitation_liab?.map(v => {
                                        return (
                                            <li key={v.id}>
                                                {v.list}

                                                {v?.list_children_object && (
                                                    <ol className="content_list roman ms-5">
                                                        {v.list_children_object.map(j => {
                                                            return (
                                                                <li key={j.id}>
                                                                    {j.list}
                                                                </li>
                                                            )
                                                        })}
                                                    </ol>

                                                )}
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </li>


                        <li>
                            <div className="content_wrapper">
                                <h3 className="section_subtitle">
                                    15) Force Majeure
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.force_majeure?.map(v => {
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
                                    16) Severability
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.severabi?.map(v => {
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
                                    17) Termination
                                </h3>
                                <ol className='content_list alpha_list'>
                                    {content_object_list?.termination?.map(v => {
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


            </div>
        </section>
    )
}
export default TermsOfServices;