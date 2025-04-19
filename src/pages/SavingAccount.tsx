const SavingAccount = () => {
  return (
    <div className="container my-5">
      <h2 className="text-primary text-center mb-4">Open Savings Account</h2>
      <p className="text-center">
        Earn interest while keeping your money safe and accessible. Fill the
        form below to open your savings account.
      </p>

      <form className="mt-4">
        <div className="row g-3">
          {/* Full Name */}
          <div className="col-md-6">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="col-md-6">
            <label className="form-label">Date of Birth *</label>
            <input type="date" className="form-control" required />
          </div>

          {/* Mobile Number */}
          <div className="col-md-6">
            <label className="form-label">Mobile Number *</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label">Email ID *</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <label className="form-label">Gender *</label>
            <select className="form-select" required>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* PAN Number */}
          <div className="col-md-6">
            <label className="form-label">PAN Number *</label>
            <input
              type="text"
              className="form-control"
              placeholder="ABCDE1234F"
              required
            />
          </div>

          {/* Aadhaar Number */}
          <div className="col-md-6">
            <label className="form-label">Aadhaar Number *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your 12-digit Aadhaar number"
              required
            />
          </div>

          {/* Address */}
          <div className="col-md-6">
            <label className="form-label">Residential Address *</label>
            <textarea
              className="form-control"
              rows={2}
              required
              placeholder="Enter your full address"
            ></textarea>
          </div>

          {/* Occupation */}
          <div className="col-md-6">
            <label className="form-label">Occupation *</label>
            <select className="form-select" required>
              <option value="">Select occupation</option>
              <option>Salaried</option>
              <option>Self-Employed</option>
              <option>Student</option>
              <option>Retired</option>
              <option>Other</option>
            </select>
          </div>

          {/* Nominee Name */}
          <div className="col-md-6">
            <label className="form-label">Nominee Name (optional)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter nominee name"
            />
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-info text-white px-4">
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SavingAccount;
