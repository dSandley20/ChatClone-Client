import * as yup from 'yup';

interface IFormik {
  values: any;
  schema: yup.SchemaOf<any>;
  callback: (values: any) => void;
}

export default IFormik;
