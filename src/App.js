import ProfileCard from "./ProfileCard";
import GoogleImage from './images/googleAssistant.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App(){
    return(
        <div>
        <div>Personal Degital Assistants</div>
        <ProfileCard title="Google Assistant" handle="@googleAssistant99" image = {{ src: GoogleImage, alt: "Google Assistant Logo" }}/>
        <ProfileCard title="Cortana" handle="@cortana32" image = {{src: CortanaImage, alt: "Cortana Logo"}}/>
        <ProfileCard title="Siri" handle="@siri01" image = {{src: SiriImage, alt: "Siri Logo"}}/>
    </div>
    )
   
}

export default App