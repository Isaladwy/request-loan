import { useState, useEffect } from 'react';

function LoanForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    isEmployee: false,
    salary: 'less than $500',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Check if all required fields are filled
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
    <div
      style={{
        backgroundColor: '#111111',
        textAlign: 'center',
        width: '50%',
        margin: 'auto',
        padding: '20px',
        borderRadius: '20px',
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();

          alert('Form submitted successfully!');
        }}
      >
        <h1>Requesting a Loan</h1>
        <hr style={{ width: '80%' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(event) => {
              setFormData({ ...formData, name: event.target.value });
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <label htmlFor="">Phone</label>
          <input
            type="tel"
            minLength={10}
            maxLength={12}
            value={formData.phone}
            onChange={(event) => {
              setFormData({ ...formData, phone: event.target.value });
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <label htmlFor="">Age</label>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <label htmlFor="">Are you an employee?</label>
          <input
            type="checkbox"
            checked={formData.isEmployee}
            onChange={(event) => {
              setFormData({ ...formData, isEmployee: event.target.checked });
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <label htmlFor="">Salary</label>
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
        <button style={{ padding: '10px 20px' }} disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoanForm;
