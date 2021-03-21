let boomSound :HTMLAudioElement;
let clapSound : HTMLAudioElement;
let hihatSound :HTMLAudioElement;
let kickSound: HTMLAudioElement;
let operhantSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;


//Wywolanie apki
appStart();

//Konstruktor
function appStart() :void{
    document.body.addEventListener('keypress', onKeyDown);
    getSounds();
}

//Funkcja reagujaca na wcisniecie klawiatury
function onKeyDown(ev: KeyboardEvent):void {

console.log(ev);
const key=ev.key;
const time =ev.timeStamp;
playSound(key);
}

//Polaczenie dzwieku z HTML ze zmienna
function getSounds() :void{
boomSound =document.querySelector('[data-sound="boom"]');
clapSound=document.querySelector('[data-sound="clap"]');
hihatSound=document.querySelector('[data-sound="hihat"]');
kickSound=document.querySelector('[data-sound="kick"]');
operhantSound=document.querySelector('[data-sound="operhant"]');
rideSound=document.querySelector('[data-sound="ride"]');
snareSound=document.querySelector('[data-sound="snare"]');
tinkSound=document.querySelector('[data-sound="tink"]');
tomSound=document.querySelector('[data-sound="tom"]');

}
function playSound(key:string):void{
    switch(key){
        case 'a':{hihatSound.currentTime =0;
            hihatSound.play();
        break;}
    }

}