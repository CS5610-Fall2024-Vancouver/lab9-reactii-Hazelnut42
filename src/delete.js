import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Delete = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      
      <div className="space-y-4">
        {products.map(product => (
          <div key={product.id} className="flex justify-between items-center p-4 border rounded">
            <div className="flex-1">
              <Link 
                to={`/product/${product.id}`} 
                className="text-lg font-semibold hover:text-blue-600"
              >
                {product.title}
              </Link>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
            <button
              onClick={() => deleteProduct(product.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delete;