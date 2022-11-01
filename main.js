/*var MyCar = new car("Ford", "Escort", 1997,50);
function car(vendor, model, year,sredskor) {
  this.vendor = vendor;
 this.model = model;
 this.year = year;
  this.sredskor =sredskor;
}
print:  function () {
        document.write('<p>'${car.vendor} '</p>');
        document.write('<p>'${car.model}'</p>');
        document.write('<p>'${car.year}'</p>');
        document.write('<p>'${car.sredskor}'</p>');
    };
    TimeFromDistance: function (distance) {
        let result = distance / car.mediumsredskor;
        let relax = 0;
        result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)
        for (let hour = 1; hour <= result; hour++) {
            if (hour % 5 == 0) {
                relax++;
                result++;
            }
        }
        result = result.toFixed(2).split(".");
        if (relax == 0) {
            document.write(Что бы пройти эту дистанцию: ${distance} km. Вам нужно - ${result[0]}h. ${result[1]}m. И вам не понадобится отдых.);
        } else {
            document.write(Что бы пройти эту дистанцию: ${distance} km. Вам нужно - ${result[0]}h. ${result[1]}m. <br>${relax}h. Вы потратили на отдых.);
 
        }
    }
}*/




/*function Fraction(upNumber,downNumber){
    return {upNumber:upNumber, downNumber:downNumber};
}
let firstNumber = Fraction(5,10);
let secondNumber = Fraction(2,15);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.upNumber * obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    alert(`${resultUpNumber}/${resultDownNumber}`);
}
multiFraction(firstNumber,secondNumber);
 
 
 
car.print();
car.TimeFromDistance(800);*/



/*var date = new Date();

alert(date.getMilliseconds()); 
alert(date.getSeconds()); 
alert(date.getMinutes());
alert(date.getHours()); 
alert(date.getDate());
alert(date.getMonth()); 
alert(date.getFullYear());*/