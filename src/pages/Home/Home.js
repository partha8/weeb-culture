import React from "react";
import { Footer, RingOfFire, Sidebar } from "../../components";
import rengoku from "../../assets/rengoku2.png";

import "./home.css";
import { ParticlesContainer } from "../../components";
import { useStateContext } from "../../context/StateProvider";

import { Link } from "react-router-dom";

export const Home = () => {
  const { categories, videosDispatch } = useStateContext();
  console.log(categories);
  return (
    <>
      <main className="container home-container">
        <Sidebar />
        <div>
          {/* header/hero */}
          <header className="header">
            <ParticlesContainer />
            <div className="text-img-container">
              <div className="text-container">
                <h2>
                  Some text will come here, idk yet, so please help! LMAO
                  HAHAHAHAHAHAHAHAHAHA jbdfksjdbfksdbfkdb
                </h2>
              </div>
              <div className="img-container">
                <img className="hero-img" src={rengoku} />
                <RingOfFire />
              </div>
            </div>
          </header>

          {/* categories section */}
          <div className="categories">
            <h3 className="text-center">Categories</h3>
            <section className="categories-container">
              {categories.map((category) => {
                const { _id, categoryName, image } = category;
                return (
                  <article key={_id} className="category">
                    <Link
                      to="/explore"
                      onClick={() =>
                        videosDispatch({
                          type: "SORT_BY_CATEGORY",
                          payload: categoryName,
                        })
                      }
                    >
                      <img
                        className="category-img"
                        src={image.src}
                        alt={image.alt}
                      />
                      <div className="desc">
                        <h4 className="card-title">{categoryName}</h4>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
