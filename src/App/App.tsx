import style from './App.module.scss'
import Header from "Global/components/header/Header";
import CalcForm from "Pages/calcForm/CalcForm.tsx";
import Result from "Pages/result/Result.tsx";
import {Transition} from "solid-transition-group";
import {Show} from "solid-js";
import {showResult} from "Global/states/showResult/showResult.ts";
import History from "Pages/history/History.tsx";
import HistoryPopup from "Global/components/HistoryPopup/HistoryPopup.tsx";
import exitAnimation from "Global/utils/exitAnim/exitAnimation.ts";
import {showHistoryPopup} from "Global/states/showHistoryPopup/showHistoryPopup.ts";

function App() {


    
    return (
        <div class={style.app}>
            <Header/>
            <div class={style.main}>
                <div class={style.leftPanel}>
                    <CalcForm/>
                    <Transition onExit={exitAnimation}>
                        <Show when={showResult()}>
                            <Result/>
                        </Show>
                    </Transition>
                </div>
                <div class={style.rightPanel}>
                    <History/>
                </div>
                <Transition onExit={exitAnimation}>
                    <Show when={showHistoryPopup()}>
                        <HistoryPopup/>
                    </Show>
                </Transition>
            </div>
        </div>
    )
}

export default App
