//Dzwiek
let boomSound :HTMLAudioElement;
let clapSound : HTMLAudioElement;
let hihatSound :HTMLAudioElement;
let kickSound: HTMLAudioElement;
let operhantSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

//Play Channels
const channel1:any[] =[];
const channel2:any[] =[];
const channel3:any[] =[];
const channel4:any[] =[];

//Booleany odpowiedzialne za zezwolenie na nagrywanie kanalu
let isChannel1Record:boolean =false;
let isChannel2Record:boolean =false;
let isChannel3Record:boolean =false;
let isChannel4Record:boolean =false;

//Wywolanie apki
appStart();

//Konstruktor
function appStart() :void{
    document.body.addEventListener('keypress', onKeyDown);
    setChannels();
    getSounds();
}

//Funkcja chwytajaca buttony channelow
function setChannels():void{
    document.querySelector('#chnl1').addEventListener('click', onPlayChannel1)
    document.querySelector('#chnl2').addEventListener('click', onPlayChannel2)
    document.querySelector('#chnl3').addEventListener('click', onPlayChannel3)
    document.querySelector('#chnl4').addEventListener('click', onPlayChannel4)

    document.querySelector('#rchnl1').addEventListener('click', onRecordChannel1)
    document.querySelector('#rchnl2').addEventListener('click', onRecordChannel2)
    document.querySelector('#rchnl3').addEventListener('click', onRecordChannel3)
    document.querySelector('#rchnl4').addEventListener('click', onRecordChannel4)

    document.querySelector('#stopr').addEventListener('click', onStopRecord)
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

//Odtworz Channel1
function onPlayChannel1() :void{
channel1.forEach(sound=>{
    setTimeout(()=>playSound(sound.key),sound.time)
    
});
}
//Odtworz Channel2
function onPlayChannel2() :void{
    channel2.forEach(sound=>{
        setTimeout(()=>playSound(sound.key),sound.time)
        
    });
}
//Odtworz Channel3
function onPlayChannel3() :void{
    channel3.forEach(sound=>{
        setTimeout(()=>playSound(sound.key),sound.time)
        
    });
}
//Odtworz Channel4
function onPlayChannel4() :void{
    channel4.forEach(sound=>{
        setTimeout(()=>playSound(sound.key),sound.time)
        
    });
}

//Zezwól na nagranie kanału 1
function onRecordChannel1():void{
    isChannel1Record =true;
}

//Zezwól na nagranie kanału 2
function onRecordChannel2():void{
    isChannel2Record =true;
}

//Zezwól na nagranie kanału 3
function onRecordChannel3():void{
    isChannel3Record =true;
}

//Zezwól na nagranie kanału 4
function onRecordChannel4():void{
    isChannel4Record =true;
}

//Zatrzymaj nagrywanie
function onStopRecord():void{
isChannel1Record =false;
isChannel2Record=false;
isChannel3Record =false;
isChannel4Record =false;
}

//Nagraj wybrany kanał
function RecordChannel(ev: KeyboardEvent):void {
    const key=ev.key;
    const time =ev.timeStamp;

if(isChannel1Record==true) {channel1.push({key,time})}//{key: key time:time}
else if(isChannel2Record==true) {channel2.push({key,time})}
else if(isChannel3Record==true) {channel3.push({key,time})}
else if(isChannel4Record==true) {channel4.push({key,time})}
}

//Funkcja reagujaca na wcisniecie klawiatury
function onKeyDown(ev: KeyboardEvent):void {
const key=ev.key;
console.log(ev);
RecordChannel(ev);
playSound(key);
}


//Odtworzenie dzwieku po kliknieciu
function playSound(key:string):void{
    switch(key){
        case 'a':{hihatSound.currentTime =0;
            hihatSound.play();
        break;}
        case 's':{boomSound.currentTime =0;
            boomSound.play();
        break;}
        case 'd':{clapSound.currentTime =0;
            clapSound.play();
        break;}
        case 'f':{kickSound.currentTime =0;
            kickSound.play();
        break;}
        case 'g':{operhantSound.currentTime =0;
            operhantSound.play();
        break;}
        case 'q':{rideSound.currentTime =0;
            rideSound.play();
        break;}
        case 'w':{snareSound.currentTime =0;
            snareSound.play();
        break;}
        case 'e':{tinkSound.currentTime =0;
            tinkSound.play();
        break;}
        case 'r':{tomSound.currentTime =0;
            tomSound.play();
        break;}
    }

}