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