import { Outlet } from "react-router-dom";
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';

function Layout () {
    return (
        <>
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;