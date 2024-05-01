import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../index.css'
import '../output.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home.jsx";
import * as PropTypes from "prop-types";
import Tickets from "./Tickets.jsx";


Tickets.propTypes = {children: PropTypes.node};
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
        </Routes>
    </BrowserRouter>,
)
