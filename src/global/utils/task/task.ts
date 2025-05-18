import wait from "Global/utils/task/waitUntil.ts";
namespace Task {
    export async function waitUntil (t:()=>boolean){
        await wait(t)
    }
    export function sleep(ms:number){
        return new Promise(resolve=>setTimeout(resolve,ms));
    }
}

export default Task;