// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import * as yup from 'yup';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  schema = yup.object().shape({
    searchValue: yup.string().min(3).trim().required(),
});

  handleSubmit = (value, {resetForm}) => {
   console.log(value);
    this.props.onFormSubmit(value.searchValue.toLowerCase().trim());
    resetForm();
  };

  render() {
    const { state, schema, handleSubmit } = this;
    return (
         <Formik
          initialValues={state}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
      <header>
     
          <Form>
            <button type="submit">
              <span>Search</span>
            </button>

            <Field
              name="searchValue"
              // value={this.state.searchValue}
              // onChange={this.handleInputChange}
              type="text"
              // autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage name="searchValue" render={msg => toast(<div>{msg}</div>)} /> 
            <ToastContainer/>
          </Form>
        
      </header>
      </Formik>
    );
  }
}
