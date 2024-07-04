
export default function HomeIntro() {
    return (
        <>
            <section className={"about-intro"}>
                <div className={"container"}>
                    <div className={"row justify-content-center align-items-center"}>
                        <div className={"col-lg-10 mb-3"}>
                            <h1 className={"display-4 mb-1"}>About Us</h1>
                            <p className={"lead mb-1"}>
                                As the first digital mental healthcare facility in Tanzania, AHADI is proud to lead the
                                way in providing confidential and culturally relevant support.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <main className={"container my-5"}>
                <div className={"row align-items-center justify-content-center"}>
                    <div className={"col-lg-6 mb-2"}>
                        <h2 className={"display-1 mb-1"}>Our Story</h2>
                        <p className={"text-light-muted mb-1"}>
                            We interviewed 100 Tanzanian youths in a Mental health survey.

                            95% have experienced mental health challenges
                            85% go untreated due to fear of stigma, long waiting time & high costs in healthcare
                            facilities
                            80+% would prefer instant and discrete mental healthcare services and are open to explore
                            digital healthcare
                        </p>
                        <a href="https://play.google.com/store/apps/details?id=tz.co.ahadiapp.ahadi"
                           className={"button-30"}>Download_App</a>
                    </div>
                    <div className={"col-lg-6 mb-2"}>
                        <p className={"text-light-muted mb-1"}>
                            As the first digital mental healthcare facility in Tanzania, AHADI is proud to lead the
                            way in providing confidential and culturally relevant support. Offering personalized
                            mental health support through a combination of innovative technology and compassionate
                            human interaction. Our team of experienced counselors and mental health professionals
                            are dedicated to helping you navigate life's challenges with compassion and expertise.
                            <br/> <br/> 
                            At AHADI, we believe that everyone deserves access to mental health support, anytime,
                            anywhere. We work to provide inclusive, culturally competent and accessible mental
                            wellness solutions to empower Africans to thrive. Our goal is to bridge the gap between
                            the accessibility of mental health services in Tanzania and expand across Africa. We are
                            the Flagship product of Tanzania Health and Medical Education Foundation (TAHMEF).
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
