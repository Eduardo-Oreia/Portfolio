export default function Top(props: any) {
    return(
        <section className="container-profile">
            <div className="photo">
                <img src={props.img} alt="image" />
            </div>
                <h4>Eduardo Batista</h4>
                <p>Web Developer</p>
        </section>
    );
};