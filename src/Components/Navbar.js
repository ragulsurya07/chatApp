import {Link} from 'react-router-dom';


function Navbar (props) {
  return (
    <nav>
    <header className='row block center'>
        <div>
            <a href="/">
            <h1>Chatogram</h1>
            </a>
        </div>
        <div>
            <Link className='navlink' to ="/login"> Login </Link>
            <Link className='navlink' to ="/signup"> Signup </Link>
        </div>
    </header>
</nav>
  )
}

export default Navbar
