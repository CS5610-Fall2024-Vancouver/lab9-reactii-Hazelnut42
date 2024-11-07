import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostFetch = () => {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      
      <div className="grid gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4">
            <Link 
              to={`/${product.id}`}
              className="block hover:bg-gray-50 transition duration-150"
            >
              <h2 className="text-xl font-bold text-blue-600 hover:text-blue-800">
                {product.title}
              </h2>
              <div className="flex items-center mt-2">
                <p className="text-lg font-semibold text-gray-700">
                  ${product.price}
                </p>
                <span className="text-blue-600 ml-2">
                  Click for details →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFetch;