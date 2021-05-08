var StatsApp = /** @class */ (function () {
    //Konstruktor
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
    };
    //Query selectory do inputów
    StatsApp.prototype.getInputs = function () {
        this.Inputsnumber = document.querySelector('#inputs');
        this.Inputs = document.querySelector('.input-data');
        //this.dataInput1 =document.querySelector('#data1');
        //this.dataInput2 =document.querySelector('#data2');
        //this.dataInput3 =document.querySelector('#data3');
        //this.dataInput4 =document.querySelector('#data4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    //Tworzenie inputow
    StatsApp.prototype.createInputs = function () {
        var quantity = +this.Inputsnumber.value;
        console.log(quantity);
        this.clearContent(); //Jezeli cos instnialo wczesniej - usuwa to.
        var _loop_1 = function (i) {
            input = document.createElement("input");
            input.type = "text";
            input.className = "data" + i;
            input.oninput = function () { };
            button = document.createElement("button");
            button.innerHTML = 'Delete';
            button.className = "delete" + i;
            button.onclick = function () {
                var inputDiv = document.querySelector('.input-data');
                var classname = document.querySelector('.delete' + i);
                var dataname = document.querySelector('.data' + i);
                var brname = document.querySelector('.br' + i);
                inputDiv.removeChild(classname);
                inputDiv.removeChild(dataname);
                inputDiv.removeChild(brname);
            };
            br = document.createElement('br');
            br.className = 'br' + i;
            this_1.dataDiv = document.querySelector('.input-data').appendChild(input);
            this_1.dataDiv = document.querySelector('.input-data').appendChild(button);
            this_1.dataDiv = document.querySelector('.input-data').appendChild(br);
        };
        var this_1 = this, input, button, br;
        for (var i = 1; i <= quantity; i++) {
            _loop_1(i);
        }
    };
    StatsApp.prototype.clearContent = function () {
        this.dataDiv = document.querySelector('.input-data');
        while (this.dataDiv.firstChild) {
            this.dataDiv.removeChild(this.dataDiv.firstChild);
        }
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        this.Inputsnumber.addEventListener('input', function () { return _this.createInputs(); });
        //this.dataInput1.addEventListener('input', () => this.computeData());
        //this.dataInput2.addEventListener('input', () => this.computeData());
        //this.dataInput3.addEventListener('input', () => this.computeData());
        //this.dataInput4.addEventListener('input', () => this.computeData());
        this.Inputs.addEventListener('keypress', function () { return _this.computeData(); });
        this.Inputs.addEventListener('click', function () { return _this.computeData(); });
    };
    StatsApp.prototype.computeData = function () {
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
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return StatsApp;
}());
var App = new StatsApp();
