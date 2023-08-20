import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const Layout = () => {
    return (
        <div className="main-layout">
            <Header />

            <div className="main-container">
                <Outlet />
            </div>
        </div>
    );
}