import React from 'react';
import '../assets/credit-card.css';
import mastercardLogo from '../assets/Mastercard_logo.jpg'
import Navbar from "./Navbar"
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';

export default () => {
    const history = useHistory();
    function handleClick()
{
    const front = document.getElementById('front')
    front.style.transform='rotateY(180deg)'

    console.log("Clicked!")
     history.push("/view")

}
    return (
        <div>
            <Navbar></Navbar>
            <Typography variant="h3" style={{textAlign:'center',color:'white' , marginTop:'2vh',fontWeight:'bolder'}} component="h2">
 Sparks Banking System
</Typography>
        <div className='credit-card' id="front" onClick={handleClick}>
            <div className='credit-card__logo'><img className='logo' src={mastercardLogo} width="50"/><span style={{marginLeft:'30%',display:'inline-block',fontWeight:'bold'}}>Click on the Card to continue</span> </div>

            <div className='credit-card__number'>4353 8091 9812 2516</div>
            
            <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                    <div>MATT SMITH</div>
                </div>

                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>06/2027</div>
                </div>
            </div>

        </div>
        </div>
    );
}