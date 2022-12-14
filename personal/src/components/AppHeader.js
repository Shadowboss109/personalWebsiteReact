export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
      <h5 className="navbar-brand" href="#">
        Theodore Bennett
      </h5>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">



          <li className="nav-item active">
            <a className="nav-link " href="/">
                <h6>
              Home</h6>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
            <h6>
              About</h6>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/portfolio">
                <h6>
              Portfolio
              </h6>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
                <h6>
              Contact</h6>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

