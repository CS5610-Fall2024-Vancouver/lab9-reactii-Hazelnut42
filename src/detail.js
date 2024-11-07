import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Product not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-2xl font-bold text-green-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4">
            {product.description}
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold mb-2">Category:</p>
            <p className="capitalize">{product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;