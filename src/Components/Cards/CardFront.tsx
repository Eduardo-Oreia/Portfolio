import SkillName from "./Skillname";
// Icone Html
import { FaHtml5 } from "react-icons/fa";
// Icone Css
import { FaCss3Alt } from "react-icons/fa";
// Icone Javascript
import { IoLogoJavascript } from "react-icons/io5";
// Icone React
import { FaReact } from "react-icons/fa6";
// Icone Sass
import { FaSass } from "react-icons/fa6";
// Icone Typescript
import { SiTypescript } from "react-icons/si";

export default function CardFront(props: any) {
    return(
        <div className="card-s">
            <div className="title-skill">
                <h5>{props.titleContainer}</h5>
            </div>
            <div className="grid-skill">
                <SkillName icon={<FaHtml5 />} nameSkill='Html' />
                <SkillName icon={<IoLogoJavascript />} nameSkill='Javascript' />
                <SkillName icon={<FaCss3Alt />} nameSkill='Css' />
                <SkillName icon={<SiTypescript />} nameSkill='Typescript' />
                <SkillName icon={<FaSass />} nameSkill='Sass' />
                <SkillName icon={<FaReact />} nameSkill='React' />
            </div>
        </div>
    );
};