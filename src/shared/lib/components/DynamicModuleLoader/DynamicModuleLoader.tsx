/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/storeProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

/**
 *
 * @param {DynamicModuleLoaderProps} props
 * @constructor
 */
export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true,
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers)
      .forEach(([name, reducer]) => {
        const mountedReducers = store.reducerManager.getReducerMap();
        if (!(name in mountedReducers)) {
          store.reducerManager.add(name as StateSchemaKey, reducer);
          dispatch({ type: `@INIT ${name} reducer` });
        }
      });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers)
          .forEach(([name, reducer]) => {
            store.reducerManager.remove(name as StateSchemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          });
      }
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
