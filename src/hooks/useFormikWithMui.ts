import { useFormik } from 'formik';
import IFormikData from 'interfaces/common/IFormikData';
import * as yup from 'yup';

const useFormikWithMaterialUI = (
  initialValues: IFormikData,
  validationSchema: yup.SchemaOf<IFormikData>,
  callback: (values: IFormikData) => void
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
