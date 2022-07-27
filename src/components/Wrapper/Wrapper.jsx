import style from './Wrapper.module.css';
import PropTypes from 'prop-types';

export const Wrapper = ({children}) => <div className={style.container}>{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
