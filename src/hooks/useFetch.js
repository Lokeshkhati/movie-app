// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     getData();
//   }, [url]);

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//       setError("");
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, loading, error };
// };

// export { useFetch };
