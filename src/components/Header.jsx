import "./Header.css";

function Header() {
    return (
        <div>
       <nav >
          <div className="brandLogo">
            <img src="/public/images/brand_logo.png" alt="" />
          </div>
          <ul>
            <li href="#" >Home</li>
            <li href="#" >About</li>
            <li href="#" >Location</li>
            <li href="#" >Contact</li>
          </ul>
          <button>Login</button>
       </nav>
    </div>
    ) ;
}

export default Header;