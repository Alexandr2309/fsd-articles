import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import React, { FC, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: string
  children: React.ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
      to={to}
    >
      {children}
    </Link>
  );
});
