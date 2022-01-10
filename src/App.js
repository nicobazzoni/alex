import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import photo1 from './images/photo1.jpeg'
import photo2 from './images/photo2.JPG'
import photo3 from './images/photo3.jpeg'
import photo4 from './images/photo4.jpeg'
import photo5 from './images/photo5.jpeg'
import photo6 from './images/photo6.jpeg'
import sound from './images/melody.wav'

import sound2 from './images/melody2.wav'
import sound3 from './images/melody3.wav'
import sound4 from './images/melody4.wav'
import sound5 from './images/melody5.wav'
import sound6 from './images/melody6.wav'

import WaterWave from "react-water-wave";



class LogoCube extends React.Component {
  
  render() {

   
    let audio = new Audio(sound)
   
    const start = () => {
      audio.play()
    }
    
    let audio2 = new Audio(sound2)
   
    const start2 = () => {
      audio2.play()
    }
    
    let audio3 = new Audio(sound3)
   
    const start3 = () => {
      audio3.play()
    }
    
    let audio4 = new Audio(sound4)
   
    const start4 = () => {
      audio4.play()
    }
  
    return (
      
      
    <center>
       < div >
       
    </div >
            <div  >
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                   
                <Cube size={300} index="front">
                
                    <div >
                    
                        <img  onClick={start} style={{width: '290x', height: '300px'}} src={photo6}></img>
                    </div>
                    <div >
                        <img onClick={start2} style={{width: '290x', height: '300px'}}src={photo2}></img>
                    </div>
                    <div >
                        <img onClick={start3}style={{width: '290x', height: '300px'}}src={photo3}></img>
                    </div>
                    <div className="hvr-grow">
                        <img onClick={start4}style={{width: '290x', height: '300px'}}src={photo4}></img>
                    </div>
                    <div >
                        <img style={{width: '290x', height: '300px'}}src={photo5}></img>
                    </div>
                    <div >
                        <img style={{width: '290x', height: '300px'}}src={photo1}></img>
                    </div>
                    
                </Cube>
                
                </div>
            </div>
            <div>
            <br></br>
	<span id="L">A</span>
	<span id="I">L</span>
	<span id="G">E</span>
	<span id="H">X</span>
	<span id="T">&emsp;B</span>
  
  
   </div>
   
 

   

        </center>

        
        
         );
          }
        }
export default LogoCube