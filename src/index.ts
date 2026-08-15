const productName: string = "Laptop";
const price: number = 2800000;
const stock: number = 5;
const available: boolean = stock > 0;

console.log("Producto:", productName);
console.log("Precio:", price);
console.log("Stock:", stock);
console.log("Disponible:", available);

const categories: string[] = [
 "Computadores",
 "Monitores",
 "Accesorios"
];
const prices: number[] = [2800000, 850000, 80000];

const product: {
 id: number;
 name: string;
 price: number;
 stock: number;
 available: boolean;
} = {
 id: 1,
 name: "Laptop",
 price: 2800000,
 stock: 5,
 available: true
};

interface Product {
 id: number;
 name: string;
 price: number;
 stock: number;
 available: boolean;
}
const products: Product[] = [
 { id: 1, name: "Laptop", price: 2800000, stock: 5, available: true },
 { id: 2, name: "Monitor", price: 850000, stock: 8, available: true },
 { id: 3, name: "Mouse", price: 80000, stock: 0, available: false }
];

console.table(products);

