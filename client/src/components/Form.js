import React, { PropTypes } from 'react'

const Form = ({ value, onChange, onSubmit }) => (<form onSubmit={onSubmit} className="form-horizontal">
    <div className="form-group">
      <h1 className="text-center">Find the weather in your city</h1>
      <label className="control-label col-sm-2">Name:</label>
      <div className="col-sm-10">
        <input className="form-control" type="text" value={value} onChange={onChange} />
      </div>
    </div>
    <div className="form-group">
      <div className="col-sm-offset-2 col-sm-10">
        <button className="btn btn-default" type="submit">Submit</button>
      </div>
    </div>
  </form>
)

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Form
