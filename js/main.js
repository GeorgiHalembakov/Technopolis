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

class TV extends Product {
    constructor(name, price, onSale, brand, img, technology, displaySize, resolution) {
        super(name, price, onSale, brand, img);
        if (typeof technology === 'string' && technology.trim().length > 0) {
            this.technology = technology;
        }
        else {
            throw new Error('Invalid technology input!');
        }
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