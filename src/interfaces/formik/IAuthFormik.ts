import * as yup from 'yup';
import ILoginCreateUser from '../user/ILoginCreateUser';

interface IAuthFormik {
  values: ILoginCreateUser;
  schema: yup.SchemaOf<ILoginCreateUser>;
  callback: (values: ILoginCreateUser) => void;
}

export default IAuthFormik;
