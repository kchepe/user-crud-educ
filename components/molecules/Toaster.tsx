import {Alert, Snackbar} from "@mui/material";
import {useSnackbar} from "@/hooks";

const Toaster = () => {

    const {snackbar: {severity, show, message }, close } = useSnackbar()

    return <Snackbar autoHideDuration={5000} open={show} onClose={close}>
        <Alert variant="filled" onClose={close} severity={severity}>
            {message}
        </Alert>
    </Snackbar>
}

export default Toaster