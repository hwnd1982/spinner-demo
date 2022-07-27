import style from './Boards.module.css';
import PropTypes from 'prop-types';

export const Boards = ({children}) => <div className={style.container}>{children}</div>;

Boards.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};
