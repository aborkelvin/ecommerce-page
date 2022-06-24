import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/nav";
import Home from "./home";


function Routeswitch(){

    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path = '/' element = { <Home/> } />                
            </Routes>
        </BrowserRouter>
    )
}

export default Routeswitch;