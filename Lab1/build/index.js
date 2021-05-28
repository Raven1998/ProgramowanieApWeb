var StatsApp = /** @class */ (function () {
    //Konstruktor
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.createInputs();
        this.watchInputValues();
    };
    //Query selectory do inputów
    StatsApp.prototype.getInputs = function () {
        this.Inputsnumber = document.querySelector('#inputs');
        this.Inputs = document.querySelector('.input-data');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    //Tworzenie inputow
    StatsApp.prototype.createInputs = function () {
        var quantity = +this.Inputsnumber.value;
        this.clearContent(); //Jezeli cos instnialo wczesniej - usuwa to.
        var _loop_1 = function (i) {
            input = document.createElement("input");
            input.type = "number";
            input.className = "data" + i;
            input.value = "0";
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
        this.watchInputValues();
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
        this.Inputs.addEventListener('click', function () { return _this.computeData(); }); // Klikniecie delete 
        //Dodanie w petli event listenerow 
        var itemsnumber = document.querySelector('.input-data').childElementCount;
        for (var i = 0; i < itemsnumber; i++) {
            this.Inputs.children[i].addEventListener('input', function () { return _this.computeData(); });
        }
    };
    StatsApp.prototype.computeData = function () {
        var itemsnumber = document.querySelector('.input-data').childElementCount; //Liczba elementow uwzgledniajaca takze bry i delete buttony
        var itemstable = [];
        for (var i = 0; i < itemsnumber; i++) {
            itemstable[i] = this.Inputs.children[i].value;
        }
        var sum = 0;
        var min = 0;
        var max = 0;
        for (var i = 0; i < itemstable.length;) {
            var numberelement = parseInt(itemstable[i]);
            if (i == 0) {
                min = numberelement;
                max = numberelement;
            }
            if (min > numberelement) {
                min = numberelement;
            }
            if (max < numberelement) {
                max = numberelement;
            }
            sum = sum + numberelement;
            i = i + 3;
        }
        var avg = sum / (itemstable.length / 3);
        this.showStats(sum, avg, min, max);
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
