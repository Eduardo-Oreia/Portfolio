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
                    <a href="https://github.com/Eduardo-Oreia" target="blank"><FaGithub /></a>
                </button>
                <button>
                    <a href="#"><FaLinkedin /></a>
                </button>
                <button>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Foreia_eduardo%3Figsh%3DNTc4MTIwNjQ2YQ%253D%253D%26fbclid%3DIwAR3YTwSm6uX-v2xNGWnDRWIwibruX_H3OnSFeHmqgErOFPpYi8idOTdL19M&h=AT2Vb6-Nn8QSiX7aZQ0NZWwMVPwzld4dr71Ejq2iLMJHA1Ae2bAp8QlbRVjqeKL8kBr8YLTdxcdG5WkTP9zA5kED_PwNa7iJ22hJaywy8ZrKbzER_UX-3ztPiNcJZy0xNR3Z9A" target="blank"><GrInstagram /></a>
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
                    <p>Me chamo Eduardo Batista, tenho 22 anos e moro em Guarapuava no Paraná. Desde que tive meu primeiro contato com a programação se tornou meu sonho trabalhar na área, atualmente sou graduando de Engenharia de Software na Cruzeiro do sul e estou a procura da minha primeira vaga como desenvolvedor.</p>
                </div>
            </div>
        </section>
    );
};