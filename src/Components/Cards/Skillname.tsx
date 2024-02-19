export default function SkillName(props: any) {
    return(
        <div className="skill-container">
            {props.icon}
            <p>{props.nameSkill}</p>
        </div>
    );
};