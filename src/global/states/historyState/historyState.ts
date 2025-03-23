import {createStore} from "solid-js/store";
import {ICalcHistory} from "Global/types/ICalcHistory.ts";

export const [histoty,setHistory] = createStore<Array<ICalcHistory>>([]);