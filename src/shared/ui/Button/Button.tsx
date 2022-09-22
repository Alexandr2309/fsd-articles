import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, useRef } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    ...otherProps
  } = props;
  return (
    <button
      type="button"
      {...otherProps}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
