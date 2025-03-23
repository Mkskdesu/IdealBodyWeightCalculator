import style from "./SexSelector.module.scss";
import {setSex, sex} from "Global/states/sexState/sexState.ts";
import {Sex} from "Global/enums/Sex.ts";

export default ()=>{
    return (
        <div class={style.selector}>
            <p><b>性別</b></p>
            <div class={style.inputArea} data-gender={sex()}>
                <button onClick={_=>setSex(Sex.MALE)}>男性</button>
                <button onClick={_=>setSex(Sex.FEMALE)}>女性</button>
                <div class={style.accent}></div>
            </div>
        </div>
    )
}