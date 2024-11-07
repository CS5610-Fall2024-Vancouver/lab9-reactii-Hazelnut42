import { useEffect, useState } from 'react';

const DogImageFetcher = () => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      <h2>Random Dog Image</h2>
      {dogImage && (
        <img 
          src={dogImage}
          alt="random dog"
          style={{ maxWidth: '500px', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default DogImageFetcher;