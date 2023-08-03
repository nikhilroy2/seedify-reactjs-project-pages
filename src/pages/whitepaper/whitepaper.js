import React from "react";
import "./whitepaper.css";

function Whitepaper(props) {
  return (
    <div id="Whitepaper">
      <Section1></Section1>
    </div>
  );
}

const Section1 = () => {
  const content_object_list = {
    introduction: [
      {
        id: 1,
        list: <> The Genesis </>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                {" "}
                We introduced Seedify in February 2021 as a community-driven
                ecosystem designed to help advance blockchain innovation while
                giving token holders access to early-stage opportunities in the
                blockchain space.{" "}
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                {" "}
                To raise awareness, we held various community events with
                opportunities for participants to earn tokens. We opened
                numerous polls, with our rapidly growing community voting on
                topics to fine-tune the Seedify platform before launch.
              </>
            ),
          },
          {
            id: 3,
            list: (
              <>
                {" "}
                On March 26th, 2021, we listed $SFUND on Pancakeswap,
                airdropping over 3.000.000 tokens to our community members who
                participated in our airdrop and community involvement events. We
                did not raise any capital funding whatsoever in this process.
                Thus Seedify does not has any seed, VC, private or public
                investors.
              </>
            ),
          },
          {
            id: 4,
            list: (
              <>
                {" "}
                We bootstrapped our way to where we are today from a purely
                community launch, defying the odds and customs of the blockchain
                ecosystem.
              </>
            ),
          },
          {
            id: 5,
            list: (
              <>
                In the months following our launch, we began to develop the
                Seedify platform, starting with the launchpad, introduced our
                first incubation and opened new staking opportunities based on
                community feedback. Like all new startups forging a path in this
                space, we experienced both highs and lows but continued to grow
                through a volatile market.
              </>
            ),
          },
          {
            id: 6,
            list: (
              <>
                On July 14th, we held our first IDO (Wizard), which successfully
                sold out and achieved a 20x ATH. This inaugural IDO had 766
                participants, a sharp contrast to the 4500+ token holders
                participating in our IGOs today.
              </>
            ),
          },
        ],
      },

      {
        id: 2,
        list: <> Blockchain and Gaming </>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                As the blockchain industry continuously became more saturated
                with launchpads, accompanied by a less than positive market
                environment, we found ourselves in a moment where we said, we
                will focus only on one area, which we believe in a lot. That was
                blockchain gaming.
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                At the time when we announced our pivot to being a solely
                blockchain gaming focused launchpad, there was nothing alike,
                every launchpad was a generalist who did everything.
              </>
            ),
          },
          {
            id: 3,
            list: (
              <>
                As lifelong gamers, we recognized the value and potential of the
                emerging integration of blockchain technology with gaming.
                Actual ownership of in-game assets via NFTs and the play-to-earn
                model could positively change the gaming industry for both
                gamers and developers, bringing with it lucrative opportunities
                for millions of people around the globe, creating ways for many
                people to be financially free and provide for their family by
                playing games.
              </>
            ),
          },
          {
            id: 4,
            list: (
              <>
                Although it was still very much in its infancy stage, we felt
                blockchain gaming was primed to be the ideal vehicle to take the
                blockchain ecosystem mainstream. With 2.6 billion{" "}
                <a
                  className="text-[#7bf5fb] mx-2"
                  href="https://newzoo.com/insights/articles/newzoo-games-market-numbers-revenues-and-audience-2020-2023/"
                  target="_blank"
                  rel="noreferrer"
                >
                  gamers{" "}
                </a>
                worldwide in 2020 and a projected increase to 3 billion by 2023,
                gaming presents a massive mainstream addressable market outside
                of the blockchain niche
              </>
            ),
          },
        ],
      },
      {
        id: 3,
        list: <> The Pivot </>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                We announced our intentions to pivot towards focusing solely on
                blockchain gaming-related projects, on July 19, along with the
                introduction of a new and more balanced tier system for the
                launchpad.
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                On August 1st, Seedify officially became the blockchain
                industry's first gaming-only focused incubator and launchpad.
                From that point on, we proceeded to forge a robust network of
                industry and marketing partnerships, focusing on building an
                ecosystem that provides maximum value for $SFUND token holders
                while not just supporting but also leading blockchain gaming
                innovations
              </>
            ),
          },
          {
            id: 3,
            list: (
              <>
                Through effective launch strategies, industry-leading service
                and the continuous support for projects, Seedify emerged as the
                go-to launchpad in the GameFi space. We hosted some of the most
                successful IGOs (Initial Game Offerings) in 2021. These IGOs
                include Blocktopia (712x ATH), Cryowar (151x ATH) and Sidus,
                which achieved an 88x ATH in adverse market conditions
              </>
            ),
          },
          {
            id: 4,
            list: (
              <>
                In less than a year, Seedify has grown from a community launch
                project to an industry leader, with over 50 projects launched,
                with 4500+ participants per IGO, with over 600K Twitter
                followers, 200k+ Medium readers, and 200k+ Telegram followers.
              </>
            ),
          },
        ],
      },

      {
        id: 4,
        list: <> Introducing Seedify V2 </>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                With Seedify established as a leader in the blockchain gaming
                space, we shared our vision of the next steps in the evolution
                of Seedify, introducing the plans for Seedify V2 on October 11.
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                Our current website, at the time of publishing this whitepaper
                has only the core features of a launchpad with gaming-inspired
                UI, a cross-chain token claim dashboard and a profile section.
                With locked farming and staking options. Something that got the
                job done initially.
              </>
            ),
          },
          {
            id: 3,
            list: (
              <>
                Seedify V2 will be about greater user experience, advanced
                products, new utilities for SFUND holders, and some surprises
                that will impact the blockchain gaming, metaverse and NFT space
                forever.
              </>
            ),
          },
          {
            id: 4,
            list: (
              <>
                Blockchain gaming is very much connected with metaverse
                innovations and NFTs, so we are now focusing on these
                complementary areas also in 2022. Because hey will be
                inseparable in the future.
              </>
            ),
          },
          {
            id: 5,
            list: (
              <>
                To further enhance the value we provide to our community and our
                ability to support and drive innovation in the blockchain gaming
                space, V2 introduces the following core programs/products and
                divisions of new teams in each one;{" "}
                <span className="text-[#7bf5fb] mx-2 whitePaper_policy_pointer__PFxEL">
                  Seedify Meta Studios
                </span>{" "}
                for our own in-house projects,{" "}
                <span className="text-[#7bf5fb] mx-2 whitePaper_policy_pointer__PFxEL">
                  Seedify NFT Launchpad
                </span>{" "}
                for launching in-game and metaverse NFTs (INOs and IMOs),{" "}
                <span className="text-[#7bf5fb] mx-2 whitePaper_policy_pointer__PFxEL">
                  {" "}
                  Seedify Metaverse Asset Program
                </span>{" "}
                for providing grants,
                <span className="text-[#7bf5fb] mx-2 whitePaper_policy_pointer__PFxEL">
                  and Seedify NFT Space
                </span>{" "}
                which will connect all our innovations, as a master product.
              </>
            ),
          },
        ],
      },

      {
        id: 4,
        list: <> New Master Product: Seedify NFT Space </>,
        list_children_object: [
          {
            id: 1,
            list: (
              <>
                On January 27th, we announced a new master product; Seedify NFT
                Space. A revolutionary gaming and metaverse asset centric
                marketplace, Seedify NFT Space will fill a void left by
                traditional NFT marketplaces that lack the ability and UI to
                properly support buyers and sellers of these certain utility
                assets dedicated towards gaming and the metaverse
              </>
            ),
          },
          {
            id: 2,
            list: (
              <>
                Just like we did with Seedify Launchpad, we are entering a space
                crowded with generalists, with a completely laser focused
                product
              </>
            ),
          },
          {
            id: 3,
            list: (
              <>
                Seedify NFT Space will provide platform users with intuitive
                research tools to get just the NFTs you need for your gaming and
                metaverse experiences, it will connect creators and supporters
                through a 'Kickstarter-like' crowdfunding mechanism and
                launchpad network so creators and game studios can gain much
                more support then they would in a generalist NFT marketplace, as
                well as reward users with NFT collectibles through a very
                interesting system while also adding further utilities to the
                $SFUND token. The platform will have its own token,{" "}
                <span className="text-[#7bf5fb] mx-2 whitePaper_policy_pointer__PFxEL">
                  $SNFTS
                </span>
                , which will be airdropped to $SFUND stakers/farmers, along with
                holders of NFTs from selected bluechip collections and partners,
                to jumpstart the platform.
              </>
            ),
          },
        ],
      },
    ],
    igo_launchpad: [
      {
        id: 1,
        list: (
          <>
            {" "}
            Live since July 2021, IGO Launchpad is Seedify's flagship product
            and has firmly established itself as the go-to launch platform in
            the blockchain gaming space, with over 50 successful launches,{" "}
          </>
        ),
      },
      {
        id: 2,
        list: (
          <>
            Seedify Launchpad connects gamers and gaming enthusiasts with
            high-quality handpicked gaming and metaverse projects via Initial
            Game Offerings (IGOs). IGOs allow projects to raise funds and gain a
            base community of supporters, while participants have an opportunity
            to purchase new gaming tokens before they're listed on public
            exchanges,
          </>
        ),
      },
      {
        id: 3,
        list: (
          <>
            Each project hosted on the Seedify Launchpad goes through rigorous
            scrutiny to ensure that only high quality gaming projects are
            presented to $SFUND token holders,
          </>
        ),
      },
    ],

    launchpad_word: [
      {
        id: 1,
        list: (
          <>
            The Seedify Launchpad features a 9 level tier system based on $SFUND holding requirements, ranked 1 to 9 from lowest to highest. The higher the tier, the more tokens are allocated in IGOs.
          </>
        ),
      },
      {
        id: 2,
        list: (
          <>
            Tier 1:
          </>
        ),
        list_children_object: [
            {
                id: 1,
                list: <> Tier 1 is lottery-based, with 500 wallets whitelisted per IGO. All other tiers get guaranteed allocation in each IGO. </>
            },
           
        ]
      },
      {
        id: 3,
        list: (
          <>
           Higher Tiers, More Incentives
          </>
        ),
        list_children_object: [
            {
                id: 1,
                list: <>All tiers are eligible to participate in IGOs, but Tiers 6 to 9 have access to private sale opportunities, while Tier 9 members can also qualify for exclusive early-stage offerings through the Seed Club.</>
            },
           
        ]
      },

      {
        id: 3,
        list: (
          <>
           How is Allocation Calculated?
          </>
        ),
        list_children_object: [
            {
                id: 1,
                list: <>Allocation is tier-based and is calculated using a formula that assigns a specific pool weight to each tier. The number of participants in each tier is multiplied by its assigned pool weight, determining the number of pool shares for each tier. The total allocation amount is then divided by the total pool shares (all tiers combined) to determine allocation per pool share. This provides the total allocation per tier, based on each tier's number of pool shares. The allocation for each tier is then divided by each tier's respective number of participants to determine allocation per wallet in each tier.</>
            },
           
        ]
      },

      {
        id: 3,
        list: (
          <>
           Seedify Launchpad Tier Levels
          </>
        ),
      },


    ],


  };
  return (
    <section id="Section1">
      <div className="section_container">
        <h1 className="section_title">Seedify V2 Whitepaper</h1>

        <div className="section_body mb-[50px]">
          <ul>
            <li>
              <h3 className="section_subtitle">1) Introduction</h3>
              <ol className="content_list disc ms-5">
                {content_object_list?.introduction?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}

                      {v?.list_children_object && (
                        <ol className="content_list -ms-5">
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
              <h3 className="section_subtitle">2) Seedify IGO Launchpad</h3>
              <ol className="content_list disc ms-5">
                {content_object_list?.igo_launchpad?.map((v) => {
                  return (
                    <li key={v.id}>
                      {v.list}

                      {v?.list_children_object && (
                        <ol className="content_list -ms-5">
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
              <div className="content_wrapper">
                <h4 className="section_subtitle font_sm">
                  How Does the Seedify IGO Launchpad Work? <br />
                  Tier System{" "}
                </h4>
                <ol className="content_list ">
                  {content_object_list?.launchpad_word?.map((v) => {
                    return (
                      <li key={v.id}>
                        {v.list}
                        
                      </li>
                    );
                  })}
                </ol>
              </div>
            </li>

           
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Whitepaper;
