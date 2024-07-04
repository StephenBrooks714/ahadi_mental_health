import Navbar from "./layouts/Navbar";
import AboutIntro from "./partials/AboutIntro";
import Footer from "./layouts/Footer";

function App() {

    return (
        <>
            <header>
                <Navbar />
                <AboutIntro/>
            </header>
            <Footer/>
        </>
    )
}

export default App
