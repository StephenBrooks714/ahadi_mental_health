import Navbar from "./layouts/Navbar";
import HomeIntro from "./partials/HomeIntro";
import HomeImpact from "./partials/HomeImpact";
import WhyChoose from "./partials/WhyChoose";
import WhyNow from "./partials/WhyNow";
import HomeBanner from "./partials/HomeBanner";
import Footer from "./layouts/Footer";

function App() {

  return (
    <>
        <header>
            <Navbar />
            <HomeIntro />
        </header>
        <main className={"container"}>
            <HomeImpact />
            <WhyChoose />
            <WhyNow className={"mb-4"} />
        </main>
        <HomeBanner />
        <section className={"container my-5"}>
            <div className={"row align-items-center justify-content-center"}>
                <div className={"col-lg-6 mb-1"}>
                   <h5 className={"display-1"}>OUR <span className={"fw-bold title-text-line"}>SERVICES</span></h5>
                </div>
                <div className={"col-lg-6 mb-1"}>
                  <h5 className={"h1 mb-1"}>Individual Services</h5>
                    <ul className={"lead"}>
                        <li>
                            Free helpline
                        </li>
                        <li>
                            Therapy
                        </li>
                        <li>
                            Therapeutic journals
                        </li>
                        <li>
                            Support community
                        </li>
                        <li>
                            Pro Package: Foundational Support: Essential Care suite
                        </li>
                        <li>
                            Plus Package: Enhanced Support Suite
                        </li>
                        <li>
                            Comprehensive Package: Executive Empowerment
                        </li>
                        <li>
                            Tailored Executive Workshops
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div className={"row justify-content-center align-items-center text-center mb-3"}>
            <div className={"col-lg-10"}>
                <a href="https://play.google.com/store/apps/details?id=tz.co.ahadiapp.ahadi"
                   target={"_blank"}
                   className={"button-30"}>Download Our App Today</a>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default App
