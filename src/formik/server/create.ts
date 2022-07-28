import IFormik from 'interfaces/common/IFormik';
import * as yup from 'yup';
import { UseMutationResult } from '@tanstack/react-query';
import IServerCreate from 'interfaces/server/IServerCreate';

// TODO fix this any

const createServerValues = (mutation: any): IFormik => {
  const initialValues: IServerCreate = { name: '' };
  const schema = yup.object({
    name: yup.string().required(),
  });
  const callback = (values: IServerCreate): void => {
    mutation.mutate(values);
  };

  const values: IFormik = { values: initialValues, schema, callback };
  return values;
};

export default createServerValues;
