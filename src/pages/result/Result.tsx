import style from "./Result.module.scss";
import {sex} from "Global/states/sexState/sexState.ts";
import {Sex} from "Global/enums/Sex.ts";
import {height} from "Global/states/heightState/heightState.ts";
import {BsChevronDoubleLeft} from "solid-icons/bs";
import {setShowResult} from "Global/states/showResult/showResult.ts";
import calcIBW from "Global/utils/calcIBW/calcIBW.ts";

export default () => {
    return (
        <div class={style.result}>
            <button class={style.backButton} onClick={_=>setShowResult(false)}>
                <BsChevronDoubleLeft/> 戻る
            </button>
            <h2>計算結果 ({sex()== Sex.MALE? "男性": "女性"}, {height()}cm)</h2>
            <div class={style.data}>
                <h2>
                    {sex() == Sex.MALE ? 50 :45.5} + 0.91 &times; ({height()} - 152.4) =
                </h2>
                <h1>
                    {calcIBW(sex(),height()).toFixed(4)}
                </h1>
                <hr/>
                <h3>x6</h3>
                <h2>
                    {(calcIBW(sex(),height()) *6).toFixed(4)}
                </h2>
                <h3>x7</h3>
                <h2>
                    {(calcIBW(sex(),height()) *7).toFixed(4)}
                </h2>
                <h3>x8</h3>
                <h2>
                    {(calcIBW(sex(),height()) *8).toFixed(4)}
                </h2>
            </div>
        </div>
    )
}