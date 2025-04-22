import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios' 


const PUBLIC_STRIPE_KEY = 'pk_live_51REuM3EsaPshQGwVZxSzQyBw2SJj4CnnSxuf6yWokbg5dRVAM0WpDFrIHnlF0sqQgykl4WVxCw5gA6bhDHWeyrFE00muoS3dkU'
const BACKEND_URL = 'http://localhost:3000';
const PRICE_ID_050 = 'price_1RGPe4EsaPshQGwV6vXbMrhE'
const PRICE_ID_051 = 'price_1RGkyMEsaPshQGwV7rsnw60y'
const PRICE_ID_052 = 'price_1RGlWzEsaPshQGwVGwpZ9TSb'

const stripePromise = loadStripe(`${PUBLIC_STRIPE_KEY}`)

const checkout = () => {
  const handleCheckout = async (price_id) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/checkout/${price_id}`)
      const { id } = response.data
  
      const stripe = await stripePromise
      await stripe.redirectToCheckout({ sessionId: id })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h1>donate a few cents for test purpose</h1>
      <button onClick={() => handleCheckout(`${PRICE_ID_050}`)}>Donate 0.5€</button>
      <button onClick={() => handleCheckout(`${PRICE_ID_051}`)}>Donate 0.51€</button>
      <button onClick={() => handleCheckout(`${PRICE_ID_052}`)}>Donate 0.52€</button>
    </div>
  )

}

export default checkout