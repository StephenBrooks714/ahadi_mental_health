import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import servicesPhone from "./assets/texting-image.png";
import Cards from "./components/Cards.jsx";

function Services() {

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main className={"container"} style={{marginTop: "160px", marginBottom: "60px"}}>
                <article className={"row mb-2 align-items-center justify-content-center"}>
                    <div className={"col-lg-6 mb-2"}>
                        <h1 className={"display-4 fw-bold"}>Our Services</h1>
                        <p className={"lead mb-1"}>
                            Access Free 24hrs primary mental health support through our:
                        </p>
                        <ul className={"list-group"}>
                            <li className={"list-group-item"}>
                                <a href="https://play.google.com/store/apps/details?id=tz.co.ahadiapp.ahadi"
                                   target={"_blank"}>AHADI App</a>
                            </li>
                            <li className={"list-group-item"}>
                                <a href="">WhatsApp</a>
                            </li>
                            <li className={"list-group-item"}>
                                <a href="tel:0692 773 854">SMS: Text us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"col-lg-6 mb-2"}>
                        <img src={servicesPhone} className={"img-fluid"} loading={"lazy"} alt="Our Services"/>
                    </div>
                </article>
                <aside className={"row col-row-reverse mb-5 align-items-center justify-content-center"}>
                    <div className={"col-lg-10 text-center"}>
                        <h3 className={"h2 fw-light mb-2"}>Click on cards for more details on these services</h3>
                    </div>
                    <Cards/>
                </aside>
                <section className={"row align-items-center justify-content-center"}>
                    <div className={"col-lg-6 mb-2"}>
                        <h4 className={"h1 fw-light"}>
                            Cultivating Mental Health Space for people to Flourish.
                        </h4>
                        <p className={"text fw-light"}>
                            In today's dynamic workspace, prioritizing employee mental health is crucial for fostering
                            productivity, engagement, and overall well-being. Our tailored workplace mental health
                            services, provided by our psychotherapists at AHADI, aim to equip your organization with the
                            tools and support necessary to nurture a culture of wellness and resilience.
                        </p>
                    </div>
                    <div className={"col-lg-6 mb-2"}>
                        <img
                            src={"https://ahadimentalhealth.io/_next/image?url=%2Fimages%2Fservices%2F2-1.png&w=640&q=75"}
                            className={"img-fluid"}
                            loading={"lazy"}
                            alt="Cultivating Mental Health Space for people to Flourish"/>
                    </div>
                </section>
            </main>
            <section className={"home-banner mb-2"}>
                <div className={"container"}>
                    <div className={"row justify-content-center text-center"}>
                        <div className={"col-lg-10"}>
                            <h3 className={"h2 fw-light mb-2"}>What to expect:</h3>
                            <p>
                                Confidentiality and Discretion:
                                Assurance of complete confidentiality and discretion in all interactions, respecting the
                                privacy and dignity of employees at all levels within the organization.
                            </p>
                            <p>
                                Affordability and Accessibility:
                                - Pricing structured to accommodate organizations of various sizes and budgets, with our
                                transparent pricing plans available.
                            </p>
                            <p className={"mb-1"}>
                                - Services are conveniently delivered on-site at your workplace,online or within easily
                                reachable community hubs, minimizing disruptions to employees' daily routines while
                                fostering inclusivity and accessibility.
                            </p>
                            <a href="https://play.google.com/store/apps/details?id=tz.co.ahadiapp.ahadi"
                               className={"button-30"}>Download App</a>
                        </div>
                    </div>
                </div>
            </section>
            <main className={"container"} style={{marginTop: "60px", marginBottom: "60px"}}>
                <section className={"row"}>
                    <div className={"col-lg-12 mb-2"}>
                        <h4 className={"h2 fw-light mb-1"}><strong>PRO PACKAGE:</strong> <br/>
                            FOUNDATIONAL SUPPORT: ESSENTIAL CARE SUITE</h4>
                        <p className={"text fw-light"}>
                            <span className={"fw-bold"}>Initial Mental Health Assessment:</span> Description: An initial
                            assessment session conducted by our qualified psychotherapist to understand an individual's
                            needs and concerns, laying the groundwork for tailored support.
                            <hr/>
                            <span className={"fw-bold"}>Personal Counseling Sessions:</span> Description: Regular
                            bi-weekly (every 2 weeks) one-on-one counseling sessions focusing on addressing workplace
                            stressors and personal hurdles impacting your wellbeing.
                            <hr/>
                            <span className={"fw-bold"}>Empowering Workshops:</span> Description: Participate in monthly
                            group workshops focusing on stress management techniques, effective communication skills,
                            and self-care strategies, fostering a supportive and culturally sensitive atmosphere.
                            <hr/>
                            <span className={"fw-bold"}>Guided Progress Reviews:</span> Description: Prior to each
                            counseling session, benefit from brief debriefing sessions to track progress, discuss
                            challenges, and set goals for the upcoming session, ensuring personalized support and
                            guidance.
                            <hr/>
                            <span className={"fw-bold"}>Access to resources:</span> Access to the resources available in
                            AHADI App, throughout the duration of the package (community page, and other resources in
                            link tree).
                        </p>
                    </div>
                    <div className={"col-lg-12 mb-2"}>
                        <h4 className={"h2 fw-light mb-1"}><strong>PLUS PACKAGE:</strong> <br/>
                            ENHANCED SUPPORT SUITE</h4>
                        <p className={"text fw-light"}>
                            <span className={"fw-bold"}>Enhanced Support Suite:</span> - Expanding on the Pro Package
                            with additional services.
                            <hr/>
                            <span className={"fw-bold"}>Leadership Consultation:</span> Description: Equip managers with
                            specialized consultation sessions to enhance their understanding of mental health issues,
                            promote a supportive work environment, and effectively manage employee concerns.
                            <hr/>
                            <span className={"fw-bold"}>Weekly Wellness Activities:</span> Description: Immerse in
                            weekly wellness activities such as aerobics and mindfulness exercises, fostering holistic
                            well-being and stress alleviation within the workplace setting.
                            <hr/>
                            <span className={"fw-bold"}>Peer Support Network:</span> Description: Facilitated peer
                            support for employees to connect, share experiences through guided peer support groups,
                            providing a safe space for navigating work-related hurdles and personal challenges.
                            guidance.
                        </p>
                    </div>
                    <div className={"col-lg-12 mb-2"}>
                        <h4 className={"h2 fw-light mb-1"}><strong>COMPREHENSIVE PACKAGE:</strong> <br/>
                            EXECUTIVE EMPOWERMENT</h4>
                        <p className={"text fw-light"}>
                            <span className={"fw-bold"}>Leadership Suite:</span> - Elevate your support offerings with
                            exclusive services:
                            <hr/>
                            <span className={"fw-bold"}>Executive Coaching Sessions:</span> Description: Engage in
                            quarterly coaching sessions focusing on managing high-pressure environments by guiding you
                            to explore various ways to overcome them and explore ways to achieve your personal and
                            professional goals.
                            <hr/>
                            <span className={"fw-bold"}>Tailored Executive Workshops:</span> Description: Quarterly
                            workshops tailored for senior executives and top management, addressing topics such as
                            burnout prevention, resilience building, and fostering a wellness workplace culture.

                        </p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Services
