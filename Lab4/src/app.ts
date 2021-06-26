import { appLocalStorage } from "./appLocalStorage";
import { Note } from "./note";
import { Notes } from "./notes";

export class App {

   titleInput:HTMLInputElement;
   contentInput:HTMLInputElement;
   singleNote:Note;
   AllNotes:Notes =new Notes;
   Storage:appLocalStorage = new appLocalStorage();

   CreateCount:number=0;

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
        
        this.Storage.saveData(this.AllNotes.noteTable);
    }

    restoreData(){
        let restoredNotes:string=this.Storage.getData();
    let datatable :Note[]=[]
       datatable=JSON.parse(restoredNotes);
       
        
       for(let i=0;i<datatable.length;i++)
       {
           this.createSingleBox(datatable[i]);
           this.AllNotes.AddNote(datatable[i]);
       }

       
        
    }

    createSingleBox(obj:Note){
        const div = document.querySelector('.note-box');
        
        div.innerHTML+=`
        <div class='note noteid${obj.noteID}' 'bgcolor='${obj.color}'>
        <span class="creation-date">${obj.creationDate}</span><br>
        <span class="notetitle">${obj.title}</span><br>
        <span class="notecontent">${obj.content}</span><br>
        <button type="button" id='changeColor'>Change Color</button>
        <button type="button" id='important'>Make important</button>
        <button type="button" class='delete deleteid${obj.noteID}''>Delete note</button>
        <div>
        `;

        //document.querySelector('.deleteid'+obj.noteID).addEventListener('click',() => this.deleteNote(obj.noteID))

        
    }



    deleteNote(id:number){

        let indexnumber:number =0;

        this.AllNotes.noteTable.forEach((entry) =>{
            if(entry.noteID==id){ this.AllNotes.DeleteNote(indexnumber);}
            indexnumber++;
        });

        document.querySelector('.noteid'+id).remove();

        this.Storage.saveData(this.AllNotes.noteTable);
        
    }
    

    

   
    
}