import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Register } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const RoutesMain = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const tokenLocal = localStorage.getItem("@TOKEN");
    const [token, setToken] = useState(tokenLocal ? tokenLocal : "");

    const userLogout = () => {
        setUser(null);
        storage.clear();
        navigate("/");
      };

    return (
        <Routes>
            <Route path="/" element={<HomePage setUser={setUser}  />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard user={user} userLogout={userLogout} />} />
        </Routes>
    )
}