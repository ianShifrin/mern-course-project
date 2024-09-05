import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby echo park fashion axe tousled la croix wayfarers disrupt
            hoodie. Hoodie semiotics messenger bag authentic copper mug drinking
            vinegar blog ramps. Meggings hella XOXO, small batch gochujang
            cliche DIY try-hard venmo green juice blog cupping freegan.
            Cold-pressed +1 paleo chartreuse fashion axe ascot selvage slow-carb
            disrupt. Cliche pour-over meggings ugh, letterpress sus pinterest
            same hoodie shoreditch. Trust fund tbh fixie heirloom echo park 90's
            actually JOMO.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
