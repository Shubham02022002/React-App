import { useRouteError } from "react-router-dom";
import errImg from "../../images/error.webp";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <>
        <h1>Oops!!</h1> 
        <h2>Something went wrong..</h2>
        <img className="errorImg" src={errImg}></img>
        <h1>{err.status+ " "+err.statusText}</h1>
        </>
    )
}
export default Error;