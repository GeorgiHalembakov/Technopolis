class Product {
    constructor(name, price, onSale, brand, img) {

        if (typeof name === 'string' && name.trim().length > 0) {
            this.name = name;
        }
        else {
            throw new Error('Invalid name input!');
        }
        if (typeof price === 'number' && price > 0) {
            this.price = price;
        }
        else {
            throw new Error('Invalid price input!');
        }
        if (typeof onSale === 'boolean') {
            this.onSale = onSale;
        }
        else {
            throw new Error('Invalid onSale input!');
        }
        if (typeof brand === 'string' && brand.trim().length > 0) {
            this.brand = brand;
        }
        else {
            throw new Error('Invalid brand input!');
        }
        if (typeof img === 'string' && img.trim().length > 0) {
            this.img = img;
        }
        else {
            throw new Error('Invalid image input!');
        }

    }
}

class WithDisplay extends Product {
    constructor(name, price, onSale, brand, img, displaySize, resolution) {
        super(name, price, onSale, brand, img);

        if (typeof displaySize === 'number' && displaySize > 0) {
            this.displaySize = displaySize;
        }
        else {
            throw new Error('Invalid display size input!');
        }
        if (typeof resolution === 'string' && resolution.trim().length > 0) {
            this.resolution = resolution;
        }
        else {
            throw new Error('Invalid resolution input!');
        }
    }
}

class WithType extends Product {
    constructor(name, price, onSale, brand, img, type) {
        super(name, price, onSale, brand, img);

        if (typeof type === 'string' && type.trim().length > 0) {
            this.type = type;
        }
        else {
            throw new Error('Invalid camera type input!');
        }
    }
}

class TV extends WithDisplay {
    constructor(name, price, onSale, brand, img, technology, displaySize, resolution) {
        super(name, price, onSale, brand, img, displaySize, resolution);

        if (typeof technology === 'string' && technology.trim().length > 0) {
            this.technology = technology;
        }
        else {
            throw new Error('Invalid technology input!');
        }
    }
}

class Console extends Product {
    constructor(name, price, onSale, brand, img, HDD, gameIncluded) {
        super(name, price, onSale, brand, img);

        if (typeof HDD === 'string' && HDD.trim().length > 0) {
            this.HDD = HDD;
        }
        else {
            throw new Error('Invalid HDD input!');
        }
        if (typeof gameIncluded === 'boolean') {
            if (gameIncluded) {
                this.gameIncluded = '';
            }
            else {
                this.gameIncluded = gameIncluded;
            }
        }
        else {
            throw new Error('Invalid bonus game input!');
        }
    }
}

class MobileDevice extends Product {
    constructor(name, price, onSale, brand, img, CPU, displaySize) {
        super(name, price, onSale, brand, img);

        if (typeof CPU === 'string' && CPU.trim().length > 0) {
            this.CPU = CPU;
        }
        else {
            throw new Error('Invalid CPU input!');
        }
        if (typeof displaySize === 'number' && displaySize > 0) {
            this.displaySize = displaySize;
        }
        else {
            throw new Error('Invalid display size input!');
        }
    }
}

class GSM extends MobileDevice {
    constructor(name, price, onSale, brand, img, CPU, displaySize, builtInMemory, dualSIM) {
        super(name, price, onSale, brand, img, CPU, displaySize);

        if (typeof builtInMemory === 'string' && builtInMemory.trim().length > 0) {
            this.builtInMemory = builtInMemory;
        }
        else {
            throw new Error('Invalid built-in memory input!');
        }
        if (typeof dualSIM === 'boolean') {
            this.dualSIM = dualSIM;
        }
        else {
            throw new Error('Invalid dual SIM input!');
        }
    }
}

class Tablet extends MobileDevice {
    constructor(name, price, onSale, brand, img, CPU, displaySize, displayType, resolution) {
        super(name, price, onSale, brand, img, CPU, displaySize);

        if (typeof displayType === 'string' && displayType.trim().length > 0) {
            this.displayType = displayType;
        }
        else {
            throw new Error('Invalid display type input!');
        }
        if (typeof resolution === 'string' && resolution.trim().length > 0) {
            this.resolution = resolution;
        }
        else {
            throw new Error('Invalid resolution input!');
        }
    }
}

class Camera extends WithDisplay {
    constructor(name, price, onSale, brand, img, displaySize, resolution, type) {
        super(name, price, onSale, brand, img, displaySize, resolution);

        if (typeof type === 'string' && type.trim().length > 0) {
            this.type = type;
        }
        else {
            throw new Error('Invalid camera type input!');
        }

    }
}

class GPS extends Product {
    constructor(name, price, onSale, brand, img, displaySize, maps) {
        super(name, price, onSale, brand, img);

        if (typeof displaySize === 'number' && displaySize > 0) {
            this.displaySize = displaySize;
        }
        else {
            throw new Error('Invalid displaySize input!');
        }
        if (typeof maps === 'string' && maps.trim().length > 0) {
            this.maps = maps;
        }
        else {
            throw new Error('Invalid maps input!');
        }

    }
}

