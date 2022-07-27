import style from './Handlers.module.css';
import PropTypes from 'prop-types';

export const Handlers = ({children}) => <div className={style.container}>{children}</div>;

Handlers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
