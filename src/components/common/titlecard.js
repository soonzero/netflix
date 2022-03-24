import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RowContainer from "./rowcontainer";

const TitleCardsStyle = styled.div`
  margin: 3vw 0;
  padding: 0;
  position: relative;
  outline: 0;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
    -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  z-index: 1;

  .icon-right::before {
    content: "\\e658";
  }

  &:hover {
    a.row-title {
      .arrow-chevron {
        display: inline-block;
        font-size: 0.9vw;
        vertical-align: bottom;
      }
    }

    a.row-title:hover {
      color: white;

      .arrow-header {
        .see-all {
          max-width: 200px;
          transform: translate(1vw, 0);
          opacity: 1;
        }

        .arrow-chevron {
          transform: translate(1vw, 0);
          font-size: 0.65vw;
          line-height: 0.8vw;
        }
      }
    }
  }

  .row-header {
    font-size: 1.3125rem;
    line-height: 1.3;
    margin: 0;

    .row-title {
      font-size: 1.4vw;
      color: #e5e5e5;
      margin: 0 4% 0.5em 4%;
      margin-left: 60px;
      text-decoration: none;
      display: inline-block;
      min-width: 6em;
      font-weight: 600;

      .row-header-title {
        display: table-cell;
        vertical-align: bottom;
        line-height: 1.25vw;
        font-size: 1.4vw;
      }

      .arrow-header {
        display: table-cell;
        vertical-align: bottom;
        line-height: 1.3;

        .see-all {
          display: inline-block;
          font-size: 0.9vw;
          margin-right: 4px;
          max-width: 0;
          line-height: 0.8vw;
          transition: max-width 1s, opacity 1s, transform 750ms,
            -webkit-transform 750ms, -moz-transform 750ms, -o-transform 750ms;
          white-space: nowrap;
          vertical-align: bottom;
          cursor: pointer;
          opacity: 0;
        }
      }

      .arrow-chevron {
        display: none;
        transition: transform 750ms, -webkit-transform 750ms,
          -moz-transform 750ms, -o-transform 750ms;
        font-size: 0.9vw;
        vertical-align: bottom;
      }
    }
  }
`;

export default function TitleCard(props) {
  return (
    <TitleCardsStyle>
      <h2 className="row-header">
        <Link
          to={props.url ? `/browse/${props.url}` : "/browse"}
          className="row-title"
        >
          <div className="row-header-title">{props.headerTitle}</div>
          <div className="arrow-header">
            {props.headerTitle !== "오늘 한국의 TOP 10 콘텐츠" && (
              <>
                <div className="see-all">모두 보기</div>
                <div className="arrow-chevron icon-right"></div>
              </>
            )}
          </div>
        </Link>
        <RowContainer items={props.items} headerTitle={props.headerTitle} />
      </h2>
    </TitleCardsStyle>
  );
}
