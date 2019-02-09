let nextProductId = 1;

class Product {
    constructor(name, price, onSale, brand, img, category) {

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
        if (typeof category === 'string' && category.trim().length > 0) {
            this.category = category;
        }
        else {
            throw new Error('Invalid category input!');
        }
    }
}

class WithDisplay extends Product {
    constructor(name, price, onSale, brand, img, category, displaySize, resolution) {
        super(name, price, onSale, brand, img, category);

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
    constructor(name, price, onSale, brand, img, category, type) {
        super(name, price, onSale, brand, img, category);

        if (typeof type === 'string' && type.trim().length > 0) {
            this.type = type;
        }
        else {
            throw new Error('Invalid camera type input!');
        }
    }
}

class TV extends WithDisplay {
    constructor(name, price, onSale, brand, img, category, technology, displaySize, resolution) {
        super(name, price, onSale, brand, img, category, displaySize, resolution);

        if (typeof technology === 'string' && technology.trim().length > 0) {
            this.technology = technology;
        }
        else {
            throw new Error('Invalid technology input!');
        }
    }
}

class gamingConsole extends Product {
    constructor(name, price, onSale, brand, img, category, HDD, gameIncluded) {
        super(name, price, onSale, brand, img, category);

        if (typeof HDD === 'string' && HDD.trim().length > 0) {
            this.HDD = HDD;
        }
        else {
            throw new Error('Invalid HDD input!');
        }
        if (!(typeof gameIncluded === 'number')) {
            this.gameIncluded = gameIncluded;
        }
    }
}

class MobileDevice extends Product {
    constructor(name, price, onSale, brand, img, category, CPU, displaySize) {
        super(name, price, onSale, brand, img, category);

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
    constructor(name, price, onSale, brand, img, category, CPU, displaySize, builtInMemory, dualSIM) {
        super(name, price, onSale, brand, img, category, CPU, displaySize);

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
    constructor(name, price, onSale, brand, img, category, CPU, displaySize, displayType, resolution) {
        super(name, price, onSale, brand, img, category, CPU, displaySize);

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
    constructor(name, price, onSale, brand, img, category, displaySize, resolution, type) {
        super(name, price, onSale, brand, img, category, displaySize, resolution);

        if (typeof type === 'string' && type.trim().length > 0) {
            this.type = type;
        }
        else {
            throw new Error('Invalid camera type input!');
        }

    }
}

class GPS extends Product {
    constructor(name, price, onSale, brand, img, category, displaySize, maps) {
        super(name, price, onSale, brand, img, category);

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
    constructor(name, price, onSale, brand, img, category, dimensions, maxPower) {
        super(name, price, onSale, brand, img, category);

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
    constructor(name, price, onSale, brand, img, category, type, CPU, RAM, videoCard) {
        super(name, price, onSale, brand, img, category, type);

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
    constructor(name, price, onSale, brand, img, category, type, CPU, RAM, videoCard, displaySize, HDD) {
        super(name, price, onSale, brand, img, category, type, CPU, RAM, videoCard);
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
    constructor(name, price, onSale, brand, img, category, type) {
        super(name, price, onSale, brand, img, category, type);

    }
}

class USBMemory extends Product {
    constructor(name, price, onSale, brand, img, category, capacity) {
        super(name, price, onSale, brand, img, category);

        if (typeof capacity === 'string' && capacity.trim().length > 0) {
            this.capacity = capacity;
        }
        else {
            throw new Error('Invalid capacity input!');
        }
    }
}

class Microwave extends WithType {
    constructor(name, price, onSale, brand, img, category, type, capacityLiters, maxPower, grillPower) {
        super(name, price, onSale, brand, img, category, type);

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
    constructor(name, price, onSale, brand, img, category, maxPower) {
        super(name, price, onSale, brand, img, category);

        if (typeof maxPower === 'string' && maxPower.trim().length > 0) {
            this.maxPower = maxPower;
        }
        else {
            throw new Error('Invalid max Power input!');
        }
    }
}

class AirConditioner extends Product {
    constructor(name, price, onSale, brand, img, category, heatingPower, coolingPower) {
        super(name, price, onSale, brand, img, category);

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
    constructor(name, price, onSale, brand, img, category, type, maxPower) {
        super(name, price, onSale, brand, img, category, type);

        if (typeof maxPower === 'string' && maxPower.trim().length > 0) {
            this.maxPower = maxPower;
        }
        else {
            throw new Error('Invalid max Power input!');
        }
    }
}

class WashingMachine extends WithType {
    constructor(name, price, onSale, brand, img, category, type, capacity, energyClass) {
        super(name, price, onSale, brand, img, category, type);

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
    constructor(name, price, onSale, brand, img, category, type, height, colour) {
        super(name, price, onSale, brand, img, category, type);

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

var tv1 = new TV('KD-43XE7005', 899.00, false, 'Sony', 'TV1.jpg', 'Teлевизори', 'LED TV', 43, '4K ULTRA HD 3840 x 2160');
var tv2 = new TV('LT28E310EX', 359.00, false, 'SAMSUNG ', 'TV2.jpg', 'Teлевизори', 'LED TV+MONITOR', 27.5, 'HD READY 1366 x 768');

var console1 = new gamingConsole('PLAYSTATION 4 SLIM WHITE', 599, false, 'Sony', 'console1.jpg', 'Конзоли', '500GB', false);
var console2 = new gamingConsole('XBOX ONE S', 599, false, 'Microsoft', 'console2.jpg', 'Конзоли', '1TB', 'FORZA HORIZON 4');

var gsm1 = new GSM('GALAXY A9 A920F DS PINK', 999.00, false, 'Samsung', 'gsm1.jpg', 'Мобилни Телефони', '2.2GHz Quad + 1.8GHz Quad-Core', 6.30, '128 GB', true);
var gsm2 = new GSM('P20 LITE DS BLACK', 499.00, true, 'HUAWEI', 'gsm2.jpg', 'Мобилни Телефони', '2.36GHz Quad+1.7GHz Quad-Core', 5.84, '64 GB', false);

var tablet1 = new Tablet('YOGA 3', 399.00, true, 'Lenovo', 'tablet1.jpg', 'Таблети', '1.3 GHz Quad-Core', 8.0, 'IPS CAPACITIVE TOUCHSCREEN', '1280x800');
var tablet2 = new Tablet('MEDIAPAD M5', 829.00, false, 'HUAWEI', 'tablet2.jpg', 'Таблети', '2.1GHz Quad+1.8GHz Quad-Core', 10.8, 'IPS CAPACITIVE TOUCHSCREEN', '1600x2560');

var photoCamera1 = new Camera('EOS 750D', 1099.00, false, 'Canon', 'photoCamera1.jpg', 'Фотоапарати', 3.0, '24.0 MPx', 'DSLR фотоапарат');
var photoCamera1 = new Camera('EOS 2000D', 749.00, false, 'Canon', 'photoCamera2.jpg', 'Фотоапарати', 3.0, '24.0 MPx', 'DSLR фотоапарат');

var videoCamera1 = new Camera('HDR-CX625B', 799.00, false, 'Sony', 'videoCamera1.jpg', 'Видеокамери', 3.0, '9.2 MPx', 'HD видеокамера');
var videoCamera1 = new Camera('HC-VX1EP-K', 1549.00, true, 'Panasonic', 'videoCamera2.jpg', 'Видеокамери', 3.0, '4k', '4K видеокамера');

var gps1 = new GPS('DRIVESMART 51 EU', 459.00, true, 'Garmin', 'gps1.jpg', 'GPS Навигации', 5.0, 'Цяла Европа');
var gps2 = new GPS('NUVI 2585ТV', 299.00, false, 'Garmin', 'gps2.jpg', 'GPS Навигации', 5.0, 'Европа и България');

var carSpeaker1 = new CarSpeaker('GX402', 89.00, false, 'JBL', 'carSpeaker1.jpg', 'Говорители', '10 CM', ' 35 W');
var carSpeaker2 = new CarSpeaker('TS-WX306B', 279.00, false, 'PIONEER ', 'carSpeaker2.jpg', 'Говорители', '30 CM', ' 350 W');

var pc1 = new Computer('ASPIRE TC-780', 1149.00, false, 'Acer', 'pc1.jpg', 'Настолни Компютри', 'Настолен компютър', 'INTEL CORE I5-7400 3.0GHZ 6MB', '8GB DDR4', 'NVIDIA GEFORCE GT 1030 2 GB');
var pc2 = new Computer('IDEACENTRE 310-15IAP ', 549.00, true, 'LENOVO ', 'pc2.jpg', 'Настолни Компютри', 'Настолен компютър', 'INTEL PENTIUM J4205 1.5GHZ 2MB', '4GB DDR3', 'INTEL HD GRAPHICS 505');

var laptop1 = new Laptop('Ideapad 330', 1239.00, true, 'Lenovo', 'laptop1.jpg', 'Лаптопи', 'Лаптоп', 'INTEL CORE I5-8250U 1.60 - 3.40 GHz', '8GB DDR4', 'NVIDIA GEFORCE MX150', 15.6, '1000 GB');
var laptop2 = new Laptop('VivoBook X540NA', 679.00, false, 'ASUS', 'laptop2.jpg', 'Лаптопи', 'Лаптоп', ' INTEL CELERON N3350 1.10 - 2.40 GHz', '4GB DDR4', 'Вградена', 15.6, '1000 GB');

var accessory1 = new Accessory('M220 SILENT BK', 34.00, false, 'Logitech', 'mouse1.jpg', 'Мишки и Клавиатури', 'Мишка');
var accessory2 = new Accessory('MLA22BG/A', 239.00, false, 'Logitech', 'keyboard1.jpg', 'Мишки и Клавиатури', 'Клавиатура');

var usb1 = new USBMemory('ULTRA FIT/USB3.0', 30.00, false, 'Sandisk', 'memory1.jpg', 'USB Памет', '64 GB');

var microwave1 = new Microwave('MG23K3575AS', 249.00, false, 'Samsung', 'microwave1.jpg', 'Микровълнови Печки', 'Електронна Микровълнова Фурна', '23.00 L', ' 1250 W', '1100 W');
var vacuum1 = new Vacuum('FC9729/09', 249.00, false, 'Philips', 'vacuum1.jpg', 'Прахосмукачки', '650.0 W');
var airConditioner1 = new AirConditioner('AC242ACEAA', 599.00, false, 'Haier', 'airConditioner1.jpg', 'Климатици', '7.400 KW', '6.800 KW');
var heater1 = new Heater('SO 2330', 79.00, false, 'Rowenta', 'heater1.jpg', 'Отоплители', 'Вертикална', '2400.0 W');
var washingMachinve1 = new WashingMachine('8632 XB0B', 699.00, false, 'Beko', 'washingMachine1.jpg', 'Перални', 'Фронтално Зареждане', '8.0 kg', 'А+++');
var refrigerator1 = new Refrigerator('KSL 2814', 699.00, true, 'Liebherr', 'fridge1.jpg', 'Хладилници', 'Хладилник', '140.00 см', 'Сив');

// var promotions = new Map();

var promotions = [tv1, gsm1, tablet1, laptop1, photoCamera1];
var newProducts = [accessory2, tablet2, usb1, refrigerator1, gps1];



// promotions.set('Телевизори', tv1);
// promotions.set('Мобилни Телефони', gsm1);
// promotions.set('Таблети', tablet1);
// promotions.set('Лаптопи', laptop1);
// promotions.set('Фотоапарати', photoCamera1);
