export default (theme: any) => ({
  root: {
    position: 'relative',
  },
  rootOpen: {
    zIndex: 99,
  },
  /** Dropdown arrow */
  dropdownArrow: {
    transition: '0.3s',

    fill: theme.inputPlaceholderColorIdle,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  dropdownArrowOpen: {
    transform: 'rotate(180deg)',
  },
  dropdownArrowFocused: {
    fill: theme.inputColorHighlight,
  },
  /** Selected values Wrapper */
  selectElement: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    border: 0,
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  selectLabel: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    cursor: 'pointer',
    userSelect: 'none',

    width: '100%',
    height: '100%',
    border: 0,
    padding: 8,
    minHeight: 44,
    backgroundColor: theme.inputBackgroundColor,

    transition: '0.5s',

    color: theme.inputColorIdle || '#54738c',

    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightMedium,
    fontSize: 14,

    '&:focus': {
      color: theme.inputColorHighlight || '#007aff',
      outline: 'none',
    },
    '&:after': {
      content: '"."',
      visibility: 'hidden',
    },
  },
  selectLabelWithPlaceholder: {
    paddingBottom: 5,
    paddingTop: 23,
  },
  selectLabelInvalid: {
    '&:focus': {
      color: `${theme.inputColorError || '#d0021b'} !important`,
    },
  },
  /** Dropdown */
  dropdownWrapper: {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    width: '100%',

    paddingTop: 10,
    paddingBottom: 10,

    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    border: `solid 1px #cfd8dc`,
    backgroundColor: theme.inputBackgroundColor,
  },
  dropdownSearchItemsWrapper: {
    maxHeight: 195,
    overflowY: 'auto',
  },
  dropdownItem: {
    paddingLeft: 18,
    paddingRight: 18,
    userSelect: 'none',
    cursor: 'pointer',

    color: theme.textColorSecondary,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightRegular,
    fontSize: 14,

    '&:hover': {
      backgroundColor: '#eceff1',
    },
  },
  /** Clickaway */
  clickaway: {
    zIndex: 98,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  /** Error message */
  errorMessage: {
    color: theme.inputErrorMessageColor || '#ea3546',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeightLight,
    fontSize: 10,
  },
});
