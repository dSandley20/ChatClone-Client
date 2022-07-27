import * as yup from 'yup';
import ILoginCreateUser from '../user/ILoginCreateUser';

interface ICreateUserFormik {
  values: ILoginCreateUser;
  schema: yup.SchemaOf<ILoginCreateUser>;
  callback: (values: ILoginCreateUser) => void;
}

export default ICreateUserFormik;
