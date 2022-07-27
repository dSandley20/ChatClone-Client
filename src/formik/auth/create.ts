import ILoginCreateUser from 'interfaces/user/ILoginCreateUser';
import ICreateUserFormik from 'interfaces/formik/ICreateUserFormik';
import * as yup from 'yup';
import { UseMutationResult } from '@tanstack/react-query';
import IAuth from 'interfaces/user/IAuth';

const createValues = (
  mutation: UseMutationResult<IAuth | void, unknown, ILoginCreateUser>
): ICreateUserFormik => {
  const initialValues: ILoginCreateUser = {
    username: '',
    email: '',
    password: '',
  };
  const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const callback = (values: ILoginCreateUser): void => {
    mutation.mutate(values);
  };

  const values: ICreateUserFormik = { values: initialValues, schema, callback };
  return values;
};

export default createValues;
