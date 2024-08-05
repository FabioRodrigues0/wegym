// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./header/header.jsx";
import {Home} from "./main/home/home.jsx";
import {Training} from "./main/training/training.jsx";
import { Instructors } from "./main/instructors/instructors.jsx";
import { Gallery } from "./main/gallery/gallery.jsx";
import { Contacts } from "./main/contacts/contacts.jsx";
import {Footer} from "./footer/footer.jsx";
import "./App.css";
import Subscriptions from "./main/subscriptions/subscriptions.jsx";


export default function App() {
    return (
        <div>
            <Header/>
            <div id="body-content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/subcriptions" element={<Subscriptions />}/>
                        <Route path="/training" element={<Training />}/>
                        <Route path="/instructors" element={<Instructors />}/>
                        <Route path="/gallery" element={<Gallery />}/>
                        <Route path="/contacts" element={<Contacts />}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
    );
}