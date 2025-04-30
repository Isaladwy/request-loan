function MyComponent({formData, setFormData}) {
  return (
    <div className="loan-form-group">
          <label>Phone</label>
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
  )
}

export default MyComponent
