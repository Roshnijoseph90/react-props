import "./Profile.css";


const Profile=(props)=>{
   const {image,name,phone,email}= props.profile

    return(
      <div className="main">
        <figure>
            <img src={image}  />
            <figcaption>{name}</figcaption>
         </figure>
         <div>
            <p>{phone}</p>
            <p>{email}</p>
         </div>

      </div>
    )
}
export default Profile