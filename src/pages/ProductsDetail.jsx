//import useprarams per leggere parametri dinamici dall'url
import { useParams } from "react-router-dom";

export default function ProductsDetail(){
//recuperiamo id
const {id} =useParams();


    return(
        <h2>id prodotto: {id}</h2>
    )
}