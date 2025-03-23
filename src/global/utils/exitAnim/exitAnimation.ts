export default (el:Element,done:()=>void) =>{
    el.setAttribute("data-exit","true");
    setTimeout(done,300);
}