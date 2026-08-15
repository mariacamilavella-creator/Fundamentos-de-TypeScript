// ===== ETAPA 1: Tipos primitivos e inferencia =====
const productName: string = "Laptop";
const price: number = 2800000;
const stock: number = 5;
const available: boolean = stock > 0;

console.log("Producto:", productName);
console.log("Precio:", price);
console.log("Stock:", stock);
console.log("Disponible:", available);

// ===== ETAPA 2: Arrays y objetos tipados =====
const categories: string[] = [
 "Computadores",
 "Monitores",
 "Accesorios"
];
const prices: number[] = [2800000, 850000, 80000];

// ===== ETAPA 3: Interfaces =====
interface Product {
 id: number;
 name: string;
 description?: string;
 price: number;
 stock: number;
 available: boolean;
}

const products: Product[] = [
 { id: 1, name: "Laptop", description: "Equipo portatil de 16 GB de RAM", price: 2800000, stock: 5, available: true },
 { id: 2, name: "Monitor", price: 850000, stock: 8, available: true },
 { id: 3, name: "Mouse", price: 80000, stock: 0, available: false }
];

console.table(products);

// ===== ETAPA 4: Opcionales y type aliases =====
type ProductId = number;
const featuredProductId: ProductId = 1;

// ===== ETAPA 5: Union types =====
type OrderStatus =
 | "pending"
 | "paid"
 | "shipped"
 | "cancelled";

interface Customer {
 id: number;
 name: string;
 email: string;
 phone?: string;
}

interface OrderItem {
 productId: number;
 productName: string;
 unitPrice: number;
 quantity: number;
}

interface Order {
 id: number;
 customer: Customer;
 items: OrderItem[];
 status: OrderStatus;
 total: number;
}

// ===== ETAPA 6: Funciones tipadas =====
function calculateSubtotal(
 unitPrice: number,
 quantity: number
): number {
 return unitPrice * quantity;
}

function calculateOrderTotal(items: OrderItem[]): number {
 return items.reduce(
  (total, item) => total + item.unitPrice * item.quantity,
  0
 );
}

function findProductById(
 products: Product[],
 id: number
): Product | undefined {
 return products.find((product) => product.id === id);
}

function updateStock(product: Product, quantity: number): Product {
 if (quantity <= 0) {
  throw new Error("Quantity must be greater than zero");
 }
 if (quantity > product.stock) {
  throw new Error("Insufficient stock");
 }
 const newStock = product.stock - quantity;
 return {
  ...product,
  stock: newStock,
  available: newStock > 0
 };
}

// Reto: hasStock
function hasStock(product: Product, quantity: number): boolean {
 return quantity > 0 && quantity <= product.stock;
}

// ===== Pruebas de la Etapa 6 =====
console.log("Total del pedido:", calculateOrderTotal([
 { productId: 1, productName: "Laptop", unitPrice: 2800000, quantity: 1 }
]));

const found = findProductById(products, 2);
console.log("Producto encontrado:", found);

const laptop = findProductById(products, 1);
if (laptop) {
 console.log("Stock actualizado:", updateStock(laptop, 2));
}

console.log("¿Hay stock para 3 laptops?", hasStock(products[0], 3));
console.log("¿Hay stock para 10 laptops?", hasStock(products[0], 10));