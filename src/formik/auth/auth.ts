import ILoginCreateUser from 'interfaces/user/ILoginCreateUser';
import IFormik from 'interfaces/common/IFormik';
import IAuth from 'interfaces/user/IAuth';
import * as yup from 'yup';
import { UseMutationResult } from '@tanstack/react-query';

const authValues = (
  mutation: UseMutationResult<IAuth | void, unknown, ILoginCreateUser>
): IFormik => {
  const initialValues: ILoginCreateUser = { username: '', password: '' };
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string(),
  });
  const callback = (values: ILoginCreateUser): void => {
    mutation.mutate(values);
  };

  const values: IFormik = { values: initialValues, schema, callback };
  return values;
};

export default authValues;
