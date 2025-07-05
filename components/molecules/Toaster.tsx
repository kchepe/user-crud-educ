import {Alert, Snackbar} from "@mui/material";
import {useSnackbar} from "@/hooks";

const Toaster = () => {

    const {snackbar: {severity, show, message }, close } = useSnackbar()

    return <Snackbar autoHideDuration={3500} open={show} onClose={close} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
        <Alert variant="filled" onClose={close} severity={severity}>
            {message}
        </Alert>
    </Snackbar>
}

export default Toaster