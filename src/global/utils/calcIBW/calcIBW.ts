import {Sex} from "Global/enums/Sex.ts";

export default (sex:Sex, height:number) =>
    (sex==Sex.MALE ? 50:45.5) + (0.91*(height- 152.4))