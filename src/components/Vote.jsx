import React from 'react'
import Logo from '../assets/electSg_logo.png'
import UserManual from '../assets/UserManual.pdf'
import Login from '../assets/login.png'
import Ballot from '../assets/vote.png'
import Statistics from '../assets/analysis.png'

const Vote = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'User-Manual-PDF';
    
        link.href = UserManual;
    
        link.click();
      };
 
    
  return (
    <div id="vote">
        <div className='py-4 text-2xl font-bold mt-16 mb-4 text-center'>How to Vote</div>
        <div className='text-center text-xl'>
            <p>In order to be eligible for voting, you must meet these certain criteria:</p>
        </div>
        <div className='mt-12 mx-auto text-left w-[40%] text-xl leading-9'>
            <p>1. You must be a Singapore Citizen <span className='font-bold'>and</span> holder of a pink IC.</p>
            <p>2. You must be older than the age of <span className='font-bold'>21</span>.</p>
            <p>3. You have not been disqualified from being an elector under any preveiling law.</p>
            <p>4. You must have a Singapore <span className='font-bold'>residential address</span> on your NRIC.</p>
        </div>
        <div className='col-span-3 justify-evenly flex flex-wrap'>
        <div className='w-[300px] text-center display block rounded-md border-2 mt-12 mr-[10px] mb-1'>
            <img src={Login} className='w-[70%] p-4 ml-10'/>
            <p className='text-left px-6 py-6'><span className='font-bold'>1. </span> Voters will log into their account using their Singpass ID and password. Once verified, they will enter into the voter's homepage.</p>
        </div>
        <div className='w-[300px] text-center display block rounded-md border-2 mt-12 mr-[10px] mb-1'>
            <img src={Ballot} className='w-[65%] p-4 ml-[55px]' />
            <p className='text-left px-10 py-6 mt-2'><span className='font-bold'>2. </span> Once the voter has successfully logged in, they will be able to view a list of potential candidates representing their district. They will select their chosen candidate and click the "Submit" button.</p>
        </div>
        <div className='w-[300px] text-center display block rounded-md border-2 mt-12 mr-[10px] mb-1'>
            <img src={Statistics} className='w-[45%] py-6 ml-[90px] mt-4' />
            <p className='text-left px-10 py-6'><span className='font-bold'>3. </span>Once their vote has been sent, they will be able to observe the progress of the election on the homepage, where the winners in each district will be announced when the election is over.</p>
        </div>
        </div>
        <div className='mt-12 text-center text-xl'>
            <p>For a more in-depth explaination, please click<span className="font-bold cursor-pointer" onClick={handleDownload}> here</span> for more information.</p>
        </div>
    </div>
  )
}

export default Vote