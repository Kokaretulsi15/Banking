const PersonalNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info text-dark py-3 fs-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Dropdown - Personal Banking */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account Opening & Transaction History
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Savings Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Current Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Salary Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Joint Account
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cards
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Credit Card
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Debit Card
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Prepaid Cards
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Loans
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Car Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Loan
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Deposits and Investments
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Fixed Depsit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Recurring Deposit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mutual Fund
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Life Stage Solutions
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Student Plans
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Professionals
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Family Planning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Retirement
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✨ Add Welcome Section Below Navbar ✨ */}
      <div className="container mt-4">
        <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-md-6">
              <h3 className="display-5 fw-bold text-primary">
                Welcome to Personal Banking
              </h3>
              <p className="fs-5 text-secondary">
                Explore a wide range of banking services tailored to meet your
                personal financial needs. From savings accounts to loans, cards,
                and investment options – we have everything to support your
                financial journey.
              </p>
              <button className="btn btn-info btn-lg text-white" type="button">
                Explore Now
              </button>
            </div>

            {/* Right Column - Local Image */}
            <div className="col-md-6 text-center">
              <img
                src="/img/PersonalBanking.png"
                alt="Personal Banking"
                className="img-fluid"
                style={{ maxHeight: "320px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">Accounts</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* Savings Account */}
          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-piggy-bank fs-1 text-info mb-3"></i>
                <h5 className="card-title">Savings Account</h5>
                <p className="card-text">
                  Earn interest while keeping your money safe and accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Current Account */}
          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-bank fs-1 text-info mb-3"></i>
                <h5 className="card-title">Current Account</h5>
                <p className="card-text">
                  Ideal for businesses with high transaction needs.
                </p>
              </div>
            </div>
          </div>

          {/* Salary Account */}
          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-wallet2 fs-1 text-info mb-3"></i>
                <h5 className="card-title">Salary Account</h5>
                <p className="card-text">
                  Convenient account for salaried individuals with exclusive
                  benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Joint Account */}
          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-people fs-1 text-info mb-3"></i>
                <h5 className="card-title">Joint Account</h5>
                <p className="card-text">
                  Share account access and manage finances with a partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Cards */}
      <h2 className="text-center text-primary mb-4 mt-5">Cards</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Debit Card */}
        <div className="col">
          <div className="card h-100 shadow-sm border-info ">
            <div className="card-body text-center">
              <i className="bi bi-credit-card fs-1 mb-3"></i>
              <h5 className="card-title">Debit Card</h5>
              <p className="card-text">
                Access your funds directly from your bank account for everyday
                purchases.
              </p>
            </div>
          </div>
        </div>

        {/* Credit Card */}
        <div className="col">
          <div className="card h-100 shadow-sm border-info ">
            <div className="card-body text-center">
              <i className="bi bi-credit-card-2-back fs-1 mb-3"></i>
              <h5 className="card-title">Credit Card</h5>
              <p className="card-text">
                Borrow funds to make purchases and pay later with interest or
                rewards.
              </p>
            </div>
          </div>
        </div>

        {/* Prepaid Card */}
        <div className="col">
          <div className="card h-100 shadow-sm border-info ">
            <div className="card-body text-center">
              <i className="bi bi-credit-card-2-front fs-1 mb-3"></i>
              <h5 className="card-title">Prepaid Card</h5>
              <p className="card-text">
                Load funds onto the card and use it like a debit or credit card
                for secure transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">Loans</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-piggy-bank fs-1 text-info mb-3"></i>
                <h5 className="card-title">Personal Loan</h5>
                <p className="card-text">
                  Unsecured loan for personal needs like travel, medical, or
                  emergencies.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-bank fs-1 text-info mb-3"></i>
                <h5 className="card-title">Home Loan</h5>
                <p className="card-text">
                  Loan for purchasing, building, or renovating a house.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-wallet2 fs-1 text-info mb-3"></i>
                <h5 className="card-title">Car Loan</h5>
                <p className="card-text">
                  Loan to purchase new or used vehicles with flexible EMI
                  options.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body text-center">
                <i className="bi bi-people fs-1 text-info mb-3"></i>
                <h5 className="card-title">Education Loan</h5>
                <p className="card-text">
                  Financial support for higher studies in India or abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center text-primary mb-4 mt-5">
        Deposits & Investments
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Fixed Deposit */}
        <div className="col">
          <div className="card h-100 shadow-sm border border-info">
            <div className="card-body text-center">
              <i className="bi bi-lock fs-1 text-info mb-3"></i>
              <h5 className="card-title">Fixed Deposit (FD)</h5>
              <p className="card-text">
                Earn higher interest rates by locking in your funds for a fixed
                period.
              </p>
            </div>
          </div>
        </div>

        {/* Recurring Deposit */}
        <div className="col">
          <div className="card h-100 shadow-sm border border-info">
            <div className="card-body text-center">
              <i className="bi bi-arrow-repeat fs-1 text-success mb-3"></i>
              <h5 className="card-title">Recurring Deposit (RD)</h5>
              <p className="card-text">
                Invest a fixed amount monthly and earn assured returns over
                time.
              </p>
            </div>
          </div>
        </div>

        {/* Mutual Funds */}
        <div className="col">
          <div className="card h-100 shadow-sm border border-info">
            <div className="card-body text-center">
              <i className="bi bi-graph-up fs-1 text-warning mb-3"></i>
              <h5 className="card-title">Mutual Funds</h5>
              <p className="card-text">
                Diversified investment option managed by professionals for
                long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalNavbar;
