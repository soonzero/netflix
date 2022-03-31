import { RowContainerStyle } from "./styled";

export default function RowContainer(props) {
  // Function
  const sliderItems = (dummy) => {
    if (!props.mylist) {
      const data = dummy.map((item) => {
        return (
          <div key={item.title} className="slider-item">
            <div className={`title-card-container css-0`}>
              <div className="title-card">
                <div className="ptrack-content">
                  <a href="/" className="slider-refocus">
                    <div
                      className={`boxart-container boxart-rounded ${
                        props.headerTitle == "오늘 한국의 TOP 10 콘텐츠"
                          ? "boxart-size-7x10"
                          : "boxart-size-16x9"
                      }`}
                    >
                      {item.rankImage}
                      <img
                        className="boxart-image-in-padded-container"
                        src={`${item.image}`}
                      />
                      <div className="fallback-text-container">
                        <p className="fallback-text">{item.title}</p>
                      </div>
                    </div>
                    <div className="click-to-change-JAW-indicator">
                      <div className="bob-jawbone-chevron">
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
                      </div>
                    </div>
                  </a>
                </div>
                <div className="bob-container"></div>
              </div>
            </div>
          </div>
        );
      });
      return data;
    } else {
      const lines = Math.ceil(dummy.length / 6);
      const newArray = [];
      for (let i = 0; i < lines; i++) {
        newArray.push(dummy.slice(6 * i, 6 * i + 6));
      }
      const list = newArray.map((array, index) => {
        return (
          <div key={index} className={`row-container row-${index}`}>
            <div className="ptrack-container">
              <div className="row-content slider-hover-trigger-layer">
                <div className="slider">
                  <div className="slider-mask show-peek">
                    <div className="slider-content row-with-x-columns">
                      {array.map((item) => {
                        return (
                          <div key={item.title} className="slider-item">
                            <div className={`title-card-container css-0`}>
                              <div className="title-card">
                                <div className="ptrack-content">
                                  <a href="/" className="slider-refocus">
                                    <div className="boxart-container boxart-rounded boxart-size-16x9">
                                      <img
                                        className="boxart-image-in-padded-container"
                                        src={`${item.thumbnailUrl}`}
                                      />
                                      <div className="fallback-text-container">
                                        <p className="fallback-text">
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="click-to-change-JAW-indicator">
                                      <div className="bob-jawbone-chevron">
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
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div className="bob-container"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return list;
    }
  };

  return (
    <RowContainerStyle mylist={props.mylist}>
      {!props.mylist && (
        <div className="row-container">
          <div className="ptrack-container">
            <div className="row-content slider-hover-trigger-layer">
              <div className="slider">
                {!props.mylist && (
                  <>
                    <span className="handle handle-prev active">
                      <b className="indicator-icon icon-left-caret"></b>
                    </span>
                  </>
                )}
                <div className="slider-mask show-peek">
                  <div className="slider-content row-with-x-columns">
                    {sliderItems(props.items)}
                  </div>
                </div>
                {!props.mylist && (
                  <span className="handle handle-next active">
                    <b className="indicator-icon icon-right-caret"></b>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {props.mylist && sliderItems(props.items)}
    </RowContainerStyle>
  );
}
