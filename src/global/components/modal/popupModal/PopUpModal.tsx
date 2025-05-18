import style from "./PopUpModal.module.scss";
import clsx from "clsx";
import {For, JSX, JSXElement, Show} from "solid-js";
import {VsChromeClose} from "solid-icons/vs";
interface IPopupModalProps {
    title: string;
    blur?: boolean;
    children?: JSXElement;
    buttons?: Array<{label:string,onClick: (e:MouseEvent&{currentTarget:HTMLButtonElement,target:Element})=>void}>
    childRef?: HTMLDivElement | ((el: HTMLDivElement) => void);
    hide?: ()=>void;
    ref?: HTMLDivElement;
    containerAttr:JSX.HTMLAttributes<HTMLDivElement>
}

export default (props:IPopupModalProps) => {
    return(
        <div {...props.containerAttr} class={clsx(style.modal,props.blur && style.blur)} onclick={props.hide} ref={props.ref}>
            <div class={style.inner} ref={props.childRef} onclick={e=>e.stopPropagation()}>
                <div class={style.title}>
                    <h2>{props.title}</h2>
                    <button class={style.close} onclick={props.hide}>
                        <VsChromeClose/>
                    </button>
                </div>
                <hr/>
                <div class={style.content}>
                    {props.children}
                </div>
                <Show when={props.buttons?.length}>
                    <div class={style.buttons}>
                        <For each={props.buttons}>
                            {btn=><button class={style.btn} onClick={btn.onClick}>{btn.label}</button>}
                        </For>
                    </div>
                </Show>
            </div>
        </div>
    )
}