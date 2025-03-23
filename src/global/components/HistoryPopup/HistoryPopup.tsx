import style from "./HistoryPopup.module.scss";
import {BsX} from "solid-icons/bs";
import History from "Pages/history/History.tsx";
import {setShowHistoryPopup} from "Global/states/showHistoryPopup/showHistoryPopup.ts";

export default () => {
    return (
        <div class={style.popup}>
            <div class={style.inner}>
                <div class={style.titlebar}>
                    <div class={style.bar}></div>
                    <button class={style.x} onClick={_=>setShowHistoryPopup(false)}>
                        <BsX/>
                    </button>
                </div>
                <History/>
            </div>
        </div>
    )
}