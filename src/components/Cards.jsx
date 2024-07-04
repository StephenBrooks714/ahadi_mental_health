import data from "../data/services-data.cjs";
import {useEffect} from "react";

export default function Cards(){

    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                const modal = card.querySelector(".modal");
                modal.style.display = "block";
            })
        })
    }, [])

    // on click image, show details in a modal
    function close(){
        for(let i = 0; i < data.length; i++){
            const modal = document.querySelectorAll(".modal");
            modal[i].style.display = "none";
        }
    }

    return (
        <>
            {data.map ((item) => (
                <div className="col-lg-3 text-center mb-4" key={item.id}>
                    <a href="#!">
                        <div className="card" id={item.id}>
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <img className="img-fluid" src={item.image} alt={item.title}/>
                                <div className={"modal"}>
                                    <button id={"close"} onClick={close}>x</button>
                                    <p>
                                        {item.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))
            }
        </>
    )
}