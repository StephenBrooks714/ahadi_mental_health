import NavBar from './layouts/Navbar.jsx';
import Footer from "./layouts/Footer";

export default function Contact() {

    return (
        <>
            <NavBar />
            <div className={"container"} style={{marginTop: "160px", marginBottom: "60px"}}>
                <div className={"row justify-content-center align-items-center"}>
                    <div className={"col-lg-5"}>
                        <div className={"card"}>
                            <h1 className={"h1"}>Get In Touch</h1>
                            <p>
                                Email: ahadi@tahmef.org
                            </p>
                            <p>
                                Located in: Regent Business Park
                            </p>
                            <p>
                                Address: Regent Business Park, Regent St, 172 Chwaku Street, Dar es Salaam 14112
                            </p>
                            <p className={"mb-1"}>
                                Phone: 0692 773 854
                            </p>
                            <a href="https://play.google.com/store/apps/details?id=tz.co.ahadiapp.ahadi"
                               className={"button-30"}>Download App</a>
                        </div>
                    </div>
                    <div className={"col-lg-7"}>
                        <form action="">
                            <label htmlFor="name" className={"form-label"}>Name</label>
                            <input type="text" name={"name"} className={"form-control mb-1"} required/>
                            <label htmlFor="email" className={"form-label"}>Your Email</label>
                            <input type="email" name={"email"} className={"form-control mb-1"} required/>
                            <label htmlFor="message" className={"form-label"}>Message</label>
                            <textarea name="message" id="message" className={"form-control mb-1"} rows="7"></textarea>
                            <button className={"form-btn"} type={"submit"}>submit secure form</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}