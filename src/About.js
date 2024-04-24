import { About } from "./data";

function ABout(name){
    return(
        <section class="section" id="about">
      <div class="section-title">
        <h2>about <span>us</span></h2>
      </div>
        {About.map((name)=>{
          const{img,descp1,descp2}=name;
          return(
            <div class="section-center about-center">
        <div class="about-img">
          <img
            src={img}
            class="about-photo"
            alt="awesome beach"
          />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            {descp1}
          </p>
          <p>
            {descp2}
          </p>
          <a href="#" class="btn">read more</a>
        </article>
      </div>
          );
        })}
    </section>
    )
}

export default ABout;