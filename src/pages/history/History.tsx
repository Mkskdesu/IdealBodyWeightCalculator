import style from "./History.module.scss";
import {For} from "solid-js";
import {histoty} from "Global/states/historyState/historyState.ts";
import {ICalcHistory} from "Global/types/ICalcHistory.ts";
import {Sex} from "Global/enums/Sex.ts";
import calcIBW from "Global/utils/calcIBW/calcIBW.ts";

const HistoryCard = (props:ICalcHistory) => {
    return(
        <div class={style.card}>
            <div class={style.title}>
                {props.sex == Sex.MALE ? "男性" : "女性"}, {props.height}cm
            </div>
            <span class={style.result}>
                {calcIBW(props.sex,props.height).toFixed(4)} kg
            </span>
        </div>
    )
}

export default () => {
    return(
        <div class={style.history}>
            <h2>履歴</h2>
            <div class={style.list}>
                <For each={histoty.toReversed()}>
                    {
                        data=> <HistoryCard {...data} />
                    }
                </For>
            </div>
        </div>
    )
}