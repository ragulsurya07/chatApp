import Chat from "../DashboardComponents/Chat"
import Sidebar from "../DashboardComponents/Sidebar"
import './Style.scss'

function Dashboardpage()  {

  return (
    <div className="home">
        <div className="container">
          <Sidebar />
          <Chat/>
        </div>
    </div>
  )
}

export default Dashboardpage