class CarSpeaker extends Product {
    constructor(name, price, onSale, brand, img, dimensions, maxPower) {
        super(name, price, onSale, brand, img);

        if (typeof dimensions === 'number' && dimensions > 0) {
            this.dimensions = dimensions;
        }
        else {
            throw new Error('Invalid dimensions input!');
        }
        if (typeof maxPower === 'string' && maxPower.trim().length > 0) {
            this.maxPower = maxPower;
        }
        else {
            throw new Error('Invalid max-power input!');
        }

    }
}

class Computer extends WithType {
    constructor(name, price, onSale, brand, img, type, CPU, RAM, videoCard) {
        super(name, price, onSale, brand, img, type);

        if (typeof CPU === 'string' && CPU.trim().length > 0) {
            this.CPU = CPU;
        }
        else {
            throw new Error('Invalid CPU input!');
        }
        if (typeof RAM === 'string' && RAM.trim().length > 0) {
            this.RAM = RAM;
        }
        else {
            throw new Error('Invalid RAM input!');
        }
        if (typeof videoCard === 'string' && videoCard.trim().length > 0) {
            this.videoCard = videoCard;
        }
        else {
            throw new Error('Invalid video card input!');
        }

    }
}

class Accessory extends WithType {
    constructor(name, price, onSale, brand, img, type) {
        super(name, price, onSale, brand, img, type);

    }
}

class USBMemory extends Product {
    constructor(name, price, onSale, brand, img, capacity) {
        super(name, price, onSale, brand, img);

        if (typeof capacity === 'string' && capacity.trim().length > 0) {
            this.capacity = capacity;
        }
        else {
            throw new Error('Invalid capacity input!');
        }
    }
}

class Microwave extends Product {
    constructor(name, price, onSale, brand, img, capacityLiters, maxPower, grillPower) {
        super(name, price, onSale, brand, img);

        if (typeof capacityLiters === 'number' && capacityLiters > 0) {
            this.capacityLiters = capacityLiters;
        }
        else {
            throw new Error('Invalid capacity input!');
        }
        if (typeof maxPower === 'string' && maxPower.trim().length > 0) {
            this.maxPower = maxPower;
        }
        else {
            throw new Error('Invalid max Power input!');
        }
        if (typeof grillPower === 'string' && grillPower.trim().length > 0) {
            this.grillPower = grillPower;
        }
        else {
            throw new Error('Invalid grill Power input!');
        }

    }
}

class Vacuum extends Product {
    constructor(name, price, onSale, brand, img, maxPower) {
        super(name, price, onSale, brand, img);

        if (typeof maxPower === 'string' && maxPower.trim().length > 0) {
            this.maxPower = maxPower;
        }
        else {
            throw new Error('Invalid max Power input!');
        }
    }
}

class AirConditioner extends Product {
    constructor(name, price, onSale, brand, img, heatingPower, coolingPower) {
        super(name, price, onSale, brand, img);

        if (typeof heatingPower === 'string' && heatingPower.trim().length > 0) {
            this.heatingPower = heatingPower;
        }
        else {
            throw new Error('Invalid heatingPower input!');
        }
        if (typeof coolingPower === 'string' && coolingPower.trim().length > 0) {
            this.coolingPower = coolingPower;
        }
        else {
            throw new Error('Invalid coolingPower input!');
        }
    }
}

class Heater extends WithType {
    constructor(name, price, onSale, brand, img, type, maxPower) {
        super(name, price, onSale, brand, img, type);

        if (typeof maxPower === 'string' && maxPower.trim().length > 0) {
            this.maxPower = maxPower;
        }
        else {
            throw new Error('Invalid max Power input!');
        }
    }
}

class WashingMachine extends WithType {
    constructor(name, price, onSale, brand, img, type, capacity, energyClass) {
        super(name, price, onSale, brand, img, type);

        if (typeof capacity === 'string' && capacity.trim().length > 0) {
            this.capacity = capacity;
        }
        else {
            throw new Error('Invalid capacity input!');
        }
        if (typeof energyClass === 'string' && energyClass.trim().length > 0) {
            this.energyClass = energyClass;
        }
        else {
            throw new Error('Invalid energyClass input!');
        }
    }
}

class Refrigerator extends WithType {
    constructor(name, price, onSale, brand, img, type, height, colour) {
        super(name, price, onSale, brand, img, type);

        if (typeof height === 'string' && height.trim().length > 0) {
            this.height = height;
        }
        else {
            throw new Error('Invalid height input!');
        }
        if (typeof colour === 'string' && colour.trim().length > 0) {
            this.colour = colour;
        }
        else {
            throw new Error('Invalid colour input!');
        }
    }
}
