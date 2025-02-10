import { useEffect, useState } from "react";
import { db } from "../services/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const productList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      },
      (error) => {
        console.error("Error fetching products: ", error);
      }
    );

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 bg-primary">
      <h1 className="text-3xl font-bold text-center mb-5">Hot Deals 🔥</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg hover:shadow-2xl rounded-xl p-4 border border-blue-800 transition transform hover:scale-105"
          >
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full min-h-[250px] object-contain rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-blue-800 font-bold text-lg mt-2">${product.price}</p>
            <button className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
