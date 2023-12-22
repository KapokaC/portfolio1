import { Container, Row, Col } from "react-bootstrap"
import Particle from "../Particle";
import Typing from "./Typing";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";
import About from "./About";
import Footer from "./About";

const Home = () => {
    return (
    <section className="home-section">
            <Container fluid id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={8} className="home-header">
                            <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                            </h1>
                <h1 className="heading-name">
                I'M
                <strong className="main-name"> Charity Kapoka </strong>
                            </h1>
                <div className="typing-homeclass">
                <Typing />
                </div>
                <div className="sociallink-home">
                    <ul className="homeaboutsociallinks">
                <li className="socialicons">
                    <a
                      href="https://github.com/KapokaC"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                                    </li> 
                <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/charity-kapoka-ba213b172/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>                 
                </ul>                
                </div>
                        </Col>
                       <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="profile.png"
                      alt="home pic"
                      className="img-fluid"
                      
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
                    </Row>
                </Container>
            </Container>
            <About /> 
            <Footer />
    </section>
    );
};

export default Home; 