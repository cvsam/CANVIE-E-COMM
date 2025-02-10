// // src/Products.js
// import React, { useEffect, useState } from "react";
// import { db } from "../services/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const productList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setProducts(productList);
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container px-10 p-6">
//       <h1 className="text-3xl font-bold text-center mb-5">Hot deals🔥</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {products.map(product => (
//           <div key={product.id} className="bg-white hover:shadow-2xl rounded-xl p-4 border border-blue-800">
//             <img src={product.imageURL} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
            
//             <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
//             <p className="text-gray-600 text-sm">{product.description}</p>
//             <p className="text-blue-800 font-bold text-lg mt-2">${product.price}</p>
//             <button className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-600 transition">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

// src/Products.js
import { useEffect, useState } from "react";
import { db } from "../services/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productList);
    }, (error) => {
      console.error("Error fetching products: ", error);
    });
    
    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(productList); // Debugging line
      setProducts(productList);
    }, (error) => {
      console.error("Error fetching products: ", error);
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <div className="container px-10 p-6">
      <h1 className="text-3xl font-bold text-center mb-5">Hot deals🔥</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map(product => (
          <div key={product.id} className="bg-white hover:shadow-2xl rounded-xl p-4 border border-blue-800">
            <img src={product.imageURL} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
            
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

