import { useFormik } from 'formik';
import IFormikData from 'interfaces/common/IFormikData';
import IUserCreate from 'interfaces/user/IUserCreate';
import IUserLogin from 'interfaces/user/IUserLogin';
import * as yup from 'yup';

const useFormikWithMaterialUI = (
  initialValues: IUserLogin | IUserCreate,
  validationSchema: yup.SchemaOf<IUserLogin | IUserCreate>,
  callback: (values: IUserLogin | IUserCreate) => void
) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      callback(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return formik;
};

export default useFormikWithMaterialUI;
