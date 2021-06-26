import { Note } from "./note";

export class Notes{

    noteTable:Note[] =[]

    notecount:number=1;

    AddNote(singleNote:Note){
        singleNote.noteID =this.notecount;
        this.noteTable.push(singleNote);
        this.notecount++;
    }

    DeleteNote(index:number)
    {
        this.noteTable.splice(index,1);
    }
}