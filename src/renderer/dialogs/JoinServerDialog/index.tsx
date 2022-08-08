import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import useJoinServer from 'api/server/join';
import joinServerValues from 'formik/server/join';
import useFormikWithMaterialUI from 'hooks/useFormikWithMui';
import { DefaultDialogProps } from '../CreateServerDialog';

const JoinServerDialog = (props: DefaultDialogProps) => {
  const { open, onClose } = props;

  const mutation = useJoinServer();
  const { values, schema, callback } = joinServerValues(mutation);
  const formik = useFormikWithMaterialUI(values, schema, callback);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Join Server</DialogTitle>
      <form
        style={{ display: 'inline-grid', justifyItems: 'center' }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="invite_code"
          name="invite_code"
          label="Invite Code"
          value={formik.values.invite_code}
          onChange={formik.handleChange}
          error={
            formik.touched.invite_code && Boolean(formik.errors.invite_code)
          }
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Join
        </Button>
      </form>
    </Dialog>
  );
};

export default JoinServerDialog;
