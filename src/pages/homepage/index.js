import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './Home.scss'
import logo1 from'../../resources/img/logo.png'
import pic1 from'../../resources/img/Capture2.png'
import pic2 from'../../resources/img/Capture3.png'
import pic3 from'../../resources/img/Capture4.png'



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
                Get out there and show yourself on the leaderboards today!
                </h2>
				<div className="play-wrapper">

                {currentUser ? 
                <Link className="play-button" to="/play-now">Download</Link>
                : <Link className="play-button" to="/signup">Play Now</Link>
                }

                </div>
                </div>
                
                
	

				<div className="row">		
                    <img id="gamePreview" src={pic1} alt="Logo" className="column" />
                    <div className="column">	
                        <img id="gamePreview" src={pic2} alt="Logo"/>
                    </div>
                    <div className="column">	
                        <img id="gamePreview" src={pic3} alt="Logo"/>
                    </div>
                </div>

            </div>
			
			
		
			
         
		
       
       
       
    )
}
