class StatsApp{
    //Inputy liczbowe
    input1 :HTMLInputElement;
    input2 :HTMLInputElement;
    input3 :HTMLInputElement;
    input4 :HTMLInputElement;

    //Inputy wynikow
    sumInput:HTMLInputElement;
    avgInput:HTMLInputElement;
    minInput:HTMLInputElement;
    maxInput:HTMLInputElement;

    //Konstruktor
    constructor(){
        this.startApp;
    }

    startApp(){
        this.getInputs();
        this.watchInputValues();
    }

    //Query selectory do inputów
    getInputs(){

        this.input1 =document.querySelector('#numberone');
        this.input2 =document.querySelector('#numbertwo');
        this.input3 =document.querySelector('#numberthree');
        this.input4 =document.querySelector('#numberfour');
        this.sumInput =document.querySelector('#sum');
        this.avgInput =document.querySelector('#avg');
        this.minInput =document.querySelector('#min');
        this.maxInput =document.querySelector('#max');
    }

    watchInputValues() {
        this.input1.addEventListener('input', () => this.computeData());
        this.input2.addEventListener('input', () => this.computeData());
        this.input3.addEventListener('input', () => this.computeData());
        this.input4.addEventListener('input', () => this.computeData());
    }

    computeData(){
        const data1 = +this.input1.value;
        const data2 = +this.input2.value;
        const data3 = +this.input3.value;
        const data4 = +this.input4.value;

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

const statsApp =new StatsApp();