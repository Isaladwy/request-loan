import './LoanForm.css'
function PhoneComponent({value, handlechange, currentInputs}) {
  return (
    <div className="loan-form-group">
          <label>Phone</label>
          <input
            type="tel"
            minLength={10}
            maxLength={12}
            value={value}
            onChange={(event) => {
              handlechange(event.target.value)
            }}
          />
        </div>
  )
}

export default PhoneComponent
