import Task from "Global/utils/task/task.ts";
import {Transition} from "solid-transition-group";
import {
    setShowInformationPopup,
    showInformationPopup
} from "Global/states/showInformationPopup/showInformationPopup.ts";
import PopUpModal from "Global/components/modal/popupModal/PopUpModal.tsx";
import {Show} from "solid-js";


export default () => {
    //モーダル解除アニメーション用
    function exitModal(el: Element, done: () => void) {
        el.setAttribute("data-exit", "true");
        Task.sleep(500).then(done);
    }
    
    return (
        <Transition onExit={exitModal}>
            <Show when={showInformationPopup()}>
                <PopUpModal title={"理想体重計算機v2.0について"} hide={_=>setShowInformationPopup(false)} blur>
                    <h3>理想体重計算機 Ver 2.0.2 By Makisaka</h3>
                    <a href="https://github.com/Mkskdesu/IdealBodyWeightCalculator">プロジェクトページ(GitHub)</a> <br/>
                    <a href="https://github.com/Mkskdesu/IdealBodyWeightCalculator/issues/new">Issue, バグ報告</a> <br/>
                    理想体重計算機は, MITライセンスによるオープンソースソフトウェアとして公開されています.
                </PopUpModal>
            </Show>
        </Transition>
    )
}