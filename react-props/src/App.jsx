import React from 'react'
import Profile from "./Profile"
import Profiles from './Profiles'



const profile1={
  image:"https://picsum.photos/200/300",
  name :"Random image 1 ",
  phone: "759343843984",
  email:"test@2324"
}
const profile2={
  image:"https://picsum.photos/200",
  name :"Random image 2 ",
  phone: "829343843984",
  email:"abc@2324"
}
const App = () => {
  return (
    
      <div>
        {/*Profile profile = {profile1} />
        <Profile profile = {profile2} /*/}
        < Profiles />
      </div>
    
  )
}

export default App
