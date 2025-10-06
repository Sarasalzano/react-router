import { useState, useEffect } from "react";

export default function CardProducts(){
   //setto variabile di stato dei prodotti come array vuoto
    const [products, setProducts] =useState([]);
    //chiamata axios per recuperare i prodotti da inserire nelle card
    useEffect(()=>{
            axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
        }, []);

    return(
        <div className="products-container">
            <div className="row">
                {products.map((product) => (
                <>   
                <div key={product.id} className="column">          
                    <div  className="img-wrapper">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <h3 className="item-title">{product.title}</h3>
                    <span className="item-price">€{product.price}</span>
                    <div className="reviews-container">
                        <span className="item-rate">({product.rating.count} reviews)</span>
                    </div>
                </div>
                </>
                ))}
            </div>
        </div>
    );
}