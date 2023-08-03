import React from "react";
import "./PrivacyPolicy.css";
function PrivacyPolicy(props) {
  return (
    <div id="PrivacyPolicy">
      <Section1></Section1>
    </div>
  );
}

const Section1 = () => {
  const content_object_list = {
    introduction: [
      {
        id: 1,
        list: (
          <>
            Thank you for visiting{" "}
            <a
              className="text-[#7bf5fb] mx-2"
              href="https://seedify.fund/igo"
              target="_blank"
              rel="noreferrer noopener"
            >
              [https://seedify.fund/igo]
            </a>
            ,{" "}
            <a
              className="text-[#7bf5fb] mx-2"
              href="https://seedify.fund/sfund?type=stake"
              target="_blank"
              rel="noreferrer noopener"
            >
              [https://seedify.fund/sfund?type=stake]
            </a>{" "}
            ("Website"). The Website is owned and operated by Seedify Inc, a
            company with limited liability incorporated in the Seychelles, and
            its affiliates ("Company", "we", "our", or "us").{" "}
          </>
        ),
      },
      {
        id: 2,
        list: (
          <>
            This Privacy Policy ("Privacy Policy") together with our Terms of
            Services ("Terms of Services") sets out the basis on which any
            Personal Data we collect from the User. The “User" is an individual
            providing personal data to us through our Website, Medium pages,
            Telegram Channels, Discord or other social media accounts, or other
            means such as engage and complete additional Seedify social media
            engagement tasks, for any Seedify’s event or interact with us on our
            social media accounts. Hereinafter, We may refer to User as "You" in
            this Privacy Policy.
          </>
        ),
      },
      {
        id: 3,
        list: (
          <>
            By "Personal Data", we mean any information that enables you to be
            directly or indirectly identified, for example your name, profile
            picture, username, email address, contact details, IP address,
            device ID or other online identifier.
          </>
        ),
      },
      {
        id: 4,
        list: (
          <>
            Please read the following carefully to understand what data we
            collect, how that data is used and the ways it can be shared by us.
            By accessing, connecting, clicking on, using, or engaging in Our
            Services, you indicate and confirm that you have consented and
            agreed to the terms of this Privacy Policy. If you do not agree,
            either partially or wholly, to this Privacy Policy, you should not
            access or use the Website or use the services, functions, or
            features offered from time to time on the you must immediately
            discontinue accessing, connecting, using, or engaging in Our
            Services and Website. We will not use your Personal Information for
            any other purpose that has not been covered in this Privacy Policy
            or the Terms of Services without providing you prior notification or
            obtaining your consent. This Privacy Policy does not apply to
            services offered by other companies or service providers or other
            websites linked from our Website.
          </>
        ),
      },
      {
        id: 5,
        list: (
          <>
            You agree and acknowledge that we cannot guarantee that any losses,
            misuses, unauthorized accession, or alteration of your Personal Data
            will not occur. You hereby agree that You play a vital role in
            protecting your Personal Data, including your credentials.
          </>
        ),
      },
    ],

    personal_data: [
      {
        id: 1,
        list: <> Information provided by you for KYC purpose </>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                {" "}
                Personal identification data: name, email address, digital
                wallet address, country, date of birth, nationality, photo of
                national ID card or passport, photo of your face (selfie),
                documentation for proof of address.
              </>
            ),
          },
        ],
      },
      {
        id: 2,
        list: <> Visiting our Website </>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                With regard to each of your visits to our website and access to
                the services we may automatically collect the following
                information;
              </>
            ),
          },
        ],
      },
      {
        id: 3,
        list: (
          <>
            {" "}
            Information about visits to our Website, which websites You visited
            before accessing our services or Website, browser type, information
            about your browser, date and time You visit Website, Volume of data
            transmitted and network operator. This information will either be
            directly obtained by Seedify or through third party service
            providers.{" "}
          </>
        ),
      },
      {
        id: 4,
        list: <> Transaction data including purchases of crypto assets;</>,
      },
      {
        id: 5,
        list: (
          <> The smart contract stored in your non-custodial wallet address;</>
        ),
      },
      {
        id: 6,
        list: (
          <>
            {" "}
            Technical data including IP address, time zone setting and
            locations, operating system, and other technologies on your device
            used to access the platform;
          </>
        ),
      },
      {
        id: 7,
        list: (
          <>
            {" "}
            Services or pools you viewed or searched for; page response times,
            download errors, length of visits to certain pages, page interaction
            information and methods used to browse away from the page;
          </>
        ),
      },
      {
        id: 8,
        list: (
          <>
            Our Websites utilize browser cookies (small text files stored on a
            user’s web browser when you visit a website) and similar tracking
            technologies (collectively, “Cookies”) to collect and store certain
            information when you use, access, or interact with our services.
          </>
        ),
      },
      {
        id: 8,
        list: <>Special categories of data</>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                We do not collect any special categories of Personal Data about
                you (this includes details about your race or ethnicity,
                religious or philosophical beliefs, sexual orientation,
                political opinions, information about your health and genetic
                and biometric data). However, you may be required to send us
                information relevant to establishing your identity such as
                photographs and copies of your government issued identification
                documents.
              </>
            ),
          },
        ],
      },
      {
        id: 9,
        list: <>Information we may collect from third party sources</>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                We may receive information about you from other sources,
                including: (i) third parties that help us update, expand, and
                analyse our records; prevent or detect fraud; process payments;
                or analyse your use of our Services, and (ii) third parties with
                whom you choose to link with the Services through functionality
                we make available to you. Our Services may also include
                integrated content or links to content provided by third parties
                (such as live chat, social media content, plug-ins and
                applications). Additional third parties may include our
                affiliated entities.
              </>
            ),
          },
        ],
      },
      {
        id: 10,
        list: <>Anonymized and Aggregated Data</>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                We may also aggregate personal and other data captured by us so
                that the data is no longer capable of identifying an individual.
                Aggregated data may cover patterns of usage or information and
                data that you provide to us, and we reserve the right to use
                this aggregated information for the purposes of improving and
                enhancing our Services, generating insights, for use in
                marketing to other users and current and potential partners and
                otherwise for the purposes of our business. Provided that such
                aggregated data does not directly or indirectly identify you as
                an individual, this data is not considered to be Personal Data
                for the purpose of this Privacy Policy.
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                We use anonymized or aggregate users' information for the
                purposes stipulated in this Privacy Policy at any time,
                including gaining better understanding of Users' needs and
                behaviours, conducting business intelligence and marketing
                initiatives, and detecting security threats. In this regard, We
                reserve the right to implement innovative technologies as they
                become available to be used for strategic planning and
                operational processes.
              </>
            ),
          },
        ],
      },
      {
        id: 11,
        list: <>How We Collect Personal Data</>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                We will collect and process Personal Information automatically
                provided by You under the following situations.
              </>
            ),
          },
        ],
      },
      {
        id: 12,
        list: <>when You visit and/or firstly connect with the Website;</>,
      },
      {
        id: 13,
        list: <>when You interact with us on our social media accounts</>,
      },
      {
        id: 14,
        list: (
          <>
            when You voluntarily complete any user survey or provide feedback to
            Us via emails or any other electronic channels including on Our
            social media accounts;
          </>
        ),
      },
      {
        id: 15,
        list: (
          <>
            when You use browser cookies or any other relevant software upon
            visiting the Website; or
          </>
        ),
      },
      {
        id: 16,
        list: (
          <>
            other situations where we may automatically collect your information
            as described in this Privacy Policy, Our Terms and Services, or
            other relevant agreements with You.
          </>
        ),
      },
      {
        id: 17,
        list: <>Information collected by the third-party</>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                We will collect your Personal Data from the third parties as
                required or permitted to the extent of applicable laws.
                Information from the third-party sources will include, but will
                not limited to, public databases, ID verification partners, KYC
                Verification partners, blockchain data, marketing partners and
                resellers, advertising partners, and analytics providers.
              </>
            ),
          },
        ],
      },
    ],
    how_personal_data: [
      {
        id: 1,
        list: (
          <>
            {" "}
            Seedify will collect information about you for the purposes set out
            below if you wish to transact on and use the Website or use the
            Services,{" "}
          </>
        ),
        list_children_object: [
          {
            id: 1,
            list: <>Verify your identity</>,
          },
          {
            id: 2,
            list: (
              <>
                Establish and maintain a responsible commercial relationship
                with you;
              </>
            ),
          },
          {
            id: 3,
            list: <>To protect you,</>,
          },
          {
            id: 4,
            list: (
              <>
                Understand your needs and your eligibility for products and
                services;
              </>
            ),
          },
          {
            id: 5,
            list: (
              <>
                Helps us provide you with a secure, smooth, efficient and
                customized experience
              </>
            ),
          },
          {
            id: 6,
            list: <>Inform you about Website features;</>,
          },
          {
            id: 7,
            list: (
              <>
                Provide information to you about developments and new products,
                including changes to the Website
              </>
            ),
          },
          {
            id: 8,
            list: (
              <>
                To enforce Our Terms and Services, and other relevant
                agreements;
              </>
            ),
          },
          {
            id: 9,
            list: (
              <>
                Develop, enhance, and market products and services, and provide
                products and services to you;
              </>
            ),
          },
          {
            id: 10,
            list: <>Process billing and collection of any fees;</>,
          },
          {
            id: 11,
            list: <>Conduct surveys and get feedback from you;</>,
          },
          {
            id: 12,
            list: <>Deliver products and services to you;</>,
          },
          {
            id: 13,
            list: (
              <>
                Provide you with news and other matters of general interest to
                you as a customer;
              </>
            ),
          },
          {
            id: 14,
            list: (
              <>
                To perform our obligations that arise out of the arrangement we
                are about to enter or have entered with you;
              </>
            ),
          },
          {
            id: 15,
            list: (
              <>
                To enforce the terms of the arrangement we have with you or any
                third party; and
              </>
            ),
          },
          {
            id: 16,
            list: (
              <>
                As we believe reasonably necessary, advisable or appropriate to
                comply with our legal or regulatory obligations and to respond
                to legal, regulatory, arbitration or government process or
                requests for information issued by government authorities or
                other third parties or to protect your, our, or others’ rights.
              </>
            ),
          },
        ],
      },

      {
        id: 2,
        list: (
          <>
            Seedify and members of the Seedify’s group (including our affiliates
            and subsidiaries) may send marketing communications. You can opt out
            of receiving marketing emails from us should you so desire. Please
            note that even if you unsubscribe to marketing communications, we
            still may need to send you communications relating to your use of
            the Website, such as service announcements and if we may need to
            send certain information to you under a legal requirement.
          </>
        ),
      },
      {
        id: 3,
        list: (
          <>
            Seedify uses IP addresses to analyse trends, administer the Website,
            and gather information for aggregate use. For systems administration
            and detecting usage patterns and troubleshooting purposes, the
            Seedify’s web servers also automatically log standard access
            information including browser type and URL requested. This
            information is not shared with third parties and is used only within
            the Operator on a need-to-know basis. Seedify reserves the right to
            block access for any customer accessing the Website via a proxy
            service intending to conceal originating identity. This includes
            access via the Tor anonymity network.
          </>
        ),
      },
    ],

    protect_personal_data: [
      {
        id: 1,
        list: (
          <>
            We will not rent, sell, or disclose your Personal Data to any third
            parties, except to those who require access to the information to
            perform their tasks and duties under the binding agreements executed
            with Us and to share with third parties who have a legitimate
            purpose for accessing it. We may share, transfer, disclose, or allow
            access to your Personal Data to the following third parties for the
            purposes described below:
          </>
        ),
      },

      {
        id: 2,
        list: (
          <>
            6.1. You hereby agree that we have the right to share your Personal
            Data with:
          </>
        ),
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                Any member of our group, which means our subsidiaries, our
                ultimate holding company and its subsidiaries including their
                respective contractors, affiliates, employees or
                representatives.
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                Our service providers, to the extent necessary to supply the
                Services to you.
              </>
            ),
          },
          {
            id: 3,
            list: (
              <>
                Selected third parties, including analytics and search engine
                providers that assist us in the improvement and optimization of
                the Services.
              </>
            ),
          },
          {
            id: 4,
            list: (
              <>
                We may disclose or transfer a part of your Personal Data We
                collect if We are involved in a business transition or any
                merger and/or acquisition projects. In such merger or
                acquisition event, your Personal Data might be among the assets
                transferred, but it will be protected and secure in accordance
                with this Privacy Policy.
              </>
            ),
          },
          {
            id: 5,
            list: (
              <>
                Authorities and law enforcement agencies worldwide either when
                ordered to do so or on a voluntary basis if this appears
                reasonable and necessary to us.
              </>
            ),
          },
        ],
      },

      {
        id: 3,
        list: (
          <>6.2. We may also disclose your Personal Data to third parties:</>
        ),
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                {" "}
                If the Company or substantially all of its assets are acquired
                by a third party, in which case Personal Data held by it about
                its customers will be one of the transferred assets.
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                {" "}
                If we are under a duty to disclose or share your Personal Data
                in order to comply with any legal obligation, or in order to
                enforce or apply our Terms of Service and other agreements; or
                to protect the rights, property, or safety of us, our clients,
                or others.
              </>
            ),
          },
        ],
      },
    ],

    third_party_personal_data: [
      {
        id: 1,
        list: (
          <>
            This Privacy Policy only addresses the use and disclosure of the
            Personal Data we collect from You. To the extent that You disclose
            your information to other parties through the use of Our Services
            such as by clicking on a link to any other websites of our partner
            networks, different rules regarding Privacy Policies may apply to
            their use or disclosure of the Personal Data You disclose to them.
          </>
        ),
      },
      {
        id: 2,
        list: (
          <>
            You hereby acknowledge that we will not be responsible for the
            products, services, or descriptions of products or services that You
            receive from the third-party websites or to the content or privacy
            practices of the third-party websites. You hereby agree that we are
            not responsible for or able to control, the privacy, security, or
            other practices of any third parties. This Privacy Policy will not
            be applied to any such third-party products and services that You
            access through our Web Site and social media channels. You hereby
            agree that websites, applications and services of third parties
            (including affiliate entities, associated companies, sponsors,
            advertisers or other persons) will be governed by the privacy
            settings, policies, and/or procedures of the third party, which may
            differ from this Privacy Policy. It is your responsibility to review
            the privacy statements, policies, terms, and conditions of any
            person or company to whom you choose to link or with whom you choose
            to contract. We are not responsible for the privacy statements,
            policies, terms, conditions, or other content of any website not
            owned or managed by the Seedify.
          </>
        ),
      },
    ],

    legal_rights: [
      {
        id: 1,
        list: (
          <>
            This provision applies to Users of the Services that are located in
            the European Economic Area, United Kingdom and/or Switzerland
            (herein collectively referred as “Designated Countries”) at the time
            of Data or Personal Information being collected. We may ask your
            information regarding your nationality, your location, which country
            you are in when you use Our Services or Platform, or We may rely on
            your IP address. We cannot apply this provision to Users who do not
            provide information about the location or obfuscates location
            information so as not to appear located in the Designated Countries.
          </>
        ),
      },
      {
        id: 2,
        list: (
          <>
            We use and process your Personal Data based on a valid lawful basis
            of the EU General Data Protection Regulation (“GDPR”) and any
            equivalent regulations (collectively referred as “Data Protection
            Laws”). The lawful basis for processing your Personal Information
            includes (i) your consent, (ii) performance of a contract, (iii) a
            legitimate interest, (iv) a compliance with legal obligations, (v)
            protection your vital interest, and (vi) public task.
          </>
        ),
      },
      {
        id: 3,
        list: (
          <>
            In the event of any conflict or inconsistency between any term in
            this provision and other terms contained in this Privacy Policy, the
            term in this provision will govern and control over Users in the
            Designated Countries.
          </>
        ),
      },
      {
        id: 4,
        list: (
          <>
            Under certain circumstances when you use Our Services, you have the
            rights under the Data Protection Laws in relation to your Personal
            Information. These rights include the followings:
          </>
        ),
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                {" "}
                Right to be informed: You reserve the right to be informed about
                the collection, use, and process of your Personal Information.
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                Right of access: You reserve the right to make a request for a
                copy of the Personal Information We hold about you and specific
                information regarding Our processing of this information.
              </>
            ),
          },
          {
            id: 3,
            list: (
              <>
                Right to rectify: You reserve the right to request Us to update,
                correct, or complete your Personal Information that you believe
                to be outdated, inaccurate, or incomplete. You will rectify at
                any time by informing Us via our contact channels.
              </>
            ),
          },

          {
            id: 4,
            list: (
              <>
                Right to erasure (“Right to be Forgotten”): You may request to
                have your Personal Information deleted from Our record where (i)
                your Information is no longer necessary to be used for the
                Services or on the Platform, (ii) Information was collected in
                relation to processing that you previously consented to, but
                later withdrew such consent, or (iii) you Information was
                collected in relation to processing activities to which you
                object, and there are no overriding legitimate grounds for Our
                processing.
              </>
            ),
          },

          {
            id: 5,
            list: (
              <>
                Right to data portability: You reserve the right to request to
                transfer a machine-readable copy of your Personal Information to
                you or the third-party of your choice. We will provide you, or
                third-party, your Personal Information in a machine-readable
                format. This right only applies to Personal Information you have
                consented Us to use.
              </>
            ),
          },

          {
            id: 6,
            list: (
              <>
                Right to restrict processing: You may request Us to restrict or
                suppress the processing of your Personal Information under
                certain circumstances as follows:
              </>
            ),
          },
        ],
      },
    ],
    limitation: [
      {
        id: 1,
        list: (
          <>
            Our Services are not designed for the individuals who are under the
            age of 18 or under the legal age to provide consent under the
            applicable laws of country or jurisdiction where You are using Our
            Services or Platform. If You are not over 18 or of the legal age of
            your country, You will not provide any Personal Information to Us,
            or to engage in Our services. We reserve the right to access and
            verify any Personal Information collected from You. If we are aware
            that You are under 18 or under the legal age who already shared your
            Personal Information with us, we will then discard such information
            and block your access to our Website immediately.
          </>
        ),
      },
    ],

    changes_n_update: [
      {
        id: 1,
        list: (
          <>
            These Privacy Policy were last updated on 09.11 2021. We will revise
            and update this Privacy Policy from time to time, at our sole
            discretion, and the last version will be published on the Website.
            If you do not agree to be bound by these Privacy Policy or with any
            subsequent amendments, changes or updates, please do not access or
            use any of the Services, and if you do access or use any of the
            Services, you will be bound by these Privacy Policy, as updated and
            amended from time to time. Your only recourse in the case of your
            unwillingness to be bound by these Privacy Policy is to stop using
            all of the Services.
          </>
        ),
      },
    ],

    contact: [
      {
        id: 1,
        list: (
          <>
            Questions, comments and requests regarding this Privacy Policy should be addressed to us through the Website.
          </>
        ),
      },
    ],


  };

  return (
    <section id="Section1">
      <div className="section_container">
        <h1 className="section_title">Seedify Inc. Privacy Policy</h1>

        <div className="section_body mb-[50px]">
          <ul>
            <li>
              {/* <h3 className="section_subtitle">
                                Seedify Inc. Privacy Policy
                            </h3> */}
              <ol className="content_list">
                {content_object_list?.introduction?.map((v) => {
                  return <li key={v.id}>{v.list}</li>;
                })}
              </ol>
            </li>

            <li>
              <h3 className="section_subtitle">
                What Personal Data Do We Collect?
              </h3>
              <ol className="content_list disc ms-5">
                {content_object_list?.personal_data?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list ">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>

            <li>
              <h3 className="section_subtitle">
                How We Use Your Personal Data
              </h3>
              <ol className="content_list ">
                {content_object_list?.how_personal_data?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list disc ms-10">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>

            <li>
              <h3 className="section_subtitle">
                How We Protect Your Personal Data
              </h3>
              <ol className="content_list ">
                {content_object_list?.protect_personal_data?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list disc ms-10">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>

            <li>
              <h3 className="section_subtitle">
                Third-Party Collection of Personal Data
              </h3>
              <ol className="content_list ">
                {content_object_list?.third_party_personal_data?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list disc ms-10">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>

            <li>
              <h3 className="section_subtitle">
                Designated Countries Privacy Right and Your Legal Rights
              </h3>
              <ol className="content_list ">
                {content_object_list?.legal_rights?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list disc ms-10">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>

            <li>
              <h3 className="section_subtitle">Limitations</h3>
              <ol className="content_list ">
                {content_object_list?.limitation?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list disc ms-10">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>

            <li>
              <h3 className="section_subtitle">Changes and Updates</h3>
              <ol className="content_list ">
                {content_object_list?.changes_n_update?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list disc ms-10">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>


            <li>
              <h3 className="section_subtitle">Contact</h3>
              <ol className="content_list ">
                {content_object_list?.contact?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}
                      {v?.list_children_object && (
                        <ol className="content_list disc ms-10">
                          {v.list_children_object.map((j) => {
                            return <li key={j.id}>{j.list}</li>;
                          })}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>


          </ul>
        </div>
      </div>
    </section>
  );
};
export default PrivacyPolicy;
