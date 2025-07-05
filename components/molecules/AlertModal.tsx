import {Dialog, DialogActions, DialogContent, DialogProps, DialogTitle} from "@mui/material";
import {ReactNode} from "react";

interface AlertModalProps extends DialogProps{
    title?: string
    children: ReactNode
    actions: ReactNode
}

const AlertModal = ({title, children, actions, ...rest}: AlertModalProps) => {

    return <Dialog {...rest}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
            {actions}
        </DialogActions>
    </Dialog>


}

export default AlertModal