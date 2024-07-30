// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./header/header.jsx";
import {Home} from "./main/home/home.jsx";
import {Training} from "./main/training/training.jsx";
import {Footer} from "./footer/footer.jsx";


export default function App() {
    return (
        <div>
            <Header/>
            <div id="body-content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/training" element={<Training />}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
    );
};