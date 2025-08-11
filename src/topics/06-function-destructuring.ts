interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "Ipad Air",
  price: 250.0,
};

//si una funcion tiene mas de 3 argumentos lo mejor es transformarla en un objeto.

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}
//desestructuración array
/* function taxCalculation(options: TaxCalculationOptions): [number, number] { */
/* function taxCalculation({tax ,products}: TaxCalculationOptions): [number, number] { no sirve si tienen muchas opciones*/
function taxCalculation(options: TaxCalculationOptions): [number, number] {
  const { products, tax } = options;
  let total = 0;
  //destructuramos product
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

//desestructuración array
const [total, taxResult] = taxCalculation({ products: shoppingCart, tax });

console.log("Total: ", total);
console.log("Total tax: ", taxResult);

export {};
