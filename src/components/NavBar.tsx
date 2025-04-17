const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Logo
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Personal Banking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Corporate Banking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Agricultural & Rural Banking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  NRI Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  International Banking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>

            {/* Right side: Search and Login */}
            <form className="d-flex me-3" role="search">
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ maxWidth: "150px" }}
              />
              <button className="btn btn-outline-light btn-sm" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
