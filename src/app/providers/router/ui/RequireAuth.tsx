import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';

export function RequireAuth({ children }: {children: JSX.Element}) {
  const auth = useSelector(getUserAuthData);
  const navigate = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: navigate }} replace />;
  }

  return children;
}
