import ProfileCard from "./ProfileCard";
import GoogleImage from "./images/googleAssistant.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Degital Assistant</p>
            </div>
        </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Google Assistant"
                handle="@googleAssistant99"
                image={{ src: GoogleImage, alt: "Google Assistant Logo" }}
                description = "Google Assistant: Google's AI-powered voice assistant, accessible on devices, performs tasks, provides info, controls smart home devices; leverages machine learning, contextual understanding, and integration with Google services for seamless user assistance."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={{ src: CortanaImage, alt: "Cortana Logo" }}
                description = "Cortana: Microsoft's AI assistant, available across Microsoft devices, aids with tasks, offers recommendations, integrates with Microsoft 365; utilizes machine learning, natural language understanding, and adapts to user preferences, enhancing productivity and personalized assistance."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={{ src: SiriImage, alt: "Siri Logo" }}
                description = "Siri: Apple's AI voice assistant, integrated into devices, performs tasks, answers questions, controls home devices; utilizes natural language processing, voice recognition, and cloud services, enhancing user interactions and convenience."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
