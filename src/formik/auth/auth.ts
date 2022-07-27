import ILoginCreateUser from 'interfaces/user/ILoginCreateUser';
import IAuthFormik from 'interfaces/formik/IAuthFormik';
import IAuth from 'interfaces/user/IAuth';
import * as yup from 'yup';
import { UseMutationResult } from '@tanstack/react-query';

const authValues = (
  mutation: UseMutationResult<IAuth | void, unknown, ILoginCreateUser>
): IAuthFormik => {
  const initialValues: ILoginCreateUser = { username: '', password: '' };
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string(),
  });
  const callback = (values: ILoginCreateUser): void => {
    mutation.mutate(values);
  };

  const values: IAuthFormik = { values: initialValues, schema, callback };
  return values;
};

export default authValues;
