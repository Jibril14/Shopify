import React from 'react'
import Image from '../assets/images/credit-card.jpg'
import classes from './CreditImage.module.css'


const CreditImage = () =>(
    <div className={classes.CreditImage}>
        <img src={Image} alt='Shopify' />
    </div>
)
export default CreditImage;