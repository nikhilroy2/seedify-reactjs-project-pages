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
          </ul>
        </div>
      </div>
    </section>
  );
};
export default PrivacyPolicy;
