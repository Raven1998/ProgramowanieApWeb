class StatsApp{
    
    dataInput1 :HTMLInputElement;
    dataInput2 :HTMLInputElement;
    dataInput3 :HTMLInputElement;
    dataInput4 :HTMLInputElement;

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

        this.dataInput1 =document.querySelector('#data1');
        this.dataInput2 =document.querySelector('#data2');
        this.dataInput3 =document.querySelector('#data3');
        this.dataInput4 =document.querySelector('#data4');
        this.sumInput =document.querySelector('#sum');
        this.avgInput =document.querySelector('#avg');
        this.minInput =document.querySelector('#min');
        this.maxInput =document.querySelector('#max');
    }

    watchInputValues() {
        this.dataInput1.addEventListener('input', () => this.computeData());
        this.dataInput2.addEventListener('input', () => this.computeData());
        this.dataInput3.addEventListener('input', () => this.computeData());
        this.dataInput4.addEventListener('input', () => this.computeData());
    }

    computeData(){
        const data1 = +this.dataInput1.value;
        const data2 = +this.dataInput2.value;
        const data3 = +this.dataInput3.value;
        const data4 = +this.dataInput4.value;

        const sum=data1+data2+data3+data4;
        const avg = sum/4;

        const min =Math.min(data1,data2,data3,data4);
        const max =Math.max(data1,data2,data3,data4);
        this.showStats(sum, avg, min, max);

    }

    showStats(sum:number,avg:number,min:number,max:number){
        this.sumInput.value =sum.toString();
        this.avgInput.value =avg.toString();
        this.minInput.value =min.toString();
        this.maxInput.value =max.toString();
    }
}

const App =new StatsApp();