import React from "react";
import axios from "axios";
import { ReactComponent as ModalAddToMyList } from "images/addToMyList-modal.svg";
import { ReactComponent as ModalAdded } from "images/added-modal.svg";

export default function AddList(props) {
  const token = JSON.parse(sessionStorage.getItem("user")).jwt;
  const userIdx = JSON.parse(sessionStorage.getItem("user")).userIdx;
  const profileIdx = JSON.parse(sessionStorage.getItem("selectedProfile"));

  const addOrDelete = async (index) => {
    if (props.myList == 1) {
      deleteMyList(index);
    } else {
      addToMyList(index);
    }
  };

  const addToMyList = async (index) => {
    try {
      const add = await axios({
        method: "POST",
        url: "/my-list",
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        data: {
          userIdx: userIdx,
          profileIdx: profileIdx,
          contentIdx: index,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteMyList = async (index) => {
    try {
      const deleted = await axios({
        method: "PATCH",
        url: "my-list",
        baseURL: "https://rtflix.site",
        headers: {
          "X-ACCESS-TOKEN": token,
        },
        data: {
          userIdx: userIdx,
          profileIdx: profileIdx,
          contentIdx: index,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="my-list-button">
      <div className="ptrack-content">
        <button
          className="color-supplementary has-icon round circle-button"
          type="button"
          onClick={() => addOrDelete(props.content)}
        >
          <div className="circle-button-container">
            <div className="circle-button-svg-container">
              {props.myList == 1 ? <ModalAdded /> : <ModalAddToMyList />}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
