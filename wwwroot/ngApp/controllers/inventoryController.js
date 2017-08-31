class InventoryController {
    constructor() {
        this.message = "Search our Inventory:";
        this.cars = [
            { carId: 1, year: "2008", make: "Ford",       model: "F-150"   },
            { carId: 1, year: "1998", make: "Chevrolet",  model: "Camaro"  },
            { carId: 1, year: "2012", make: "Infinity",   model: "G37"     },
            { carId: 1, year: "2010", make: "Toyota",     model: "Corolla" },
            { carId: 1, year: "2015", make: "Dodge",      model: "Ram"     },
            { carId: 1, year: "2002", make: "Volkswagon", model: "Passat"  },
            { carId: 1, year: "2017", make: "Ferrari",    model: "488GTB"  }
        ];
        this.getCars();
    }

    getCars() {
        return this.cars;
    }
}