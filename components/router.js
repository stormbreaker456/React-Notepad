import React from 'react';
import { Route, Routes } from "react-router-dom";
import {AddorEdit} from '../pages/AddorEdit';

import {Home} from '../pages/home';

export function Router() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddorEdit />} />
        <Route path="/edit/:id" element={<AddorEdit />} />
        <Route path="*" element={<div>404 not found!</div>} />
      </Routes>
    );
}

