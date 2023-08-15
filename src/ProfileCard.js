function ProfileCard({title, handle, image, description}){
    // console.log({title, handle})
    return (

        <div className="card">
            <div className="card-mage">
                <figure className="image is-1by1" >
                    <img className="card-header" src = {image.src} alt={image.alt}/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6"> {handle}</p>
                    <div className="content">
                         <p>{description}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;