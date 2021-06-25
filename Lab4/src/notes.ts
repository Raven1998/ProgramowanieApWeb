import { Note } from "./note";

export class Notes{

    noteTable:Note[] =[]


    AddNote(singleNote:Note){
        this.noteTable.push(singleNote);
    }

    DeleteNote(index:number)
    {
        this.noteTable.splice(index,1);
    }
}