export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h5 className="navbar-brand" href="#">
        Theodore Bennett
      </h5>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">



          <li className="nav-item active">
            <a className="nav-link " href="#">
                <h6>
              Home</h6>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <h6>
              About</h6>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
                <h6>
              Portfolio
              </h6>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
                <h6>
              Contact</h6>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

