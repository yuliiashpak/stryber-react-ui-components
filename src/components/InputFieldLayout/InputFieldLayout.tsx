import * as React from "react";
import classNames from "classnames";
import { PrependBackground } from '../Icons';
import withStyles, { WithStyles } from 'react-jss';
import styles from './InputFieldLayout.styles';

interface IInputFieldLayoutProps {
  placeholder?: string;
  disabled?: boolean;
  isPlaceholderCollapsed: boolean;
  errorMsg?: string;
  prependContent?: any;
  appendContent?: any;
  children?: any;
}

const InputFieldLayout = (props: IInputFieldLayoutProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    errorMsg,
    disabled,
    prependContent,
    appendContent,
    placeholder,
    isPlaceholderCollapsed,
    children,
    ...rest
  } = props;
  return (
    <>
      <div
        {...rest}
        className={classNames([
          classes.root,
          disabled ? classes.rootDisabled : null,
          errorMsg ? classes.rootInvalid : null,
        ])}
      >
        <div
          className={classNames([
            classes.prepend,
            disabled ? classes.prependDisabled : null,
            prependContent ? classes.prependMargin : null,
            errorMsg ? classes.prependInvalid : null,
          ])}
        >
          { prependContent ? <div className={classes.prependContent}>{prependContent}</div> : null}
          { prependContent ? <PrependBackground className={classes.prependBackground}/> : null}
        </div>
        <div className={classes.fieldWrapper}>
          {
            placeholder ?
              (<div
                className={classNames([
                  classes.placeholder,
                  isPlaceholderCollapsed ? classes.placeholderCollapsed : null,
                  errorMsg ? classes.placeholderInvalid : null,
                ])}
              >
                { placeholder }
              </div>) : null
          }
          { children }
        </div>
        <div
          className={classNames([
            classes.append,
          ])}
        >
          { appendContent }
        </div>
      </div>
      {
        errorMsg ?
          (
            <div
              className={classes.errorMessage}
            >
              { errorMsg }
            </div>
          ) : null
      }
    </>
  );
};

const StyledInputFieldLayout = withStyles(styles)(InputFieldLayout);
export default StyledInputFieldLayout;
export {
  StyledInputFieldLayout as InputFieldLayout
};
