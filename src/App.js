import React from "react";
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "", password: ""
    },
    onSubmit: values => {
      alert("Login Successful");
      resetForm();
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) {
        errors.password = 'Field required';
      }
      return errors;
    }
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} values={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} values={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <br/>
        <br/>
        <button id="submitBtn" type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;