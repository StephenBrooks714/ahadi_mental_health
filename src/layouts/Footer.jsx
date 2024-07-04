export default function Footer() {
    return (
        <>
            <footer className={"text-center text-lg-start text-muted bg-blue-gradient"}>
                <section className={"footer-nav d-flex justify-content-center justify-content-lg-between p-4 border-bottom"}>
                    <div className={"me-5 d-none d-lg-block"}>
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href={"https://www.facebook.com/profile.php?id=100093335607041"} target={"_blank"} className={"me-4 text-reset"}>
                            <i className={"fab fa-facebook-f"} />
                        </a>
                        <a href={"#"} className={"me-4 text-reset"}>
                            <i className={"fab fa-twitter"} />
                        </a>
                        <a href={"https://www.instagram.com/ahadi.mentalhealth/"} target={"_blank"} className={"me-4 text-reset"}>
                            <i className={"fab fa-instagram"} />
                        </a>
                        <a href={"https://www.linkedin.com/showcase/ahadi-mental-healthcare-app/"} target={"_blank"} className={"me-4 text-reset"}>
                            <i className={"fab fa-linkedin"} />
                        </a>
                    </div>
                </section>
                <hr className={"footer-line"}/>
                <section className={"container text-center text-md-start mt-5"}>
                    <div className={"row mt-3"}>
                        <div className={"col-lg-4 mb-1"}>
                            <h6 className={"text-uppercase fw-bold mb-4"}>
                                <i className={"fas fa-gem me-3"} />
                                Ahadi App
                            </h6>
                            <p>
                               As the first digital mental healthcare facility in Tanzania, AHADI is proud to lead the way in providing confidential and culturally relevant support.
                            </p>
                        </div>
                        <div className={"col-lg-2 mb-2"}>
                            <h6 className={"text-uppercase fw-bold mb-4"}>Products</h6>
                            <p>
                                <a href={"/"} className={"text-reset"}>Home Page</a>
                            </p>
                            <p>
                                <a href={"/about"} className={"text-reset"}>About Page</a>
                            </p>
                            <p>
                                <a href={"/contact"} className={"text-reset"}>Contact Page</a>
                            </p>
                            <p>
                                <a href={"/services"} className={"text-reset"}>Services</a>
                            </p>
                        </div>
                        <div className={"col-lg-2 mb-2"}>
                            <h6 className={"text-uppercase fw-bold mb-4"}>Useful links</h6>
                            <p>
                                <a href={"#!"} className={"text-reset"}>Pricing</a>
                            </p>
                            <p>
                                <a href={"#!"} className={"text-reset"}>Settings</a>
                            </p>
                            <p>
                                <a href={"#!"} className={"text-reset"}>Orders</a>
                            </p>
                            <p>
                                <a href={"#!"} className={"text-reset"}>Support</a>
                            </p>
                        </div>
                        <div className={"col-lg-4 mb-2"}>
                            <h6 className={"text-uppercase fw-bold mb-4"}>Contact</h6>
                            <p>
                                <i className={"fas fa-home me-3"} /> Dar es Salaam 14112
                            </p>
                            <p>
                                <i className={"fas fa-envelope me-3"} /> ahadi@tahmef.org
                            </p>
                            <p>
                                <i className={"fas fa-phone me-3"} /> + 01 234 567 88
                            </p>
                            <p>
                                <i className={"fas fa-print me-3"} /> 0692 773 854
                            </p>
                        </div>
                    </div>
                </section>
                <div
                    className={"text-center p-4"}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2024 Copyright: <a className={"text-reset fw-bold"} href={"https://ahadimentalhealth.io/"}>
                        https://ahadimentalhealth.io/
                    </a>
                </div>
            </footer>
        </>
    )
}
