import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { routes } from "./utils/routes";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={process.env.PUBLIC_URL} element={<Navigate to="/" />} />
                    {routes.map(({ path, element: Element }, key) => {
                        return (
                            <Route
                                key={key}
                                path={path}
                                element={
                                    <div className="min-h-[100vh] flex flex-col">
                                        <Navbar />
                                        <Element />
                                        <Footer />
                                    </div>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
