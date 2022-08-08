import IFormik from 'interfaces/common/IFormik';
import IServerJoin from 'interfaces/server/IServerJoin';
import * as yup from 'yup';

const joinServerValues = (mutation: any): IFormik => {
  const initialValues: IServerJoin = { invite_code: '' };
  const schema = yup.object({
    invite_code: yup.string().required(),
  });
  const callback = (values: IServerJoin): void => {
    mutation.mutate(values);
  };

  const values: IFormik = { values: initialValues, schema, callback };
  return values;
};

export default joinServerValues;
