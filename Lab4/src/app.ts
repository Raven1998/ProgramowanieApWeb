import { appLocalStorage } from "./appLocalStorage";
import { Note } from "./note";

export class App {

   

    Notatka:Note =new Note('aa','bb');
  
    LS:any=new appLocalStorage();

    doSomething(){
        this.LS.saveData(this.Notatka);
        this.LS.getData();
    }
  

    Test:any=this.doSomething();
    
}