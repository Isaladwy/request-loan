import { useState, useEffect } from 'react';
import './LoanForm.css'; // Import the CSS file
import PopupModel from './PopupModel';

function LoanForm({title}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    isEmployee: false,
    salary: 'less than $500',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const { name, phone, age, salary } = formData;
    setIsFormValid(
      name.trim() !== '' &&
        phone.trim() !== '' &&
        age.trim() !== '' &&
        salary.trim() !== ''
    );
  }, [formData]);

  return (
    <div className="loan-form-container">
      <h1>{title}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
        }}
      >
        <h1>Requesting a Loan</h1>
        <hr className="loan-form-hr" />
        <div className="loan-form-group">
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(event) => {
              setFormData({ ...formData, name: event.target.value });
            }}
          />
        </div>
        
        <div className="loan-form-group">
          <label>Age</label>
          <input
            type="number"
            value={formData.age}
            min={18}
            max={100}
            onChange={(event) => {
              setFormData({ ...formData, age: event.target.value });
            }}
          />
        </div>
        <div className="loan-form-group">
          <label>Are you an employee?</label>
          <input
            type="checkbox"
            checked={formData.isEmployee}
            onChange={(event) => {
              setFormData({ ...formData, isEmployee: event.target.checked });
            }}
          />
        </div>
        <div className="loan-form-group loan-form-salary">
          <label>Salary</label>
          <select
            value={formData.salary}
            onChange={(event) => {
              setFormData({ ...formData, salary: event.target.value });
            }}
          >
            <option>less than $500</option>
            <option>between $500 and $2000</option>
            <option>above $2000</option>
          </select>
        </div>
        <button className="loan-form-submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      <PopupModel show={showPopup} />
    </div>
  );
}

export default LoanForm;
