import logo from '/logo.png'
import './App.css'
import Ticket from "./Ticket.jsx";
import SocialBar from "./SocialBar.jsx";

function App() {

  return (
    <>
        <img src={logo} className="logo" alt="Vite logo" />
        <Ticket/>

        <a className="signup" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc80vg5aTbhFolYtFCpKQ6sm-Y06Yt7vvxct3NSCVjvsPZXug/viewform?usp=send_form">Sign up now to be a fighter... Click here!</a>
        <SocialBar/>

    </>
  )
}

export default App
