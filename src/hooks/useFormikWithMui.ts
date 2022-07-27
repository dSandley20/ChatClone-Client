import { useFormik } from 'formik';
import * as yup from 'yup';

const useFormikWithMaterialUI = (
  initialValues: any,
  validationSchema: yup.SchemaOf<any>,
  callback: (values: any) => void
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
