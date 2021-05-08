class StatsApp{
    
    
    Inputsnumber: HTMLInputElement; //Odpowiedzialny za ilosc generwowanych inputow
    dataDiv;
    Inputs ;
   // dataInput1 :HTMLInputElement;
    //dataInput2 :HTMLInputElement;
    //dataInput3 :HTMLInputElement;
   // dataInput4 :HTMLInputElement;
    
    

    sumInput:HTMLInputElement;
    avgInput:HTMLInputElement;
    minInput:HTMLInputElement;
    maxInput:HTMLInputElement;

    //Konstruktor
    constructor(){
        this.startApp();
    }

    startApp(){
        this.getInputs();
        this.watchInputValues();
    }

    
    //Query selectory do inputów
    getInputs(){
        this.Inputsnumber =document.querySelector('#inputs');
        this.Inputs=document.querySelector('.input-data');
        //this.dataInput1 =document.querySelector('#data1');
        //this.dataInput2 =document.querySelector('#data2');
        //this.dataInput3 =document.querySelector('#data3');
        //this.dataInput4 =document.querySelector('#data4');
        this.sumInput =document.querySelector('#sum');
        this.avgInput =document.querySelector('#avg');
        this.minInput =document.querySelector('#min');
        this.maxInput =document.querySelector('#max');
    }

    //Tworzenie inputow
    createInputs(){
        const quantity= +this.Inputsnumber.value;
        console.log(quantity);

        this.clearContent(); //Jezeli cos instnialo wczesniej - usuwa to.

        for(let i=1;i<=quantity;i++)
        {
            var input = document.createElement("input");
            input.type = "text";
            input.className = "data"+i;
            input.oninput =function(){}

            var button =document.createElement("button");
            button.innerHTML = 'Delete';
            button.className ="delete"+i;
            button.onclick = function()
            {
                let inputDiv=document.querySelector('.input-data');
                let classname =document.querySelector('.delete'+i);
                let dataname =document.querySelector('.data'+i);
                let brname =document.querySelector('.br'+i);
                
                inputDiv.removeChild(classname);
                inputDiv.removeChild(dataname);
                inputDiv.removeChild(brname);
                
            }

            var br=document.createElement('br');
            br.className ='br'+i;
            
            this.dataDiv =document.querySelector('.input-data').appendChild(input);
            this.dataDiv =document.querySelector('.input-data').appendChild(button);
            this.dataDiv =document.querySelector('.input-data').appendChild(br);
            
            
        }

    }

    clearContent(){
        this.dataDiv = document.querySelector('.input-data');

        while (this.dataDiv.firstChild) {
            this.dataDiv.removeChild(this.dataDiv.firstChild);
        }
    }

    

    watchInputValues() {
        this.Inputsnumber.addEventListener('input', ()=>this.createInputs());
        //this.dataInput1.addEventListener('input', () => this.computeData());
        //this.dataInput2.addEventListener('input', () => this.computeData());
        //this.dataInput3.addEventListener('input', () => this.computeData());
        //this.dataInput4.addEventListener('input', () => this.computeData());

        
        this.Inputs.addEventListener('keypress', ()=>this.computeData());
        this.Inputs.addEventListener('click', ()=>this.computeData());
        
        //TO DO
        //OGARNIJ ODSWIEZANIE
        
        
    }

    computeData(){
        //const data1 = +this.dataInput1.value;
       // const data2 = +this.dataInput2.value;
        //const data3 = +this.dataInput3.value;
        //const data4 = +this.dataInput4.value;

        //const sum=data1+data2+data3+data4;
        //const avg = sum/4;

        //const min =Math.min(data1,data2,data3,data4);
        //const max =Math.max(data1,data2,data3,data4);
        //this.showStats(sum, avg, min, max);
        console.log('dziala');

    }

    showStats(sum:number,avg:number,min:number,max:number){
        this.sumInput.value =sum.toString();
        this.avgInput.value =avg.toString();
        this.minInput.value =min.toString();
        this.maxInput.value =max.toString();
    }
}

const App =new StatsApp();