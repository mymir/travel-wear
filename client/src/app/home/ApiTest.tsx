// 'use client'

// import Container from '@mui/material/Container';
// import { useEffect, useRef } from 'react';

// export default function ApiTest() {
//     const didFetchRef = useRef(false);

//     useEffect(() => {
//         if(!didFetchRef.current){
//             didFetchRef.current = true;
//             fetchData();
//         }
//     }, [])

//     async function fetchData() {
//         const res = await fetch('http://localhost:8080/api/products/1');
//         // console.log(res.text());
//         const json = await res.json();
//         console.log(json.name);
//     }

//     return (
//         <Container maxWidth={false} sx={{ pt: 2 }} >
//             TEST TEST TEST
//         </Container>
//     )
// }