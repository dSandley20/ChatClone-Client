import { Dialog, DialogTitle, Button, TextField } from '@mui/material';
import useCreateServer from 'api/server/create';
import createServerValues from 'formik/server/create';
import useFormikWithMaterialUI from 'hooks/useFormikWithMui';

export interface DefaultDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

const CreateServerDialog = (props: DefaultDialogProps) => {
  const mutation = useCreateServer();
  const { values, schema, callback } = createServerValues(mutation);
  const formik = useFormikWithMaterialUI(values, schema, callback);

  const { open, onClose } = props;

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create Server</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          <Button>Create</Button>
        </form>
      </Dialog>
    </>
  );
};

export default CreateServerDialog;
