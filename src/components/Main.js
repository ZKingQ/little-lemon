import restaurantfood from '../assets/restauranfood.jpg';
import greeksalad from '../assets/greeksalad.jpg';
import img1 from '../assets/Mario and Adrian A.jpg';
import img2 from '../assets/Mario and Adrian b.jpg';
import img3 from '../assets/restaurant.jpg';
import './Main.css';

const Hero = () => {
  return (
    <section className="hero">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant located in the heart of Chicago. We offer a wide variety of dishes from our famous hummus to our delicious shawarma.
        </p>
        <button>
          Reserve a Table
        </button>
      </article>
      <img src={restaurantfood} alt="restaurant food" />
    </section>
  )
}

const Specials = () => {
  const articles = Array(3).fill(
    <>
      <img src={greeksalad} alt="food" />
      <div style={{padding: '0 1rem'}}>
        <h2>
          Greek salad
          <span style={{color: "#F4CE14"}}> $12.00</span>
        </h2>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
        </p>
      </div>
    </>
  )
  return (
    <section className="specials">
      <h1>
        This week specials
      </h1>
      {articles.map((article, index) => {
        return (
          <article key={index}>
            {article}
          </article>
        )
      })}
    </section>
  )
}

const Testimonials = () => {
  const reviews = Array(4).fill(
    <>
      <h1 className='rating'>
          Rating: 5/5
        </h1>
        <img src={img3} alt="customer" />
        <h2>
          John Doe
        </h2>
        <p>
          "The food was amazing, the service was great and the atmosphere was perfect for a date night. I will definitely be back!"
        </p>
    </>
  )
  return (
    <section className='testimonials'>
      <h1>
        What our customers say
      </h1>
      {reviews.map((review, index) => {
        return (
          <article key={index}>
            {review}
          </article>
        )
      })}
    </section>
  )
}

const Description = () => {
  return (
    <section className='description'>
      <h1>
        Little Lemon
      </h1>
      <h2>
        Chicago
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, risus quis viverra tincidunt, nisl nunc aliquet nunc, vel imperdiet eros nisi quis urna. Donec euismod, arcu non aliquam aliquet, nunc odio tincidunt urna, auctor aliquam justo tortor et arcu. Sed in lacus at nisl aliquet vulputate. Nam euismod, nisl a lacinia tincidunt, nunc augue aliquet orci, id ultrices lorem nunc nec sem. Sed auctor, nunc eget aliquet luctus, nisi metu
      </p>
      <img src={img1} alt='food' />
      <img src={img2} alt='food2' />
    </section>
  )
}

function Main() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <Description />
    </main>
  )
}

export default Main;