// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./header/header.jsx";
import {Home} from "./main/home/home.jsx";
import {Footer} from "./footer/footer.jsx";


export default function App() {
    return (
        <div>
            <Header/>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
    );
}

