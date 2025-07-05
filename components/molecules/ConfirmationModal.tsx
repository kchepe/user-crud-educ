import {AlertModal} from "@/components";
import {Button, DialogContentText} from "@mui/material";


interface ConfirmationModalProps {
    text?: string
    title?: string
    open: boolean
    onClose: () => void
    confirmAction: () => void
}

const ConfirmationModal = ({
                               open,
                               onClose,
                               confirmAction,
                               text = "Are you sure you want to remove this item?",
                               title = "Remove Item",
                           }: ConfirmationModalProps) => {
    return <AlertModal open={open} onClose={onClose} title={title} actions={<>
        <Button onClick={onClose}>Cancel</Button>
        <Button autoFocus onClick={confirmAction} variant="contained">Yes</Button>
    </>}>
        <DialogContentText>{text}</DialogContentText>
    </AlertModal>
}

export default ConfirmationModal