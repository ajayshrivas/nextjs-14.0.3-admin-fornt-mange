
import Link from "next/link";
async function getMovies() {

   // let res = await fetch(
   //   'https://jsonplaceholder.typicode.com/posts'
   // );
   // console.log(res);
   // await new Promise((resolve) => setTimeout(resolve, 2000));
   // return res.json();
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   await new Promise((resolve) => setTimeout(resolve, 2000));
   const results = await res.json();
   return results;
 }
 
 async function Trending() {
      let results = await  getMovies();
      //console.log(results);
      return (
         <div>
            <h3>Movies</h3>
            {results &&
               results.map((index) => {
               return <li>{index.title}</li>;
               })}
         </div>
      );
 }
 
export default function Dashboard(){
   
   return(
      <>
      <h1>Dashboard Layout</h1>
      <Trending/>
      </>
    );
}