import CFL_Navbar from "./Navbar.jsx";
import Fightposters from "./fightposters.jsx";

const Tickets = () => {
    return (
        <div className="App">
            <CFL_Navbar/>
            <iframe src="https://creatorfightleague.ticketspice.com/preview/676bd38aabf8400c85e5d77d4631a150"
                    width="100%" height="600px" scrolling="yes" frameBorder="0" border="0"></iframe>
        </div>
    )
        ;
};

export default Tickets;