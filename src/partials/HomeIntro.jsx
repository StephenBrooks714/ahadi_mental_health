import africa from "../assets/africa.png";

export default function HomeIntro() {
    return (
        <>
            <section className={"home-intro"}>
                <div className={"container"}>
                    <div className={"row align-items-center"}>
                        <div className={"col-lg-7 mb-3"}>
                            <h1 className={"display-4 mb-1"}>Tanzania's first digital mental healthcare facility</h1>
                            <p className={"lead mb-1"}>
                                1 in 4 people experience a mental health disorder at some point in their lives.
                            </p>
                            <p className={"text-light-muted mb-1"}>
                                Stigma and lack of access to mental health services contribute to the burden, resulting
                                in
                                untreated conditions and preventable crises that impact individuals, families, and
                                communities
                                across Africa.
                            </p>
                            <a href="https://play.google.com/store/apps/details?id=tz.co.ahadiapp.ahadi"
                               className={"button-30"}>Download_App</a>
                        </div>
                        <div className={"col-lg-5 mb-3"}>
                            <img src={africa} className={"img-fluid"} loading={"lazy"}
                                 alt="health care at your finger tips"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}