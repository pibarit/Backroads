import { touroptiondata } from "./data";

function Tours() {
  return (
    <>
      <section class="section" id="tours">
        <div class="section-title">
          <h2>featured <span>tours</span></h2>
        </div>

        <div class="section-center featured-center">

          {touroptiondata.map((name) => {
            const { id, img, title, description, location, duration, price } = name;
            return (
              <>
                <article class="tour-card" key={id}>
                  <div class="tour-img-container">
                    <img src={img} class="tour-img" alt="" />
                    <p class="tour-date">august 26th, 2020</p>
                  </div>
                  <div class="tour-info">
                    <div class="tour-title">
                      <h4>{title}</h4>
                    </div>
                    <p>
                      {description}
                    </p>
                    <div class="tour-footer">
                      <p>
                        <span><i class="fas fa-map"></i></span> {location}
                      </p>
                      <p>{duration}</p>
                      <p>{price}</p>
                    </div>
                  </div></article>
              </>
            );

          })

          }
        </div>
      </section>
    </>)
}
export default Tours;