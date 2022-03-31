import React from "react";
import { Link } from "react-router-dom";
import { FooterStyle } from "./styled";
import { ReactComponent as FacebookSVG } from "images/facebook.svg";
import { ReactComponent as InstagramSVG } from "images/instagram.svg";
import { ReactComponent as TwitterSVG } from "images/twitter.svg";
import { ReactComponent as YoutubeSVG } from "images/youtube.svg";

export default function Footer(props) {
  return (
    <FooterStyle
      registration={props.registration}
      dark={props.dark}
      center={props.center}
      login={props.login}
      home={props.home}
      youraccount={props.youraccount}
    >
      <div className="footer-divider"></div>
      {props.home && (
        <div className="social-links">
          <Link to="https://www.facebook.com/NetflixKR" target="_blank">
            <FacebookSVG />
          </Link>
          <Link to="https://www.instagram.com/netflixkr" target="_blank">
            <InstagramSVG />
          </Link>
          <Link to="https://www.twitter.com/netflixkr" target="_blank">
            <TwitterSVG />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured"
            target="_blank"
          >
            <YoutubeSVG />
          </Link>
        </div>
      )}
      <div className="footer-site">
        {!props.home && (
          <p className="footer-top">
            {!props.youraccount ? (
              <>
                질문이 있으신가요? 문의 전화: &nbsp;
                <a className="footer-top-a" href="tel:080-001-9587">
                  080-001-9587
                </a>
              </>
            ) : (
              <>질문이 있으신가요? 고객센터에 문의하세요</>
            )}
          </p>
        )}
        {props.youraccount ? (
          <ul className="footer-contents">
            <li className="footer-list">
              <span>음성 및 자막</span>
            </li>
            <li className="footer-list">
              <span>고객 센터</span>
            </li>
            <li className="footer-list">
              <span>기프트카드</span>
            </li>
            <li className="footer-list">
              <span>투자 정보(IR)</span>
            </li>
            <li className="footer-list">
              <span>미디어 센터</span>
            </li>
            <li className="footer-list">
              <span>입사 정보</span>
            </li>
            <li className="footer-list">
              <span>쿠키 설정</span>
            </li>
            <li className="footer-list">
              <span>이용 약관</span>
            </li>
            <li className="footer-list">
              <span>개인정보 처리방침</span>
            </li>
          </ul>
        ) : (
          <ul className="footer-contents">
            {!props.home && (
              <li className="footer-list">
                <span>자주 묻는 질문</span>
              </li>
            )}
            {props.home && (
              <>
                <li className="footer-list">
                  <span>자막 및 음성</span>
                </li>
                <li className="footer-list">
                  <span>음성 지원</span>
                </li>
              </>
            )}
            <li className="footer-list">
              <span>고객 센터</span>
            </li>
            {props.home && (
              <li className="footer-list">
                <span>기프트카드</span>
              </li>
            )}
            {!props.registration && (
              <>
                {!props.home && (
                  <li className="footer-list">
                    <span>계정</span>
                  </li>
                )}
                <li className="footer-list">
                  <span>미디어 센터</span>
                </li>
                <li className="footer-list">
                  <span>투자 정보(IR)</span>
                </li>
                <li className="footer-list">
                  <span>입사 정보</span>
                </li>
                {!props.home && (
                  <li className="footer-list">
                    <span>넷플릭스 지원 디바이스</span>
                  </li>
                )}
              </>
            )}
            <li className="footer-list">
              <span>이용 약관</span>
            </li>
            <li className="footer-list">
              <span>개인정보</span>
            </li>
            {props.home && (
              <li className="footer-list">
                <span>법적 고지</span>
              </li>
            )}
            <li className="footer-list">
              <span>쿠키 설정</span>
            </li>
            <li className="footer-list">
              <span>회사 정보</span>
            </li>
            {!props.registration && (
              <>
                {props.home && (
                  <li className="footer-list">
                    <span>문의하기</span>
                  </li>
                )}
                {!props.home && (
                  <>
                    <li className="footer-list">
                      <span>속도 테스트</span>
                    </li>
                    <li className="footer-list">
                      <span>법적 고지</span>
                    </li>
                    <li className="footer-list">
                      <span>오직 넷플릭스에서</span>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        )}
        {!props.home && !props.youraccount && (
          <div className="language-selector">
            <div className="language-switcher">
              <div className="select">
                <select>
                  <option>한국어</option>
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {!props.registration || !props.home || (
          <p className="footer-country">넷플릭스 대한민국</p>
        )}
        {props.home && (
          <div className="member-footer-service">
            <button className="service-code">서비스 코드</button>
          </div>
        )}
        {props.youraccount && (
          <div className="service-code-wrapper">
            <a className="service-code pointer">서비스 코드</a>
          </div>
        )}
        <div className="footer-text">
          <div>
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호: 080-001-9587
          </div>
          <div>대표: 레지널드 숀 톰프슨</div>
          <div>이메일 주소: korea@netflix.com</div>
          <div>
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
            우편번호 03161
          </div>
          <div>사업자등록번호: 165-87-00119</div>
          <div>클라우드 호스팅: Amazon Web Services Inc.</div>
          <div>
            <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">
              공정거래위원회 웹사이트
            </a>
          </div>
          {props.home && (
            <span className="member-footer-instance">{`{50f73603-e050-4180-b7aa-e1bb98f1d587}`}</span>
          )}
        </div>
      </div>
    </FooterStyle>
  );
}
