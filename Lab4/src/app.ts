import { appLocalStorage } from "./appLocalStorage";
import { Note } from "./note";
import { Notes } from "./notes";

export class App {

   titleInput:HTMLInputElement;
   contentInput:HTMLInputElement;
   singleNote:Note;
   AllNotes:Notes =new Notes;
   Storage:appLocalStorage = new appLocalStorage();

   constructor() {
        this.getInputs();
        document.querySelector('#add').addEventListener('click',() => this.performAction())
        this.restoreData();
    }
  
    
    getInputs():void{
        this.titleInput =document.querySelector('#note-title');
        this.contentInput = document.querySelector('#note-content');
    }

    performAction(){
        this.createNote();
        this.createSingleBox(this.singleNote);
    }
   
    createNote(){
        this.singleNote= new Note(this.titleInput.value,this.contentInput.value);
        this.AllNotes.AddNote(this.singleNote);
        console.log(this.AllNotes);
        this.Storage.saveData(this.AllNotes.noteTable);
    }

    restoreData(){
        let restoredNotes:string=this.Storage.getData();
    let datatable :Note[]=[]
       datatable=JSON.parse(restoredNotes);
       console.log(datatable);

       for(let i=0;i<datatable.length;i++)
       {
           this.createSingleBox(datatable[i]);
           this.AllNotes.AddNote(datatable[i]);
       }

       
        
    }

    createSingleBox(obj:Note){
        const div = document.querySelector('.note-box');
        
        div.innerHTML+=`
        <div class='note' bgcolor='${obj.color}'>
        <span class="creation-date">${obj.creationDate}</span><br>
        <span class="notetitle">${obj.title}</span><br>
        <span class="notecontent">${obj.content}</span><br>
        <button type="button" id='changeColor'>Change Color</button>
        <button type="button" id='delete'>Make important</button>
        <button type="button" id='delete'>Delete note</button>
        <div>
        `;

   

    }

    changeColor(obj:Note){

        
    }

    

   
    
}