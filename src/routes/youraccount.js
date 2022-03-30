import axios from "axios";
import Footer from "components/common/footer";
import React, { useEffect, useState } from "react";
import { AccountBodyStyle } from "components/common/styled";
import AccountHeader from "components/common/accountheader";
import { Link, useNavigate } from "react-router-dom";

export default function YourAccount() {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const [membershipInfo, setMembershipInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const [profiles, setProfiles] = useState(
    JSON.parse(sessionStorage.getItem("profiles"))
  );
  const [expand, setExpand] = useState();

  const getMembershipInfo = async (index) => {
    try {
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
      return "프리미엄";
    } else if (type == "B") {
      return "베이직";
    } else {
      return "스탠다드";
    }
  };

  function openMenu(number) {
    if (expand !== number) {
      setExpand(number);
    } else {
      setExpand(undefined);
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      navigate(`/login`);
    }
  }, []);

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
              <h1 className="account-header-inline">계정</h1>
              <div className="account-section-membersince">
                <div className="account-section-membersince-svg"></div>
                멤버십 시작: {membershipInfo && membershipInfo.startTime}
              </div>
              <div className="responsive-account-content">
                <div className="account-section collapsable-panel clearfix membership-section-wrapper membership-section-with-button">
                  <header className="account-section-header collapsable-section-toggle">
                    <h2 className="account-section-heading">
                      멤버십 & 결제 정보
                      <button
                        className="btn account-cancel-button btn-plain btn-small"
                        type="button"
                      >
                        <span>멤버십 해지</span>
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
                            비밀번호: ********
                          </div>
                          <div className="account-section-item account-section-item-disabled"></div>
                        </div>
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a href="/email" className="account-section-link">
                              계정 이메일 변경
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a
                              href="/password"
                              className="account-section-link"
                            >
                              비밀번호 변경
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a
                              href="/phonenumber"
                              className="account-section-link"
                            >
                              휴대폰 번호 등록
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
                                  <span className="text-payment">신용카드</span>{" "}
                                </span>
                                <span className="mopType">
                                  •••• •••• •••• ••••
                                </span>
                              </div>
                            </div>
                            <div className="account-section-item nextBillingDate-item">
                              다음 결제일은{" "}
                              {membershipInfo && membershipInfo.endTime}입니다.
                            </div>
                          </div>
                          <div className="account-section-group -thin">
                            <div className="account-section-item">
                              <a
                                className="account-section-link action-update-payment"
                                href="/simplemember/managepaymentinfo"
                              >
                                결제 정보 관리
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link wallet-subsection-add-backup-mop-link"
                                href="/simplemember/paymentpicker"
                              >
                                예비 결제 수단 등록
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link account-view-billing"
                                href="/BillingActivity"
                              >
                                결제 상세 정보
                              </a>
                            </div>
                            <div className="account-section-item">
                              <a
                                className="account-section-link action-update-billing-date"
                                href="/simplemember/billingdateedit"
                              >
                                결제일 변경
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
                              기프트카드 또는 할인 코드 입력
                            </a>
                          </div>
                          <div className="account-section-item account-section-item">
                            <a
                              className="account-section-link action-gift-cards-link"
                              href="/gift-cards"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              기프트카드 판매처
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
                      멤버십 상세 정보
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
                            <svg
                              viewBox="0 0 4770 960"
                              className="quality-icon"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path
                                  d="M724,595 C724,642 714,672 694,684 C673,696 622,702 538,702 C460,702 412,696 393,684 C373,672 363,642 363,595 L363,247 L291,247 L291,612 C291,665 309,701 344,721 C379,739 445,749 543,749 C647,749 715,739 748,720 C780,700 796,659 796,595 L796,247 L724,247 L724,595 Z M1013,691 L1013,247 L941,247 L941,744 L1341,744 L1341,691 L1013,691 Z M1858,299 L1858,247 L1372,247 L1372,299 L1580,299 L1580,744 L1652,744 L1652,299 L1858,299 Z M2428,617 C2428,556 2394,525 2327,520 L2327,519 C2369,515 2398,503 2414,484 C2429,467 2437,434 2437,388 C2437,336 2422,300 2394,278 C2366,257 2318,247 2249,247 L1946,247 L1946,744 L2018,744 L2018,542 L2259,542 C2323,542 2356,571 2356,629 L2356,744 L2428,744 L2428,617 Z M2337,475 C2318,489 2281,495 2225,495 L2018,495 L2018,295 L2250,295 C2299,295 2331,301 2345,314 C2360,328 2368,358 2368,402 C2368,438 2358,462 2337,475 Z M3008,744 L3083,744 L2844,247 L2743,247 L2510,744 L2586,744 L2635,639 L2958,639 L3008,744 Z M2937,596 L2656,596 L2795,292 L2937,596 Z M3730,549 L3428,549 L3428,746 L3330,746 L3330,247 L3428,247 L3428,443 L3730,443 L3730,247 L3829,247 L3829,746 L3730,746 L3730,549 Z M4226,247 C4301,247 4356,260 4389,286 C4417,306 4438,335 4454,372 C4470,408 4478,449 4478,493 C4478,591 4449,661 4389,706 C4356,732 4301,746 4226,746 L3980,746 L3980,247 L4226,247 Z M4216,639 C4346,639 4373,562 4373,493 C4373,427 4359,351 4216,351 L4078,351 L4078,639 L4216,639 Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M4638.00019,0 C4711.00009,0 4770,59 4770,132 L4770,827 C4770,868.423884 4751.51202,905.147426 4722.42954,929.452533 C4699.55882,948.56629 4670.13605,960 4638.00019,960 L133.999803,960 C58.9999134,960 0,901 0,827 L0,132 C0,59 58.9999134,0 133.999803,0 L4638.00019,0 Z M133.999803,80 C103.999847,80 79.9998826,103 79.9998826,132 L79.9998826,827 C79.9998826,857 103.999847,880 133.999803,880 L4638.00019,880 C4667.00015,880 4690.00012,856 4690.00012,827 L4690.00012,132 C4690.00012,103 4667.00015,80 4638.00019,80 L133.999803,80 Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a
                              href="/ChangePlan"
                              className="account-section-link"
                            >
                              멤버십 변경
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
                      프로필 & 자녀 보호 설정
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
                                    <div>모든 관람등급</div>
                                  </div>
                                  <button className="profile-action-icons">
                                    {p.lockPin != "N" && (
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg-icon svg-icon-profile-lock"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H7V8ZM15 8V9H9V8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8ZM5 11V19H19V11H5ZM11 13V17H13V13H11Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    )}
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="svg-icon svg-icon-chevron-down"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <ul className="profile-links">
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>언어</h4>
                                        한국어
                                      </div>
                                      <div className="profile-change">변경</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>시청 제한</h4>
                                        <div>제한 없음.</div>
                                      </div>
                                      <div className="profile-change">변경</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a
                                      className="profile-link"
                                      name={p.profileIdx}
                                      onClick={setProfileIndex}
                                    >
                                      <div className="profile-main">
                                        <h4>프로필 잠금</h4>
                                        {p.lockPin != "N" ? "켜짐" : "꺼짐"}
                                      </div>
                                      <div className="profile-change">변경</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>시청 기록</h4>
                                      </div>
                                      <div className="profile-change">보기</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>평가한 콘텐츠</h4>
                                      </div>
                                      <div className="profile-change">보기</div>
                                    </a>
                                  </li>
                                  <li className="account-section-item">
                                    <a className="profile-link">
                                      <div className="profile-main">
                                        <h4>재생 설정</h4>
                                        다음 화 자동 재생. 미리보기 자동 재생 안
                                        함 최상 화질 및 음질.
                                      </div>
                                      <div className="profile-change">변경</div>
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
                    <h2 className="account-section-heading">설정</h2>
                  </header>
                  <section className="collapsable-section-content account-section-content">
                    <div className="account-subsection clearfix">
                      <div className="clearfix">
                        <div className="account-section-group">
                          <div className="account-section-item">
                            <a className="account-section-link">
                              넷플릭스 테스터로 참여
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              영상 저장 디바이스 관리
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              디바이스 활성화
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              디바이스 최근 시청 기록
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              모든 디바이스에서 로그아웃
                            </a>
                          </div>
                          <div className="account-section-item">
                            <a className="account-section-link">
                              개인 정보 다운로드
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
