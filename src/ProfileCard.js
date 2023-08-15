function ProfileCard({title, handle, image}){
    // console.log({title, handle})
    return (

        <div>
            <img src = {image.src} width={250} alt={image.alt}/>
            <div>Title is {title}</div>
            <div>Twitter handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;