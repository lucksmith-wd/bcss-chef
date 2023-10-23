import { useState } from "react";
import logo from "./assets/logo.svg";
import aboutAvif from "./assets/about.avif";
import aboutImg from "./assets/about.jpg";
import aboutWebp from "./assets/about.webp";
import meal01Avif from "./assets/meal-01.avif";
import meal01Webp from "./assets/meal-01.webp";
import meal01Jpg from "./assets/meal-01.jpg";
import meal02Avif from "./assets/meal-02.avif";
import meal02Webp from "./assets/meal-02.webp";
import meal02Jpg from "./assets/meal-02.jpg";
import meal03Avif from "./assets/meal-03.avif";
import meal03Webp from "./assets/meal-03.webp";
import meal03Jpg from "./assets/meal-03.jpg";
import testimonial01Avif from "./assets/testimonial-01.avif";
import testimonial01Webp from "./assets/testimonial-01.webp";
import testimonial01Jpg from "./assets/testimonial-01.jpg";
import testimonial02Avif from "./assets/testimonial-02.avif";
import testimonial02Webp from "./assets/testimonial-02.webp";
import testimonial02Jpg from "./assets/testimonial-02.jpg";
import testimonial03Avif from "./assets/testimonial-03.avif";
import testimonial03Webp from "./assets/testimonial-03.webp";
import testimonial03Jpg from "./assets/testimonial-03.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="primary-header | bg-neutral-900 margin-block-start-24">
        <img className="logo | mx-auto" src={logo} alt="Chef John Wellington" />
        <nav className="primary-navigation | margin-block-start-24">
          <ul className="flex-group | mx-auto">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#meals">Meals</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero | bg-neutral-900 clr-neutral-100 text-center">
          <div className="container">
            <h1 className="fs-900 ff-accent margin-block-end-48">
              Homecooked meals delivered straight to your door
            </h1>
            <div className="flex-group mx-auto">
              <button className="button" data-type="accent">
                Place order
              </button>
              <a href="#about" className="button" data-type="outline">
                More info
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="even-columns">
              <div>
                <picture>
                  <source srcSet={aboutAvif} type="image/avif" />
                  <source srcSet={aboutWebp} type="image/webp" />
                  <img
                    className="shift-up box-shadow-1"
                    src={aboutImg}
                    alt=""
                  />
                </picture>
              </div>
              <div className="flow">
                <header className="section-header">
                  <h2 className="fs-800 ff-accent clr-primary-500">
                    Amazing food without the hassle
                  </h2>
                  <p className="fs-600 uppercase">
                    We do all the work, so all you have to do is sit back and
                    enjoy
                  </p>
                </header>
                <p className="lead">It's ready to go</p>
                <p>
                  Whetherit's for a romantic evening with your significant other
                  or if you're hosting a large party and need food for a big
                  group we're here to help!
                </p>
                <p>
                  We can cater to whatever your needs are, and ensure that our
                  delicious food is delivered at the perfect moment, fresh, hot
                  and ready to eat exactly when you need it to be there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section | bg-neutral-200 text-center">
          <div className="container">
            <header className="section-header" data-decoration="true">
              <h2 className="fs-800 ff-accent clr-primary-500">
                We make great food
              </h2>
              <p className="fs-600 uppercase">
                Cooking is our passion, with quality and freshness being of the
                utmost importance
              </p>
            </header>

            <div className="grid-auto-fit">
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900">
                  Fresh ingredients
                </h3>
                <p>
                  We take food seriously, and the first thing to making great
                  food is using fresh ingredients. If the ingredients don't meet
                  our stadard, we don't use them.
                </p>
              </div>
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900">
                  Professional Chef
                </h3>
                <p>
                  Chef Wellington is a professionally trained chef who's worked
                  in top kitchens around the world.
                </p>
              </div>
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900">
                  Ready for you
                </h3>
                <p>
                  Stop using services where you hav eto re-heat your food. We
                  get it to your door ready to eat, without sacrificing any
                  quality at all.
                </p>
              </div>
              <div>
                <h3 className="fs-500 fw-bold clr-neutral-900">
                  Made with love
                </h3>
                <p>
                  Food is our passion, and we infuse that love and passion into
                  every single plate that we make and deliver straight to your
                  home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          class="section | clr-neutral-100 bg-neutral-900 text-center"
          id="meals"
        >
          <div class="container" data-type="wide">
            <header class="section-header" data-decoration="true">
              <h2 class="fs-800 ff-accent">Some of our meals</h2>
              <p class="fs-600 uppercase">
                Here are a few of our delicious, home-cooked meals that are sure
                to please your taste buds.
              </p>
            </header>

            <div class="even-columns">
              {/* column 1 */}
              <div>
                <figure className="interactive-figure">
                  <picture>
                    <source srcSet={meal01Avif} type="image/avif" />
                    <source srcSet={meal01Webp} type="image/webp" />
                    <img
                      src={meal01Jpg}
                      alt="A nicely presented plate with a cooked peice of salmon on top of a bed of vegetables, with more vegetables on top of it"
                      loading="lazy"
                    />
                  </picture>
                  <figcaption className="padding-32">
                    <h3 className="fs-500 fw-bold uppercase">
                      Pan-seared salmon and veges
                    </h3>
                    <p>
                      A pan-seared filet served on top of a giant bed of
                      delicious vegetables.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* column 2 */}
              <div>
                <figure className="interactive-figure">
                  <picture>
                    <source srcSet={meal02Avif} type="image/avif" />
                    <source srcSet={meal02Webp} type="image/webp" />
                    <img
                      src={meal02Jpg}
                      alt="A nicely presented plate with a cooked peice of salmon on top of a bed of vegetables, with more vegetables on top of it"
                      loading="lazy"
                    />
                  </picture>
                  <figcaption className="padding-32">
                    <h3 className="fs-500 fw-bold uppercase">
                      Pan-seared salmon and veges
                    </h3>
                    <p>
                      A pan-seared filet served on top of a giant bed of
                      delicious vegetables.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* column3 */}
              <div>
                <figure className="interactive-figure">
                  <picture>
                    <source srcSet={meal03Avif} type="image/avif" />
                    <source srcSet={meal03Webp} type="image/webp" />
                    <img
                      src={meal03Jpg}
                      alt="A nicely presented plate with a cooked peice of salmon on top of a bed of vegetables, with more vegetables on top of it"
                      loading="lazy"
                    />
                  </picture>
                  <figcaption className="padding-32">
                    <h3 className="fs-500 fw-bold uppercase">
                      Pan-seared salmon and veges
                    </h3>
                    <p>
                      A pan-seared filet served on top of a giant bed of
                      delicious vegetables.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section testimonials | text-center"
          id="testimonials"
        >
          <div className="container" data-type="wide">
            <header className="section-header">
              <h2 className="clr-primary-500 fs-800 ff-accent">
                What our clients are saying about us
              </h2>
            </header>
            <div className="even-columns">
              {/* testimonial 1 */}
              <div className="card | box-shadow-1" data-type="testimonial">
                <picture>
                  <source srcSet={testimonial01Avif} type="image/avif" />
                  <source srcSet={testimonial01Webp} type="image/webp" />
                  <img
                    src={testimonial01Jpg}
                    alt="A man standing outside, smiling"
                  />
                </picture>
                <div className="card__body">
                  <p>
                    John Wellington and his team make the most amazing food.
                    Every single time I've ordered, I've been blown away by the
                    quality. You can tell they only use fresh ingredients and
                    put a lot of love into ever single meal they make! You
                    really can't ask for anything more, it's always fantastic.
                  </p>
                </div>
                <div className="testimonial__footer | padding-16 bg-neutral-200">
                  <p className="fs-500 clr-accent-500">John Deer</p>
                  <p>Lover of good food</p>
                </div>
              </div>
              {/* testimonial 2 */}
              <div className="card | box-shadow-1" data-type="testimonial">
                <picture>
                  <source srcSet={testimonial02Avif} type="image/avif" />
                  <source srcSet={testimonial02Webp} type="image/webp" />
                  <img
                    src={testimonial02Jpg}
                    alt="A man standing outside, smiling"
                  />
                </picture>
                <div className="card__body">
                  <p>
                    I'm so happy that I found John Wellington! The food is on
                    par with some of the best restaurants I've ever eaten at,
                    but from the comfort of my own home. Every single time I
                    order, it's mouthwateringly delicious.
                  </p>
                </div>
                <div className="testimonial__footer | padding-16 bg-neutral-200">
                  <p className="fs-500 clr-accent-500">Maie Condo</p>
                  <p>Foodie</p>
                </div>
              </div>
              {/* testimonial 3 */}
              <div className="card | box-shadow-1" data-type="testimonial">
                <picture>
                  <source srcSet={testimonial03Avif} type="image/avif" />
                  <source srcSet={testimonial03Webp} type="image/webp" />
                  <img
                    src={testimonial03Jpg}
                    alt="A man standing outside, smiling"
                  />
                </picture>
                <div className="card__body">
                  <p>
                    From simple meals to some of the most extravangant things
                    I've ever eaten, John and his team always deliver. Every
                    time I order something new, I just can't wait for it to be
                    delivered and I know how mouth-wateringly delicious it's
                    going to be. If you like good food, you have to give it a
                    try!
                  </p>
                </div>
                <div className="testimonial__footer | padding-16 bg-neutral-200">
                  <p className="fs-500 clr-accent-500">Sam Reinhert</p>
                  <p>Good food enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="primary-footer section | bg-neutral-900 clr-neutral-100 text-center flow">
        <div className="container | flow">
          <p className="fw-bold">
            Homecooked meals delivered straight to your door
          </p>
          <p>©2022 Persronal Chef Services</p>
          <p>
            555 Boulevard Anywhere, Montreal, Quebec, J1S 1S9 | 123-555-1234
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
