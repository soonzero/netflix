import React, { useState } from "react";
import Header from "components/signup/header";
import { ReactComponent as CheckSVG } from "images/check.svg";
import Footer from "components/common/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegistrationStyle } from "components/common/styled";

export default function EditPlan() {
  // Module
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Global Variable
  const plan = useSelector((state) => state.membership.membership);

  // Local Variables

  // Local States
  const [selected, setSelected] = useState(plan);

  // Functions
  const onChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  const onClickHandler = () => {
    dispatch({ type: "SET", data: { membership: selected } });
    navigate(`/signup/creditoption`);
  };

  return (
    <RegistrationStyle selected={selected}>
      <Header />
      <div className="main-container">
        <div className="center-container">
          <div className="plan-form-container">
            <div>
              <div className="step-header-container">
                <div className="step-header">
                  <h1 className="step-title">원하는 멤버십을 선택하세요.</h1>
                </div>
              </div>
              <div className="change-anytime">
                <ul className="check-group">
                  <li className="check-item">
                    <CheckSVG />
                    <span>광고 없이 무제한으로 시청.</span>
                  </li>
                  <li className="check-item">
                    <CheckSVG />
                    <span>취향에 꼭 맞는 콘텐츠를 추천해 드립니다.</span>
                  </li>
                  <li className="check-item">
                    <CheckSVG />
                    <span>멤버십은 언제든지 변경 또는 해지 가능.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan-grid">
              <div className="plan-grid-header">
                <div className="plan-grid-selection">
                  <label className="plan-grid-choice">
                    <input
                      type="radio"
                      className="plan-choice"
                      name="plan-choice"
                      value="B"
                      onChange={onChangeHandler}
                    />
                    <span className={`${selected == "B" && "checked"}`}>
                      베이식
                    </span>
                  </label>
                  <label className="plan-grid-choice">
                    <input
                      type="radio"
                      className="plan-choice"
                      name="plan-choice"
                      value="S"
                      onChange={onChangeHandler}
                    />
                    <span className={`${selected == "S" && "checked"}`}>
                      스탠다드
                    </span>
                  </label>
                  <label className="plan-grid-choice">
                    <input
                      type="radio"
                      className="plan-choice"
                      name="plan-choice"
                      value="P"
                      onChange={onChangeHandler}
                    />
                    <span className={`${selected == "P" && "checked"}`}>
                      프리미엄
                    </span>
                  </label>
                </div>
              </div>
              <table className="plan-grid-table">
                <tbody className="plan-grid-tbody">
                  <tr>
                    <td className="plan-grid-feature">월 요금</td>
                    <td
                      className={`plan-grid-string ${
                        selected == "B" && "checked"
                      }`}
                    >
                      9,500원
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "S" && "checked"
                      }`}
                    >
                      13,500원
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "P" && "checked"
                      }`}
                    >
                      17,000원
                    </td>
                  </tr>
                  <tr>
                    <td className="plan-grid-feature">
                      <div>영상 화질</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "B" && "checked"
                      }`}
                    >
                      <div>좋음</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "S" && "checked"
                      }`}
                    >
                      <div>매우 좋음</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "P" && "checked"
                      }`}
                    >
                      <div>가장 좋음</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="plan-grid-feature">해상도</td>
                    <td
                      className={`plan-grid-string ${
                        selected == "B" && "checked"
                      }`}
                    >
                      <div>480p</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "S" && "checked"
                      }`}
                    >
                      <div>1080p</div>
                    </td>
                    <td
                      className={`plan-grid-string ${
                        selected == "P" && "checked"
                      }`}
                    >
                      <div>4K+HDR</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="plan-grid-feature">
                      TV, 컴퓨터, 스마트폰, 태블릿으로 시청
                    </td>
                    <td
                      className={`plan-grid-boolean ${
                        selected == "B" && "checked"
                      }`}
                    >
                      <span>
                        <CheckSVG />
                      </span>
                    </td>
                    <td
                      className={`plan-grid-boolean ${
                        selected == "S" && "checked"
                      }`}
                    >
                      <span>
                        <CheckSVG />
                      </span>
                    </td>
                    <td
                      className={`plan-grid-boolean ${
                        selected == "P" && "checked"
                      }`}
                    >
                      <span>
                        <CheckSVG />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <small className="plan-grid-disclaimer">
                <span className="plan-grid-legal">
                  HD(720p), 풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는
                  인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다.
                  모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은
                  이용약관을 확인하세요.
                </span>
              </small>
              <small className="plan-grid-disclaimer">
                <span className="plan-grid-legal">
                  한집에 사는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄
                  멤버십은 동시접속 4명, 스탠다드 멤버십은 2명, 베이식 멤버십은
                  1명까지 가능합니다.
                </span>
              </small>
            </div>
          </div>
          <div className="submit-button-container">
            <button
              type="button"
              className="submit-button"
              onClick={onClickHandler}
            >
              다음
            </button>
          </div>
        </div>
      </div>
      <Footer registration />
    </RegistrationStyle>
  );
}
