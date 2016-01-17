// import "babel-polyfill";

let constant = obj => {
  return Object.assign(
    Object.create({
      values() {
        return Object.keys(this).map(k => this[k]);
      }
    }), obj);
};

const styleMaps = {

  SIZES: {
    'large': 'lg',
    'medium': 'md',
    'small': 'sm',
    'xsmall': 'xs',
    'lg': 'lg',
    'md': 'md',
    'sm': 'sm',
    'xs': 'xs'
  },
  BGS: {
    'transparent': 'transparent',
    'light': 'light',
    'dark': 'dark'
  },
  GRID_COLUMNS: 12
};

export const Sizes = constant({
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
});

export const State = constant({
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
});

export const DEFAULT = '';
export const PRIMARY = 'primary';
export const LINK = 'link';
export const INVERSE = 'inverse';
export const FILLED = 'filled';
export const ROUNDED = 'rounded';
export const ICON = 'icon';

export default styleMaps;
