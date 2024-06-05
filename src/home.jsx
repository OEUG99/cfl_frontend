import CFL_Navbar from "./Navbar.jsx";
import BackgroundVideo from "./BackgroundVideo";
import Landing from "./landing.jsx";
import Fightposters from "./fightposters.jsx";
import EventDetailsCard from "./EventDetailsCard.jsx";

const App = () => {
    return (
        <div className="">
            <CFL_Navbar/>

                <div className="landing ">
                    <BackgroundVideo/>
                    <Landing/>
                </div>
                <EventDetailsCard/>
        </div>
    );
};

export default App;
