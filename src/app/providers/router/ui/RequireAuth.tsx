import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/route';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const navigate = useLocation();
  const userRoles = useSelector(getUserRoles);

  const isHasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: navigate }} replace />;
  }

  if (!isHasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: navigate }} replace />;
  }

  return children;
}
