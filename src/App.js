import profilePic from "./assets/profile.jpg";

function App() {
  return (
    <div>
      <h1>Hi, I'm David</h1>
      <img src={profilePic} alt="Profile picture" />
      <h2>About Me</h2>
      <p>I am a trchnologist with a passion for tech.</p>
      <a href="https://github.com/DAVIDMWELU">GitHub</a>
      <a href="https://linkedin.com/in/david-mwelu-28a216354">LinkedIn</a>
    </div>
  );
}

export default App;
