import './Title.css';

const Title = (props) => {
    return(
        <div className='Title'>
            <div className='Text'>
                <h1>
                    {props.title}
                </h1>
                <hr/>
            </div>
        </div>
    );
}

export default Title