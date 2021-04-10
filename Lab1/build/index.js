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
        this.dataInput1 = document.querySelector('#data1');
        this.dataInput2 = document.querySelector('#data2');
        this.dataInput3 = document.querySelector('#data3');
        this.dataInput4 = document.querySelector('#data4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        this.dataInput1.addEventListener('input', function () { return _this.computeData(); });
        this.dataInput2.addEventListener('input', function () { return _this.computeData(); });
        this.dataInput3.addEventListener('input', function () { return _this.computeData(); });
        this.dataInput4.addEventListener('input', function () { return _this.computeData(); });
    };
    StatsApp.prototype.computeData = function () {
        var data1 = +this.dataInput1.value;
        var data2 = +this.dataInput2.value;
        var data3 = +this.dataInput3.value;
        var data4 = +this.dataInput4.value;
        var sum = data1 + data2 + data3 + data4;
        var avg = sum / 4;
        var min = Math.min(data1, data2, data3, data4);
        var max = Math.max(data1, data2, data3, data4);
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
