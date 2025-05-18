import style from "./HeightInput.module.scss";
import {createSignal, For, onCleanup, onMount} from "solid-js";
import range from "Global/utils/range/range.ts";
import {BsArrowReturnLeft, BsKeyboard, BsBackspace} from "solid-icons/bs";
import {setHeight} from "Global/states/heightState/heightState.ts";
import {setShowResult} from "Global/states/showResult/showResult.ts";
import {histoty, setHistory} from "Global/states/historyState/historyState.ts";
import {sex} from "Global/states/sexState/sexState.ts";

export default () => {

    let numberInputRef: HTMLInputElement;
    const [dotFlag, setDotFlag] = createSignal(false);
    
    onMount(()=>{
        //キーボードからの直接入力時にフォーカスする
        window.addEventListener("keydown",handleKeyboardInput);
    })
    
    onCleanup(()=>{
        window.removeEventListener("keydown",handleKeyboardInput);
    })
    
    function handleKeyboardInput(){
        numberInputRef.focus();
    }

    function handleNumber(num: number) {
        if (dotFlag()) {
            setDotFlag(false);
            numberInputRef.value += `.${num}`
        } else {
            numberInputRef.value += num.toString();
        }
    }

    function handleDot() {
        if (numberInputRef.value.includes(".") || dotFlag()) return;
        setDotFlag(true);
    }

    function handleDelete() {
        if (dotFlag()) {
            setDotFlag(false);
        }
        if (!numberInputRef.value.length) return;
        if (numberInputRef.value[numberInputRef.value.length - 2] == ".") {
            numberInputRef.value = numberInputRef.value.slice(0, -2);
        } else {
            numberInputRef.value = numberInputRef.value.slice(0, -1)
        }
    }
    
    function handleClear(){
        numberInputRef.value = "";
    }

    function toggleKeyboard() {
        //setShowKeyboard(p=>!p);
        numberInputRef.focus()
    }

    function handleEnter(e: Event) {
        e.preventDefault();
        if (!numberInputRef.value.length) return;
        numberInputRef.blur();
        const height = Number(numberInputRef.value);
        setHeight(height);
        setShowResult(true);
        setHistory(histoty.length, {sex: sex(), height: height});
    }

    return (
        <div class={style.inputArea}>
            <p><b>身長</b></p>
            <div class={style.input}>
                <form onsubmit={handleEnter}>
                    <input class={style.numberInput} type="number"
                           step={0.01}
                           ref={numberInputRef!}
                    />
                </form>
                <span>
                    {dotFlag() && "."}
                    cm
                </span>
            </div>
            <div class={style.keypad} dir={"rtl"}>
                <For each={[...range(10)].reverse()}>
                    {
                        v => <button onClick={_ => handleNumber(v)}>{v}</button>
                    }
                </For>
                <button class={style.enter} onClick={handleEnter}><BsArrowReturnLeft/></button>
                <button onClick={handleDot}>.</button>
                <button onClick={handleDelete}><BsBackspace/></button>
                <button onClick={handleClear}>C</button>
                <button onClick={toggleKeyboard}><BsKeyboard/></button>

            </div>
        </div>
    )
}