import './Section.css';

function Section(props) {
    return (
        <div className='wrapper' style={{ background: props.bg }} >
            <div className='text-wrapper'>
                <img src={props.img} alt="car img" />
                <h2 className='name'>{props.name}</h2>
                <p className='desc'>{props.desc}</p>
            </div>
            <button id={props.id}>Learn More</button>
        </div >

    );
}

export default Section;