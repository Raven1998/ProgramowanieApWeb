appStart();

function appStart() :void{
    document.body.addEventListener('keypress', onKeyDown);
}

function onKeyDown(ev: KeyboardEvent):void {

console.log(ev);
const key=ev.key;
const time =ev.timeStamp;
}