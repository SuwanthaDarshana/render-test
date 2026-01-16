import { useNavigate } from "react-router-dom";

const About = () => {
  const backtoHome = useNavigate();

  return (
    <div>
      <h3>About</h3>
      <button onClick={() => backtoHome("/")}>
        Back to Home (useNavigate)
      </button>
    </div>
  );
};

export default About;
