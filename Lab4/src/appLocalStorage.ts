export class appLocalStorage{

    saveData(data: any) {
        localStorage.setItem('notesData', JSON.stringify(data));
    }
    getData():string {
        const data = localStorage.getItem('notesData');
        if (data) {
            
            return data;
            
        } else {
            //Do nothing
        }
    }
}