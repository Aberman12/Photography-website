import React from "react";
import { Link } from "react-router-dom";

const Home = props => (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
        <li data-target="#myCarousel" data-slide-to="3" />
        <li data-target="#myCarousel" data-slide-to="4" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img
            className="first-slide"
            src="https://wallpaper-house.com/data/out/8/wallpaper2you_232666.jpg"
            alt=" First Image goes here"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Africa</h1>
              <p>Kenya/Uganda/Rwanda</p>
              <p>
                <Link
                  to="/Africa"
                  className="btn btn-lg btn-primary"
                  role="button"
                >
                  View Collection
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <img
            className="second-slide"
            src="http://www.wallpaperdx.com/images/guatemala-tikal-full-hd.jpg"
            alt=" First Image goes here"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Central America</h1>
              <p>Mexica/Belize/Guatemala</p>
              <p>
                <Link
                  to="/Central-America"
                  className="btn btn-lg btn-primary"
                  role="button"
                >
                  View Collection
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <img
            className="third-slide"
            src="http://7wallpapers.net/wp-content/uploads/3_Prague.jpg"
            alt=" First Image goes here"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Europe</h1>
              <p>Western/Eastern Europe</p>
              <p>
                <Link
                  to="/Europe"
                  className="btn btn-lg btn-primary"
                  role="button"
                >
                  View Collection
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <img
            className="third-slide"
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Western_wall_jerusalem_night.jpg"
            alt=" First Image goes here"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Middle-East</h1>
              <p>Israel</p>
              <p>
                <Link
                  to="/Middle-East"
                  className="btn btn-lg btn-primary"
                  role="button"
                >
                  View Collection
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <img
            className="third-slide"
            src="https://www.desktop-background.com/download/2560x1440/2011/01/30/150253_yosemite-hd-wallpapers_2560x1600_h.jpg"
            alt=" First Image goes here"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>North-America</h1>
              <p>CA/LA/NY/UT</p>
              <p>
                <Link
                  to="/North-America"
                  className="btn btn-lg btn-primary"
                  role="button"
                >
                  View Collection
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        className="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span
          className="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        />
        <span className="sr-only">Next</span>
      </a>
    </div>
    {/* --------Marketing starts Here----------- */}
    <div className="container marketing">
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-circle"
            src="https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="marketing image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            voluptatibus veritatis sed beatae iusto recusandae obcaecati quia
            suscipit earum ea.
          </p>
          <p>
            <a href="#" className="btn btn-success" role="button">
              View Details
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="img-circle"
            src="https://images.pexels.com/photos/169928/pexels-photo-169928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="marketing image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            voluptatibus veritatis sed beatae iusto recusandae obcaecati quia
            suscipit earum ea.
          </p>
          <p>
            <a href="#" className="btn btn-success" role="button">
              View Details
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="img-circle"
            src="https://images.pexels.com/photos/298298/pexels-photo-298298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="marketing image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            voluptatibus veritatis sed beatae iusto recusandae obcaecati quia
            suscipit earum ea.
          </p>
          <p>
            <a href="#" className="btn btn-success" role="button">
              View Details
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* ------- Divider ------ */}
    <hr className="feature-divider" />
    {/* ---------- last part ---------- */}
    <div className="row feature">
      <div className="col-md-7">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illo
          est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.
        </p>
      </div>
      <div className="col-md-5">
        <img
          className="img-responsive center-block feature-image"
          src="https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
    </div>
    <hr className="feature-divider" />

    <div className="row feature">
      <div className="col-md-5">
        <img
          className="img-responsive center-block feature-image"
          src="https://images.pexels.com/photos/297648/pexels-photo-297648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
      <div className="col-md-7">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illo
          est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.
        </p>
      </div>
    </div>
    <hr className="feature-divider" />

    <div className="row feature">
      <div className="col-md-7">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, illo
          est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          illo est officiis. Aliquid iusto atque cum. Similique quo quasi,
          iusto.
        </p>
      </div>
      <div className="col-md-5">
        <img
          className="img-responsive center-block feature-image"
          src="https://images.pexels.com/photos/154243/pexels-photo-154243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Home;
