// abstract 
abstract class Car{
    abstract start(): void;
    abstract stop(): void;
}

class MyCar extends Car{
    start(): void {
        console.log("Car Starting... ");
    }
    stop(): void {
        console.log("Car stoped...");
    }
}

const car1 = new MyCar();
car1.start();