import style from './Range.module.css';
import PropTypes from 'prop-types';

export const Range = ({min, max, value, label, onInput, unit, step}) => {
  console.log();
  return (
    <label className={style.wrap}>
      <span className={style.label}>{label}</span>
      <input type='range' className={style.range} max={max} min={min} value={value} step={step} onInput={onInput} />
      <span className={style.value}>{value}{unit}</span>
    </label>
  )
}


Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  label: PropTypes.string,
};
