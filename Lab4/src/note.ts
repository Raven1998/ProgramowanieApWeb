import { colors} from "./colors"
export class Note{

    title:string
    content:string
    creationDate:Date
    color:colors
    isPinned:boolean

    constructor(title:string,content:string) {
       
        this.title=title;
        this.content=content;
        this.creationDate=new Date();
        this.color=colors.Yellow;
        this.isPinned=false;
       
    }

    


}