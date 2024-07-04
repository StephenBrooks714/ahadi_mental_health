export default function HomeBanner() {
    return (
        <>
            <section className={"home-banner"}>
                <div className={"container"}>
                    <div className={"row justify-content-center text-center"}>
                        <div className={"col-lg-12 mb-2 text-center"}>
                            <div className={"home-banner__content"}>
                                <h5 className={"home-banner__title"}>Our Approach</h5>
                                <section>
                                    <p className={"home-banner__text"}>We deliver the best mental health solutions to
                                        our clients</p>
                                </section>
                                <p className={"home-banner__text"}>
                                    With a Hybrid online and offline model, We digitally connect you with mental health
                                    experts and self-help tools to cultivate mental wellbeing.
                                </p>
                            </div>
                        </div>
                        <div className={"col-lg-4 mb-1"}>
                            <i className="fa-regular icon fa-clock"></i> <br/>
                            Get Instant Help
                        </div>
                        <div className={"col-lg-4 mb-1"}>
                            <i className="fa-regular icon fa-hand"></i> <br/>
                            At Your Comfort & Privacy
                        </div>
                        <div className={"col-lg-4 mb-1"}>
                            <i className="fa-solid icon fa-money-bill-wave"></i> <br/>
                            Save on affordable rates
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}