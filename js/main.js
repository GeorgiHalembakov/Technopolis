let nextProductId = 1;

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
            this.Id = nextProductId++;
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

class gamingConsole extends Product {
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

        if (typeof dimensions === 'string' && dimensions.trim().length > 0) {
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

class Laptop extends Computer {
    constructor(name, price, onSale, brand, img, type, CPU, RAM, videoCard, displaySize, HDD) {
        super(name, price, onSale, brand, img, type, CPU, RAM, videoCard);
        if (typeof displaySize === 'number' && displaySize > 0) {
            this.displaySize = displaySize;
        }
        else {
            throw new Error('Invalid display size input!');
        }
        if (typeof HDD === 'string' && HDD.trim().length > 0) {
            this.HDD = HDD;
        }
        else {
            throw new Error('Invalid HDD input!');
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

class Microwave extends WithType {
    constructor(name, price, onSale, brand, img, type, capacityLiters, maxPower, grillPower) {
        super(name, price, onSale, brand, img, type);

        if (typeof capacityLiters === 'string' && capacityLiters.trim().length > 0) {
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

var tv1 = new TV('KD-43XE7005', 899.00, false, 'Sony', 'images\products\TV1.jpg', 'LED TV', 43, '4K ULTRA HD 3840 x 2160');
var console1 = new gamingConsole('PLAYSTATION 4 SLIM WHITE', 599, false, 'Sony', 'images\products\console1.jpg', '500GB', false);
var gsm1 = new GSM('GALAXY A9 A920F DS PINK', 999.00, false, 'Samsung', 'images\products\gsm1.jpg', '2.2GHz Quad + 1.8GHz Quad-Core', 6.30, '128 GB', true);
var tablet1 = new Tablet('YOGA 3', 399.00, true, 'Lenovo', 'images\products\tablet1.jpg', '1.3 GHz Quad-Core', 8.0, 'IPS CAPACITIVE TOUCHSCREEN', '1280x800');
var photoCamera1 = new Camera('EOS 750D', 1099.00, false, 'Canon', 'images\products\photoCamera1.jpg', 3.0, '24.0 MPx', 'DSLR фотоапарат');
var videoCamera1 = new Camera('HDR-CX625B', 799.00, false, 'Sony', 'images\products\videoCamera1.jpg', 3.0, '9.2 MPx', 'HD видеокамера');
var gps1 = new GPS('DRIVESMART 51 EU', 459.00, true, 'Garmin', 'images\products\gps1.jpg', 5.0, 'Цяла Европа');
var carSpeaker1 = new CarSpeaker('GX402', 89.00, false, 'JBL', 'images\products\carSpeaker1.jpg', '10 CM', ' 35 W');
var pc1 = new Computer('ASPIRE TC-780', 1149.00, false, 'Acer', 'images\products\pc1.jpg', 'Настолен компютър', 'INTEL CORE I5-7400 3.0GHZ 6MB', '8 GB DDR4', 'NVIDIA GEFORCE GT 1030 2 GB');
var laptop1 = new Laptop('Ideapad 330', 1239.00, true, 'Lenovo', 'images\products\laptop1.jpg', 'Лаптоп', 'INTEL CORE I5-8250U 1.60 - 3.40 GHz', '8 GB DDR4', 'NVIDIA GEFORCE MX150', 15.6, '1000 GB');
var accessory1 = new Accessory('M220 SILENT BK', 34.90, false, 'Logitech', 'images\products\mouse1.jpg', 'Мишка');
var usb1 = new USBMemory('ULTRA FIT/USB3.0', 30.00, false, 'Sandisk', 'images\products\memory1.jpg', '64 GB');
var microwave1 = new Microwave('MG23K3575AS', 249.00, false, 'Samsung', 'images\products\microwave1.jpg', 'Електронна Микровълнова Фурна', '23.00 L', ' 1250 W', '1100 W');
var vacuum1 = new Vacuum('FC9729/09', 249.00, false, 'Philips', 'images\products\vacuum1.jpg', '650.0 W');
var airConditioner1 = new AirConditioner('AC242ACEAA', 599.00, false, 'Haier', 'images\products\airConditioner1.jpg', '7.400 KW', '6.800 KW');
var heater1 = new Heater('SO 2330', 79.00, false, 'Rowenta', 'images\products\heater1.jpg', 'Вертикална', '2400.0 W');
var washingMachinve1 = new WashingMachine('8632 XB0B', 699.00, false, 'Beko', 'images\products\washingMachine1.jpg', 'Фронтално Зареждане', '8.0 kg', 'А+++');
var refrigerator1 = new Refrigerator('KSL 2814', 699.00, true, 'Liebherr', 'images\products\fridge1.jpg', 'Хладилник с една врата', '140.00 см', 'Сив');




// homepage slider
$('.homepage-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true
});