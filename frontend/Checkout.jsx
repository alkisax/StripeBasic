import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios' 
// import { response } from 'express';

const PUBLIC_STRIPE_KEY = 'pk_live_51REuM3EsaPshQGwVZxSzQyBw2SJj4CnnSxuf6yWokbg5dRVAM0WpDFrIHnlF0sqQgykl4WVxCw5gA6bhDHWeyrFE00muoS3dkU'
const YOUR_DOMAIN = 'http://localhost:3000';

const stripePromise = loadStripe(`${PUBLIC_STRIPE_KEY}`)

const checkout = () => {

  const handleCheckout = async () => {
    try {
      const response = await axios.post(`${YOUR_DOMAIN}/checkout`)
      const { id } = response.data
  
      const stripe = await stripePromise
      await stripe.redirectToCheckout({ sessionId: id })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h1>donate a cent for test perpuse</h1>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )

}

export default checkout