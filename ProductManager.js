//Curso Programación Backend 47275   
//Primer Desafío Entregable
//Daniel Andrade

class ProductManager {
    constructor() {
      this.products = []; // Arreglo para almacenar los productos
      this.productIdCounter = 1; // Contador para generar IDs autoincrementables
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title ||
          !description ||
          !price ||
          !thumbnail ||
          !code ||
          !stock
          )
      {
        throw new Error("Todos los campos son obligatorios.");
      }
  
      // Verificar si el código ya existe en algún producto
      const existingProduct = this.products.find(
        (product) => product.code === code
        );
      if (existingProduct) {
        throw new Error("El código del producto ya está en uso.");
      }
  
      // Crear un nuevo producto con un ID autoincrementable
      const newProduct = {
        id: this.productIdCounter,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      };
  
      // Incrementar el contador de IDs
      this.productIdCounter++;
  
      // Agregar el nuevo producto al arreglo de productos
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(productId) {
      // Buscar el producto por ID
      const product = this.products.find((product) => product.id === productId);
  
      // Si no se encuentra el producto, mostrar un error en la consola
      if (!product) {
        console.error("Producto no encontrado.");
      }
  
      return product;
    }
  }
  
  // Crear una instancia de ProductManager
  const manager = new ProductManager();
  
  // Agregar productos
  try {
    manager.addProduct("Producto 1", "Descripción del producto 1", 100, "imagen1.jpg", "code1", 10);
    manager.addProduct("Producto 2", "Descripción del producto 2", 200, "imagen2.jpg", "code2", 5);
    manager.addProduct("Producto 3", "Descripción del producto 3", 150, "imagen3.jpg", "code3", 8);
  } catch (error) {
    console.error("Error al agregar producto:", error.message);
  }
  
  // Obtener y mostrar todos los productos
  const allProducts = manager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  // Obtener un producto por ID
  const productId = 2;
  const productById = manager.getProductById(productId);
  console.log("Producto con ID", productId, ":", productById);
  
  // Intentar obtener un producto por un ID inexistente
  const nonExistentProductId = 99;
  const nonExistentProduct = manager.getProductById(nonExistentProductId);
  