import SkillName from "./Skillname";
// Icone Git
import { FaGithub } from "react-icons/fa";
// Icone Node
import { FaNode } from "react-icons/fa";
// Icone Postgresql
import { BiLogoPostgresql } from "react-icons/bi";

export default function CardBack(props: any) {
    return(
        <div className="card-s">
            <div className="title-skill">
                <h5>{props.titleContainer}</h5>
            </div>
            <div className="grid-skill">
                <SkillName icon={<FaGithub />} nameSkill='Git' />
                <SkillName icon={<FaNode />} nameSkill='Node Js' />
                <SkillName icon={<BiLogoPostgresql />} nameSkill='Postgresql' />
            </div>
        </div>
    );
};