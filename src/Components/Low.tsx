import Card from "./Cards/Card";
import imgRestaurant from "../assets/images/restaurant.png";
import imgCsnews from "../assets/images/csnews.jpg";
import imgBlog from "../assets/images/blog1 - Copia.png";
import imgValidator from "../assets/images/validator.png";
import imgWeather from "../assets/images/weather.png";
import '../assets/sass/color.scss';
import { useState } from "react";
import CardBack from "./Cards/CardBack";
import CardFront from "./Cards/CardFront";


export default function Low() {
    const [ projectBtn, setProjectBtn ] = useState({
        backgroundColor: '#f5f7fa'
    });
    const [ skillBtn, setSkillBtn ] = useState({
        backgroundColor: '#bcbcbc'
    });
    type project = 'on' | 'off';
    const [ psClass, setPsClass ] = useState<project>('on');
    function switchColor () {
        if(projectBtn.backgroundColor === '#f5f7fa' || skillBtn.backgroundColor === '#bcbcbc') {
            setProjectBtn({backgroundColor: '#bcbcbc'});
            setSkillBtn({backgroundColor: '#f5f7fa'});
            setPsClass('off');
        } else {
            setProjectBtn({backgroundColor: '#f5f7fa'});
            setSkillBtn({backgroundColor: '#bcbcbc'});
            setPsClass('on');
        };
    };

    return(
        <section className="container-ps">
            <article className="filter-ps"> 
                <button 
                    className="filter-btn p" 
                    style={projectBtn} 
                    onClick={switchColor}
                >project</button>
                <button 
                    className="filter-btn s" 
                    style={skillBtn} 
                    onClick={switchColor}
                >skills</button>
            </article>
            <article className={psClass === 'on' ? 'container-p' : 'container-p-off'}>
                <Card imgCard={imgCsnews}
                        nameProject="Cs-news Monolito (Backend)"
                        descProject="Monolito é uma arquitetura onde o frontend e o backend estão integrados em uma única aplicação. Este projeto inclui funcionalidades de registro, login e comentários."
                        linkGithub="https://github.com/Eduardo-Batist4/cs-news" 
                />
                <Card imgCard={imgRestaurant}
                        nameProject="Restaurant System (Backend)"
                        descProject="Este backend simula um sistema de restaurante desenvolvido para otimizar e controlar todas as operações do estabelecimento."
                        linkGithub="https://github.com/Eduardo-Batist4/restaurant-system" 
                />
                <Card imgCard={imgBlog} 
                    nameProject="Blog"
                    descProject="Este é um blog minimalista que desenvolvi usando HTML, JavaScript e Sass. Ele foi projetado para ser responsivo, adaptando-se perfeitamente a dispositivos móveis, tablets e desktops." 
                    linkProject="https://eduardo-batist4.github.io/Blog/"
                    linkGithub="https://github.com/Eduardo-Batist4/Blog"
                />
                <Card imgCard={imgValidator} 
                    nameProject="Validador de Login"
                    descProject="Este é um Validador de Login que verifica se o e-mail e a senha atendem aos requisitos estabelecidos para cada campo. As regras estão na descrição no Github."
                    linkProject="https://eduardo-batist4.github.io/Validacao-Login/"
                    linkGithub="https://github.com/Eduardo-Batist4/Validacao-Login" 
                />
                <Card imgCard={imgWeather}
                    nameProject="App-Weather"
                    descProject="Este é um aplicativo simples e intuitivo que fornece informações meteorológicas atualizadas de forma rápida e fácil."
                    linkProject="https://app-weather-001.netlify.app" 
                    linkGithub="https://github.com/Eduardo-Batist4/App-Weather"
                />
            </article>
            <article className={psClass === 'off' ? 'container-s' : 'container-s-off'}>
                <CardFront titleContainer='Frontend' />
                <CardBack titleContainer='Backend' />
            </article>
        </section>
    );
};