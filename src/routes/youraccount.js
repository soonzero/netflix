import axios from "axios";
import Footer from "components/common/footer";
import React, { useEffect, useState } from "react";
import { AccountBodyStyle } from "components/common/styled";
import AccountHeader from "components/common/accountheader";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LockSVG } from "images/lock.svg";
import { ReactComponent as MoreSVG } from "images/more.svg";
import { ReactComponent as PremiumSVG } from "images/premium.svg";

export default function YourAccount() {
  // Module
  const navigate = useNavigate();

  // Local Variables
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;

  // Local States
  const [info, setInfo] = useState();
  const [membershipInfo, setMembershipInfo] = useState();
  const [account, setAccount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfiles] = useState(
    JSON.parse(sessionStorage.getItem("profiles"))
  );
  const [expand, setExpand] = useState();

  // Life Cycle
  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    }
  }, []);

  // Functions
  const getMembershipInfo = async (index) => {
    try {
      const accountInfo = await axios({
        method: "GET",
        url: `/users/account?userIdx=${userIdx}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setAccount(accountInfo.data.result);
      const membershipInfo = await axios({
        method: "GET",
        url: `/users/membership?userIdx=${userIdx}&membershipIdx=${index}`,
        baseURL: "https://rtflix.site/",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      });
      setMembershipInfo(membershipInfo.data.result);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const setProfileIndex = (event) => {
    sessionStorage.setItem("lock", event.currentTarget.getAttribute("name"));
    navigate("/lock");
  };

  const membershipText = (type) => {
    if (type == "P") {
      return "????????????";
    } else if (type == "B") {
      return "?????????";
    } else {
      return "????????????";
    }
  };

  function openMenu(number) {
    if (expand !== number) {
      setExpand(number);
    } else {
      setExpand(undefined);
    }
  }

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <AccountHeader
        setInfo={setInfo}
        getMembershipInfo={getMembershipInfo}
        isLoading={isLoading}
      />
      {!isLoading && (
        <AccountBodyStyle>
          <div className="responsive-account-container">
            <div>
              <h1 className="account-header-inline">??????</h1>
              <div className="account-section-membersince">
                <div className="account-section-membersince-svg"></div>
                ????????? ??????: {membershipInfo && membershipInfo.startTime}
              </div>
              <div className="responsive-account-content">
                <div className="account-section collapsable-panel clearfix membership-section-wrapper membership-section-with-button">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">
                      ????????? & ?????? ??????
                      <button
                        className="btn account-cancel-button btn-plain btn-small"
                        type="button"
                      >
                        <span>????????? ??????</span>
                      </button>
                    </h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="clearfix">
                        <div className="account-section-group">
                          <div className="account-section-item account-section-email">
                            {info.email}
                          </div>
                          <div className="account-section-item account-section-item-disabled">
                            ????????????: ********
                          </div>
                          <div className="account-section-item account-section-item-disabled"></div>
                        </div>
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a href="/email" className="account-section-link">
                              ?????? ????????? ??????
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a
                              href="/password"
                              className="account-section-link"
                            >
                              ???????????? ??????
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a
                              href="/phonenumber"
                              className="account-section-link"
                            >
                              ????????? ?????? ??????
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="account-subsection clearfix light-divider">
                      <div className="wallet-subsection">
                        <div className="account-subsection-borderless clearfix">
                          <div className="account-section-group payment-details -wide">
                            <div className="account-section-item">
                              <div className="wallet-mop">
                                <span className="payment-icon">
                                  <span className="text-payment">????????????</span>{" "}
                                </span>
                                <span className="mopType">
                                  ???????????? ???????????? ????????????{" "}
                                  {account.cardNumber.slice(12, 16)}
                                </span>
                              </div>
                            </div>
                            <div className="account-section-item nextBillingDate-item">
                              ?????? ????????????{" "}
                              {membershipInfo && membershipInfo.endTime}?????????.
                            </div>
                          </div>
                          <div className="account-section-group -thin">
                            <div className="account-section-item">
                              <a
                                className="account-section-link action-update-payment"
                                href="/simplemember/managepaymentinfo"
                              >
                                ?????? ?????? ??????
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link wallet-subsection-add-backup-mop-link"
                                href="/simplemember/paymentpicker"
                              >
                                ?????? ?????? ?????? ??????
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link account-view-billing"
                                href="/BillingActivity"
                              >
                                ?????? ?????? ??????
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link action-update-billing-date"
                                href="/simplemember/billingdateedit"
                              >
                                ????????? ??????
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="account-subsection clearfix is-external-gift-redemption light-divider">
                      <div className="clearfix">
                        <div className="u-ta-right-desktop gifts-link-group">
                          <div className="account-section-item account-section-item">
                            <a
                              className="account-section-link action-redeem-link"
                              href="/redeem"
                            >
                              ??????????????? ?????? ?????? ?????? ??????
                            </a>
                          </div>
                          <div className="account-section-item account-section-item">
                            <a
                              className="account-section-link action-gift-cards-link"
                              href="/gift-cards"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              ??????????????? ?????????
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="account-section collapsable-panel clearfix">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">
                      ????????? ?????? ??????
                    </h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="clearfix">
                        <div className="account-section-group">
                          <div className="account-section-item plan-label">
                            <b>
                              {membershipInfo &&
                                membershipText(membershipInfo.membershipType)}
                            </b>
                            <PremiumSVG />
                          </div>
                        </div>
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a
                              href="/ChangePlan"
                              className="account-section-link"
                            >
                              ????????? ??????
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="account-subsection clearfix">
                        <div className="account-section-group -full">
                          <p className="account-addendum"></p>
                          <p className="account-addendum"></p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="account-section collapsable-panel clearfix">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">
                      ????????? & ?????? ?????? ??????
                    </h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="profile-hub">
                        <ul>
                          {profiles.map((p) => {
                            return (
                              <li
                                key={p.profileIdx}
                                name={p.profileIdx}
                                className={
                                  expand == p.profileIdx
                                    ? "single-profile expanded"
                                    : "single-profile"
                                }
                              >
                                <div
                                  className="profile-header"
                                  onClick={() => openMenu(p.profileIdx)}
                                >
                                  <img
                                    className="activeProfile"
                                    src={p.profileImageUrl}
                                  />
                                  <div className="profile-summary">
                                    <h3>{p.profileName}</h3>
                                    <div>?????? ????????????</div>
                                  </div>
                                  <button className="profile-action-icons">
                                    {p.lockPin != "N" && <LockSVG />}
                                    <MoreSVG />
                                  </button>
                                </div>
                                <ul className="profile-links">
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>??????</h4>
                                        ?????????
                                      </div>
                                      <div className="profile-change">??????</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>?????? ??????</h4>
                                        <div>?????? ??????.</div>
                                      </div>
                                      <div className="profile-change">??????</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a
                                      className="profile-link"
                                      name={p.profileIdx}
                                      onClick={setProfileIndex}
                                    >
                                      <div className="profile-main">
                                        <h4>????????? ??????</h4>
                                        {p.lockPin != "N" ? "??????" : "??????"}
                                      </div>
                                      <div className="profile-change">??????</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>?????? ??????</h4>
                                      </div>
                                      <div className="profile-change">??????</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>????????? ?????????</h4>
                                      </div>
                                      <div className="profile-change">??????</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>?????? ??????</h4>
                                        ?????? ??? ?????? ??????. ???????????? ?????? ?????? ???
                                        ??? ?????? ?????? ??? ??????.
                                      </div>
                                      <div className="profile-change">??????</div>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="account-section collapsable-panel clearfix">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">??????</h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="clearfix">
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a className="account-section-link">
                              ???????????? ???????????? ??????
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              ?????? ?????? ???????????? ??????
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              ???????????? ?????????
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              ???????????? ?????? ?????? ??????
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              ?????? ?????????????????? ????????????
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              ?????? ?????? ????????????
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </AccountBodyStyle>
      )}
      <Footer youraccount />
    </div>
  );
}
