import style from "./Header.module.scss";
import {BsClockHistory, BsInfoCircle} from "solid-icons/bs";
import {setShowHistoryPopup} from "Global/states/showHistoryPopup/showHistoryPopup.ts";
import {setShowInformationPopup} from "Global/states/showInformationPopup/showInformationPopup.ts";

export default ()=> {

    return (
        <header class={style.header}>
            <h2>理想体重計算機 v2.0</h2>
            <button class={style.historyButton} onClick={_=>setShowHistoryPopup(true)}>
                <BsClockHistory/>
            </button>
            <button class={style.infoButton} onClick={_=>setShowInformationPopup(true)}>
                <BsInfoCircle/>
            </button>
        </header>
    )
}
