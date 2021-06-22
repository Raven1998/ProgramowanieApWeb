export class appLocalStorage{

    saveData(data: any) {
        localStorage.setItem('notesData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('notesData');
        if (data) {
            
            JSON.parse(data);
           let datax;
          datax=JSON.parse(datax);
          console.log(datax); 
            
        } else {
            return {};
        }
    }
}