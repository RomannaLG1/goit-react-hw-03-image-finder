import { MutatingDots } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => (
  <Spinner>
    <MutatingDots
      height="100"
      width="100"
      color="#3f51b5"
      secondaryColor="#303f9f"
      radius="22.5"
      ariaLabel="mutating-dots-loading"
    />
  </Spinner>
);
