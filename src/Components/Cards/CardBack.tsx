import SkillName from "./Skillname";
// Icone Git
import { FaGithub } from "react-icons/fa";
// Icone Node
import { FaNode } from "react-icons/fa";
// Icone Postgresql
import { BiLogoPostgresql } from "react-icons/bi";
// Icone Sequelize
import { SiSequelize } from "react-icons/si";
// Icone Express
import { SiExpress } from "react-icons/si";
// Icone Jwt
import { SiJsonwebtokens } from "react-icons/si";

export default function CardBack(props: any) {
    return(
        <div className="card-s">
            <div className="title-skill">
                <h5>{props.titleContainer}</h5>
            </div>
            <div className="grid-skill">
                <SkillName icon={<FaGithub />} nameSkill='Git' />
                <SkillName icon={<FaNode />} nameSkill='Node Js' />
                <SkillName icon={<SiExpress />} nameSkill='Express' />
                <SkillName icon={<BiLogoPostgresql />} nameSkill='Postgresql' />
                <SkillName icon={<SiSequelize />} nameSkill='Sequelize' />
                <SkillName icon={<SiJsonwebtokens />} nameSkill='Jwt' />
            </div>
        </div>
    );
};