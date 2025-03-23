import style from "./Header.module.scss";
import {BsClockHistory} from "solid-icons/bs";
import {setShowHistoryPopup} from "Global/states/showHistoryPopup/showHistoryPopup.ts";

export default ()=> {

    return (
        <header class={style.header}>
            <h2>理想体重計算機 v2.0</h2>
            <button onClick={_=>setShowHistoryPopup(true)}>
                <BsClockHistory/>
            </button>
        </header>
    )
}
