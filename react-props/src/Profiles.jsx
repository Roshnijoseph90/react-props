import React from 'react'
import contacts from './contact'
import Profile from './Profile'


const Profiles = () => {
  return (
    <div>
       {contacts.map((item)=>(
        <Profile profile={item} />
       ))

       } 
    </div>
  )
}

export default Profiles
