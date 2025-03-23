import {createSignal} from "solid-js";
import {Sex} from "Global/enums/Sex.ts";

export const [sex,setSex] = createSignal(Sex.MALE);