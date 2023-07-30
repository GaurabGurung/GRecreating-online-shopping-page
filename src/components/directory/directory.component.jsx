import './directory.styles.scss'


const Directory = ({categories}) => {

    return (
        <div>
            {categories.map((item)=> {
                const { id, title, imageUrl} = item;
                return (
                <div className="categories-container" key={id}> 
                    <img src={imageUrl} alt= {title} className="image"/>
                    <div> 
                        <h2 className="title"> {title} </h2>
                        <h2> Shop Now </h2>
                    </div>
                </div>
                )
            })}
        </div>

    )
}

export default Directory;