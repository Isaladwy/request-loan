import './LoanForm.css'
function InputComponent({value, handlechange, inputName}) {
  return (
    <div className="loan-form-group">
          <label>{inputName}</label>
          <input
            value={value}
            onChange={(event) => {
              handlechange(event.target.value)
            }}
          />
        </div>
  )
}

export default InputComponent
