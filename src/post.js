import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...newProduct,
          price: Number(newProduct.price)
        })
      });

      const data = await response.json();
      setProducts([...products, data]);
      
      setNewProduct({
        title: '',
        price: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={addProduct} className="space-y-4">
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Product
          </button>
        </form>
      </div>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;