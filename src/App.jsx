import { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    let color = useSelector(state => state.theme.themeColor)
    useEffect(() => {
        const element = document.querySelectorAll("html");
        element[0].classList.remove("light", "dark");
        element[0].classList.add(color);
        
    }, [color]);

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login(userData));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return loading ? null : (
        <div className="min-h-screen flex duration-300 flex-wrap content-between bg-gray-300 dark:bg-slate-800">
            <div className="w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
