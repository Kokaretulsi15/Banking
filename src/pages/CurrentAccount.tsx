const CurrentAccount = () => {
  return (
    <div className="page-container">
      <div className="container my-5">
        <h2 className="text-primary text-center">
          Current Account Opening Form
        </h2>
        <p className="text-center">
          Open a current account for your business and manage transactions
          efficiently.
        </p>

        <form className="row g-3 mt-4">
          {/* Personal Details */}
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="col-12">
            <label className="form-label">Residential Address</label>
            <input type="text" className="form-control" required />
          </div>

          {/* Business Details */}
          <h5 className="text-primary mt-4">Business Details</h5>
          <div className="col-md-6">
            <label className="form-label">Business Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Business Type</label>
            <select className="form-select" required>
              <option value="">Select Type</option>
              <option value="sole">Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="llp">LLP</option>
              <option value="private">Private Limited</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Business Address</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Business PAN</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">GST Number (optional)</label>
            <input type="text" className="form-control" />
          </div>

          {/* Identification */}
          <h5 className="text-primary mt-4">
            Identification & Banking Preferences
          </h5>
          <div className="col-md-6">
            <label className="form-label">Aadhaar Number</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Upload PAN Card</label>
            <input type="file" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Initial Deposit Amount</label>
            <input type="number" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label className="form-label">Internet Banking</label>
            <select className="form-select" required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-primary px-5">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrentAccount;
