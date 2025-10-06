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
        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="card">
                        {products.map((product) => (
                        <>                        
                        <div key={product.id} className="img-wrapper">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="item-title">{product.title}</div>
                        <div className="item-price">{product.price}</div>
                        <div className="item-description">{product.description}</div>
                        <div className="item-rate">{product.rating.rate} ({product.rating.count} reviews)</div>
                        </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}