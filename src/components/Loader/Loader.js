import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Loader.module.css";

function Loading(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.inner}>
                <Loader/>
            </div>
        </div>,
        document.querySelector("toast")
  );
}

export default Loading;
