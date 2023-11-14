import React from 'react'
import productStyle from "./product.module.css";
import outsideCss from "../../style/outside.module.css";
import NonRouteComponent from "../../components/dummy";


/**
 * used for generating different metaData for the page
 * i.e. -- title and description (these are used for SEO)
 */
// export function generateMetaData({params}){
//     return {
//         title: "Product Page",
//         description: "This is product list page"
//     }
// }

// this is working
export const metadata = {
    title: 'Product Page',
    description: 'This is product list page',
  }
async function Products() {
    async function getproducts(){
        let data =  await fetch("https://dummyjson.com/products");
         let res=   await data.json();
         return res.products;
    }
    const products = await getproducts();
  return (
    <div>
        {/* <h1 className={productStyle.list}> This is product List</h1>
        <h3 className = {outsideCss.list}>Implement Outside Css</h3>
        <ul>
      {Array.isArray(products) && products.map((product, index)=> {
        return <li key = {`product-${index}`}>{product.title}</li>
      })}
      </ul>
      <h2 className={productStyle.listend}> List end</h2> */}
      <h1>Hello</h1>
      <NonRouteComponent/>
    </div>
  )
}

export default Products


