import NavBarList from "./pages/home/compose/nav";
import Footer from "./pages/home/compose/footer";
import Home from "./pages/home/Home";
import Auth from "./pages/login/auth";
import { Routes, Route, Link } from "react-router-dom";
import './app.css';
import Product from "./pages/home/compose/commodity";


function App() {
    return (
        <div>
            <NavBarList />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/auth" element={<Auth />}/>
                </Routes>
            <Footer />
        </div>
    )
}

export default App;