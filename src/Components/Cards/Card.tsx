// Icone Github
import { FaGithub } from "react-icons/fa";
// Icone Website
import { MdOutlineTransitEnterexit } from "react-icons/md";

export default function Card(props: any) {
    return(
        <div className="card-p">
            <img src={props.imgCard} alt="image card" />
            <div className="card-info">
                <h5>{props.nameProject}</h5>
                <p>{props.descProject}</p>
                <div className="card-buttons">
                    <button>
                        <a href={props.linkProject} target="blank"><MdOutlineTransitEnterexit /></a>
                    </button>
                    <button>
                        <a href={props.linkGithub} target="blank"><FaGithub /></a>
                    </button>
                </div>
            </div>
        </div>
    );
};