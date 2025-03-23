import style from "./CalcForm.module.scss";
import SexSelector from "Global/components/sexselector/SexSelector.tsx";
import HeightInput from "Global/components/heightInput/HeightInput.tsx";

export default () => {

    return (
        <div class={style.calcForm}>
            <SexSelector/>
            <HeightInput/>
        </div>
    )
}