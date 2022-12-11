// import PropTypes from 'prop-types';

import { LoadBtn } from "./Button.styled";

export const Button = ({onClick}) => (
    <LoadBtn onClick={onClick} type='submit'>Load more</LoadBtn>
);