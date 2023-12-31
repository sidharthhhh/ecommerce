import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {

  const addToCartHandler = () => {

  }
  return (
    <div className='home'>
      <section>

      </section>
      <h1>Latest Product
      <Link to="/search"  className='findmore'>More</Link>
      </h1>

      <main>
        <ProductCard productId='sdfsfe' name="macbook" price={324} stock={34} handler = {addToCartHandler}
        photo='https://i.pinimg.com/564x/0d/1a/3f/0d1a3fe737517194b8b1866232ecd5fb.jpg'
        />
      </main>
    </div>
  )
}

export default Home