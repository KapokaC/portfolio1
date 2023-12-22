import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { Fade } from "react-reveal";
// import Fade from "react-reveal/Fade";

const About = () => {

return (
<Container>
    <Row className="mt-5">
        <Col md={5}>
            <Slide left>
                <lottie-player
                    src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "90%" }}
        loop
        autoplay>
                    </lottie-player>
                </Slide>
        </Col>
        <Col md={7}>
            <Fade duration={3000}>
                <p className="home-about-body">
                    My name is <b className="purple">Charity Kapoka</b>and I am a <b className="purple">Software Engineering Graduate from</b><b className="purple">University of Salford </b>
                    <br />
                    <br />
                    I am proficient in various programming languages including &nbsp; 
                    <b className="purple"> {" "}
                    JavaScript, Java, CSS, PHP and HTML. {" "}
                    </b>
                    <br />
                    <br />
                    I also have experience working with frameworks and libraries including &nbsp;

            <b className="purple">
            {" "}
            NodeJS, ReactJS.{" "}
            </b>
        <br />
        <br />
                </p>    
            </Fade>
        </Col>
    </Row>
</Container>
);
};

export default About;