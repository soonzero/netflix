import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  min-width: 190px;
  width: 100%;
  padding-bottom: 20px;
  font-size: 1rem;
  color: #757575;
  position: relative;
  background-color: ${(props) => props.registration && "#f3f3f3"};

  .footer-divider {
    height: 0;
    width: 100%;
    border-top: ${(props) => props.registration && "1px solid #e5e5e5"};
  }

  .footer-site {
    margin: 0 auto;
    width: 90%;
    padding-top: ${(props) => props.registration && "30px"};
  }

  .footer-top {
    padding: 0;
    margin-bottom: 30px;
    line-height: 1.3125;
  }

  .footer-top-a {
    color: #757575;
  }

  .footer-contents {
    max-width: 1000px;
    font-size: 0.8125rem;

    .footer-list {
      list-style: none;
      padding: 0;
      margin-bottom: 16px;
      display: inline-block;
      min-width: 100px;
      width: 25%;
      padding-right: 12px;
      vertical-align: top;
      font-size: 0.8125rem;
      line-height: 1.3076923077;
    }
  }

  .language-selector {
    margin-top: ${(props) => !props.registration && "20px"};

    .language-switcher {
      width: auto;
      display: inline-block;
      position: relative;
    }

    .select {
      position: relative;
      display: inline-block;
      width: 100%;

      &::before {
        position: absolute;
        top: 17px;
        left: 15px;
        color: #999;
        content: "\\e896";
        font-size: 1rem;
      }

      &::after {
        position: absolute;
        top: 22px;
        right: 10px;
        color: #999;
        content: "\\e896";
        font-size: 6px;
      }

      select {
        text-indent: 0;
        appearance: none;
        padding: ${(props) =>
          props.registration ? "10px 30px 12px 42px" : "12px 26px 12px 50px"};
        line-height: 1.7;
        background-color: ${(props) =>
          props.registration ? "white" : "black"};
        border: 1px solid #333333;
        color: #999;
        font-size: 1rem;
        border-radius: 2px;
        width: 100%;
      }
    }
  }

  .footer-country {
    font-size: 0.8125rem;
    margin: 24px 0 13px;
    line-height: 1.3076923077;
  }

  .footer-text {
    font-size: 0.75em;
    line-height: 1em;
    margin: 20px 0;
    color: #757575;

    & > div {
      margin-top: 4px;

      & > a {
        color: #757575;
      }
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterStyle registration={props.registration}>
      <div className="footer-divider"></div>
      <div className="footer-site">
        <p className="footer-top">
          질문이 있으신가요? 문의 전화: &nbsp;
          <a className="footer-top-a" href="tel:080-001-9587">
            080-001-9587
          </a>
        </p>
        <ul className="footer-contents">
          <li className="footer-list">자주 묻는 질문</li>
          <li className="footer-list">고객 센터</li>
          {!props.registration && (
            <>
              <li className="footer-list">계정</li>
              <li className="footer-list">미디어 센터</li>
              <li className="footer-list">투자 정보(IR)</li>
              <li className="footer-list">입사 정보</li>
              <li className="footer-list">넷플릭스 지원 디바이스</li>
            </>
          )}
          <li className="footer-list">이용 약관</li>
          <li className="footer-list">개인정보</li>
          <li className="footer-list">쿠키 설정</li>
          <li className="footer-list">회사 정보</li>
          {!props.registration && (
            <>
              <li className="footer-list">문의하기</li>
              <li className="footer-list">속도 테스트</li>
              <li className="footer-list">법적 고지</li>
              <li className="footer-list">오직 넷플릭스에서</li>
            </>
          )}
        </ul>
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
        {!props.registration && (
          <p className="footer-country">넷플릭스 대한민국</p>
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
        </div>
      </div>
    </FooterStyle>
  );
}
