import React from 'react'
import { FaLock } from "react-icons/fa";
import Card from "./Card";


const About = () => {
  return (
    <div id="about" className='w-full h-full bg-white text-center'>
        <h1 className='text-2xl font-bold mt-16'>What is Ring-CT Technology?</h1>
        <p className='py-4 text-xl mx-64 text-left'>Ring-CT technology is a cryptographic technology that is primarily used in cryptocurrencies
        to enhance the user's privacy and security. While its primary usage 
        </p>

        {/* Card Container */}
        <div className='py-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-3'>

            {/* Card  */}
            <Card icon={< FaLock size={40}/>} heading='Anonymity' text='When a voter casts a vote, it is combined with several other votes
            from different people. Since all the votes are jumbled together, attackers are unable to tell which vote belongs to you, this applies to 
            the other voters as well.'/>

            <Card icon={<FaLock size={40}/>} heading='Linkability' text='Each voter generates a linkable ring signaure on their vote. This linkable ring signaure
            is unique to each voter and the vote they cast, so any attempt to cast multiple votes will be detected and prevented, maintaining the integrity of the system.'/>
            
            
            <Card icon={<FaLock size={40}/>} heading='Unforgeability' text='When a voter casts their vote, a unique signature is created using their secret key. This signature proves that the
            vote is genuine and comes from the right person. So if someone tries to create a fake vote, they will not able create a valid signature as they do not have the secret key.'/>

        </div>
    </div>
  )
}

export default About