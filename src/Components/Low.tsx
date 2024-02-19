import Card from "./Cards/Card";
import imgCard from "../assets/images/project1.png";
import '../assets/sass/color.scss'
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
                <Card imgCard={imgCard}/>
                <Card imgCard={imgCard}/>
                <Card imgCard={imgCard}/>
                <Card imgCard={imgCard}/>
            </article>
            <article className={psClass === 'off' ? 'container-s' : 'container-s-off'}>
                <CardFront titleContainer='Frontend' />
                <CardBack titleContainer='Backend' />
            </article>
        </section>
    );
};