import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './Home.scss'
import logo1 from'../../resources/img/logo.png'




export default function Home() {
    const { currentUser } = useAuth()


    return (
       <div className="landing">
	   <img id="logo1" src={logo1} alt="Logo" className="center"></img>
        <div className ="text">
                <h1 className='display-4 fw-bold 1h-1 mb-3'>Trench Warfare</h1>    
                <h2>
                Experience a unique battle against formidable opponents<br/> and start your journey to becoming the king of the bloody hills<br/> by using everything to your adavntage!
                <br />
                <br />
                Build out your base and weapons by earning resources during the fight to dominate the battle field.
                <br />
                Cannons, Guns, Grenades. Trench Warfare has it all!
                <br />
                <br />
                Get out there and show yourself on the leaderboards today!<br/><br/>
			Available on Windows Only
			
                </h2>
				<div className="play-wrapper">


                {currentUser ? 
                <Link to="/Trench Warfare Installer.zip" target="_blank" className="play-button" download>Download</Link>
                : <Link className="play-button" to="/signup">Play Now</Link>
                }

                </div>
                </div>

                <br/><br/><br/><br/><br/><br/>


            </div>
			
			
		
			
         
		
       
       
       
    )
}
