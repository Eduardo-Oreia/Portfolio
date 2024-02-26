// Icone Github
import { FaGithub } from "react-icons/fa";
// Icone Linkedin
import { FaLinkedin } from "react-icons/fa";
// Icone Instagram
import { GrInstagram } from "react-icons/gr";
// useSate
import { useState } from "react";
// Icone Code
import { IoCodeSlash } from "react-icons/io5";
// Icone Book
import { FaBook } from "react-icons/fa";
// Icone Close Modal
import { IoIosCloseCircle } from "react-icons/io";

export default function Middle() {
    type About = 'off' | 'on';
    const [ about, setAbout ] = useState<About>('on');
    
    function toggleAbout() {
        setAbout(about === 'off' ? 'on' : 'off');
    };

    return(
        <section className="container-middle">
            <div className="social-media">
                <button>
                    <a href="https://github.com/Eduardo-Batist4" target="blank"><FaGithub /></a>
                </button>
                <button>
                    <a href="https://www.linkedin.com/in/eduardo-batista-5927082b6/" target="blank"><FaLinkedin /></a>
                </button>
                <button>
                    <a href="https://www.instagram.com/batista.eduard0/" target="blank"><GrInstagram /></a>
                </button>
            </div>
            <div className="about-container">
                <button onClick={toggleAbout}>ABOUT</button>
                <div className="icon code">
                    <IoCodeSlash />
                </div>
                <div className="icon book">
                    <FaBook />
                </div>
            </div>
            <div className={about === 'on' ? 'about-off' : 'about-on'}>
                <div className="modal-about">
                    <button onClick={toggleAbout}><IoIosCloseCircle /></button>
                    <h4>sobre</h4>
                    <p>Meu nome é Eduardo Batista, tenho 22 anos e moro em Guarapuava, Paraná. Desde o meu primeiro contato com a programação, cultivar uma carreira nessa área se tornou meu sonho. Atualmente, estou cursando Engenharia de Software na Universidade Cruzeiro do Sul e estou em busca da minha primeira oportunidade como desenvolvedor.</p>
                </div>
            </div>
        </section>
    );
};