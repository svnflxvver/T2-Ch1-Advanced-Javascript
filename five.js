class Car{
    constructor(brandName, makeYear, countryMade){
        this.brandName = brandName;
        this.makeYear = makeYear;
        this.countryMade = countryMade;
    }

    carAge(){
        let age;
        age = 2023 - this.makeYear;
        return age;
    }

    isMadeUS(){
        if (this.countryMade === "US"){
            return true;
        };
        return false;
    }
}

let newCar = new Car("Honda", "2019", "Japan");
console.log(newCar.carAge());
console.log(newCar.isMadeUS());