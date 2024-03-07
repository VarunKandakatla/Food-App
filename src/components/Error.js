import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    return <>
    <h1>{err.status}-{err.statusText}</h1>
    <h2>Something Went Wrong Varin</h2>
    <img src = 'https://img.freepik.com/free-vector/page-found-illustration_68196-2493.jpg?size=626&ext=jpg'></img>
    </>
}

export default Error;