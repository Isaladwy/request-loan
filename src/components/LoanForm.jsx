function LoanForm() {
  return (
    <div style={{ backgroundColor: 'black', textAlign: 'center', width: '50%' }}>
      <form>
        <h1>Requesting a Loan</h1>
        <hr />
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
          <input type="text" />
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
          <input type="tel" />
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
          <input type="number" />
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
          <input type="checkbox" />
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
          <select>
            <option>less than $500</option>
            <option>between $500 and $2000</option>
            <option>above $2000</option>
          </select>
        </div>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default LoanForm;
