import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductCallout,
  ProductText,
} from "arccorp-vars";
import NDCLatest from "./component/ndc-cards";

export default function Omnichannel() {
  return (
    <div className="omnichannel-page">
      <Stickynav
        title="Omnichannel Retailing"
        links={[
          { title: "ARC's Investments", url: "#investments" },
          { title: "Technology", url: "#technology" },
          { title: "The Latest", url: "#latest" },
        ]}
      />
      <ProductJumbo
        ctaTitle="A Corporate Buyer’s Guide (PDF)"
        ctaLink="https://www2.arccorp.com/globalassets/forms/omnichannel-corporate-buyers-guide.pdf"
        subtitle={
          <>
            Today’s travelers are increasingly using a variety of platforms and
            providers to shop for, buy and service their travel. ARC believes
            the future of air travel retailing is a{" "}
            <span>“buy anywhere, service anywhere”</span> omnichannel ecosystem
            rather than today’s channel-exclusive environments. <br />
            <br /> Through its products, solutions and investments, ARC{" "}
            <span>
              connects airlines, travel agencies, travel managers and travelers
              across channels{" "}
            </span>{" "}
            to create a more seamless, transparent and inclusive retailing
            environment.
          </>
        }
        title="ARC Omnichannel Retailing"
        backgroundImage="https://www2.arccorp.com/globalassets/homepage/redesign/slides/carousel27.jpg"
      />
      <ProductText
        className="bg-color-tarmac"
        id="overview"
        body={
          <>
            <div class="row">
              <div class="col-lg-4">
                <div class="ndc-overview-info">
                  <div class="ndc-overview-info-copy">
                    <div className="overview-header">
                      Seamless Travel Experiences
                    </div>
                    The modern traveler expects a shopping experience that is
                    streamlined, simple and consistent across every channel. In
                    reality, travelers currently have to make tradeoffs between
                    the direct and indirect channels, choosing between airline
                    status perks and TMC servicing. In an evolved environment,
                    travelers can access the same rich content, attentive
                    service and seamless experience — no matter which booking
                    channel they choose.
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="ndc-overview-info">
                  <div class="ndc-overview-info-copy">
                    <div className="overview-header">
                    Powerful Data
                    </div>
                    Effective retailing is driven by transparency. Travelers
                    want enough information to make the best buying decision.
                    Likewise, travel managers need greater visibility into their
                    travelers’ itineraries across all channels. Airlines and
                    their channel partners can deliver more personalized
                    services with greater efficiency by ensuring a consistent,
                    accurate and transparent single version of truth. Travelers
                    will have increased ownership of their trip, enhancing
                    overall experience and satisfaction.
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="ndc-overview-info">
                  <div class="ndc-overview-info-copy">
                    <div className="overview-header">
                    Channel-Agnostic Service
                    </div>
                    In today’s environment, TMCs are unable to service tickets
                    booked in the direct channel. We want to change that. By
                    expanding servicing capabilities to authorized TMCs,
                    airlines can ensure their corporate customers have
                    high-touch support when they need it. In a channel-agnostic
                    servicing environment, travel managers will have greater
                    visibility into all client travel, enabling them to better
                    fulfill duty of care.
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
      <ProductText
        id="investments"
        eyebrow="investments"
        title="Our Investments"
        subTitleClass="black"
        subtitle="ARC is making key investments in a wide range of innovative companies and solutions to support omnichannel retailing. These solutions allow industry partners to retain ownership of their critical systems and technology."
        body={
          <>
            <div className="row">
              <div className="col-lg-6">
                <a href="https://www.traverse.tech/">
                  <div className="company-card">
                    <div className="company-card-inner">
                      <div className="company">
                        <img src="https://www2.arccorp.com/globalassets/about-us/omnichannel/Traverse-Logo-Color.svg" />
                      </div>
                      <div className="company-text">
                        Traverse Technologies is an independent subsidiary of
                        ARC, focusing on innovation and delivery excellence for
                        airlines serving corporate travelers. Traverse
                        Technologies develops applications that provide airlines
                        with online retailing solutions with enhanced features
                        to support travel agency services.
                      </div>
                      <p className="company-cta">
                        <a href="https://www.traverse.tech/">Learn More</a>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6">
                <a href="https://www.traxo.com/">
                  <div className="company-card">
                    <div className="company">
                      <img src="https://www2.arccorp.com/globalassets/about-us/omnichannel/traxo.png" />
                    </div>
                    <div className="company-text">
                      As a leading data aggregation and B2B travel technology
                      provider, Traxo helps travel managers gain visibility into
                      their travelers’ direct bookings and better support duty
                      of care requirements, including sharing data with their
                      TMCs. ARC holds an equity investment in Traxo.
                    </div>
                    <p className="company-cta">
                      <a href="https://www.traxo.com/">Learn More</a>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </>
        }
      />
      <ProductText
        id="technology"
        className="bg-color-fog"
        title="ARC's Technology"
        body={
          <>
            <div className="row">
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <h2>New Distribution Capability (NDC)</h2>
                  <p>
                    New Distribution Capability (NDC) enables airlines and
                    travel agencies to exchange richer content and data. With
                    ARC’s secure, flexible and cost-effective settlement
                    platform, airlines and travel agencies can create
                    customized, effectively managed partnerships that leverage
                    NDC.
                  </p>
                  <a
                    target="_blank"
                    href="https://www2.arccorp.com/products-participation/distribution/arcdirectconnect/"
                    className="ctaBtn ctaBtn--main-outline"
                    style={{ marginBottom: "5px" }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <h2>Emerging Forms of Payment</h2>
                  <p>
                    In an evolved distribution environment, the traveler will be
                    able to pay how they want: with multiple forms of payment or
                    emerging payment methods.
                  </p>
                  <p>
                    ARC supports a variety of standard and emerging forms of
                    payment, including PayPal, Alipay and UnionPay.
                  </p>
                  <a
                    target="_blank"
                    href="https://www2.arccorp.com/articles-trends/the-latest/ndc-one-order-mobile-payment-and-more/"
                    className="ctaBtn ctaBtn--main-outline"
                    style={{ marginBottom: "5px" }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-card">
                  <h2>Comprehensive Data</h2>
                  <p>
                    ARC has the world's most comprehensive air transaction data,
                    which can be leveraged to identify travel trends and
                    accelerate business growth.
                  </p>
                  <p>
                    ARC's data is versatile, delivering actionable insights into
                    broad trends and distinct details.
                  </p>
                  <a
                    target="_blank"
                    href="https://www2.arccorp.com/about-us/arc-data/"
                    className="ctaBtn ctaBtn--main-outline"
                    style={{ marginBottom: "5px" }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </>
        }
      />
      <ProductCallout
        title="Get Started with ARC"
        subtitle="Want to learn more about ARC’s growing omnichannel retailing capabilities? Contact ARC or your ARC Customer Success representative for more information."
        cta="Contact Us"
        ctaLink="https://www2.arccorp.com/about-us/contact-us/"
      />
      <ProductText
        id="latest"
        title="Related Articles"
        className="bg-color-fog"
        body={<NDCLatest />}
      />
    </div>
  );
}
