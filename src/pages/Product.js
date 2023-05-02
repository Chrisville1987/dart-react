// import React, { usesEffect, useState} from 'react'

// const prodcuct = () => {
//     // state for saving the fetched data
//     const [data, setData] = useState(null);
//     // state to image the loading Stage 
//     const [loading,setLoading] = useState(true)
//     // state to manage the error due to fetching
//     const [error, setError] = useState(null);

// const [stockImg, setImage] = ueseState([]);
// const endpoint = "https://dummyjson.com/projects"
// const endpoint_new = "https://fakestoreapi.com/products";

// usesEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch(endpoint);
//             const result = await response.json();
//             console.log(result);
//             // we must prepare a state to store the data upon  return.
//             setData(result.products);
//         } catch (error) {
//             console.log("error",error);
//         }
//     };
//         fetchData();
//     }, [])
//     return (
//         <div>
//             {
//                 !data ? <p>Loading...</p> : (
//                     <div>products
//                         <h2>{data[0].title}</h2>
//                         <p>{data[0].description}</p>
//                         <img src={data[0].image} alt="product image" />
//                         <p>{data[0].category}</p>
//                     </div>
//                 )
                
//             }
//         </div>
//     )


// }