// Icone Github
import { FaGithub } from "react-icons/fa";
// Icone Website
import { MdOutlineTransitEnterexit } from "react-icons/md";

export default function Card(props: any) {
    return(
        <div className="card-p">
            <img src={props.imgCard} alt="image card" />
            <div className="card-info">
                <h5>E-commerce</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi</p>
                <div className="card-buttons">
                    <button>
                        <a href="https://react-icons.github.io/react-icons/search/#q=enter" target="blank"><MdOutlineTransitEnterexit /></a>
                    </button>
                    <button>
                        <a href="https://react-icons.github.io/react-icons/search/#q=enter" target="blank"><FaGithub /></a>
                    </button>
                </div>
            </div>
        </div>
    );
};