// import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
// import toast, { Toaster } from 'react-hot-toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import * as yup from 'yup';
import { Header, StyledForm, StyledBtn, StyledInput } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  schema = yup.object().shape({
    searchValue: yup.string().trim().required(),
  });

  handleSubmit = (value, { resetForm }) => {
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
        <Header>
          <StyledForm>
            <StyledBtn type="submit"><FcSearch size={40}/></StyledBtn>

            <StyledInput
              name="searchValue"
              type="text"
              // autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />

            <ErrorMessage
              name="searchValue"
              render={msg => toast.error(<div>{msg}</div>)}
            />
          </StyledForm>
        </Header>
      </Formik>
    );
  }
}
