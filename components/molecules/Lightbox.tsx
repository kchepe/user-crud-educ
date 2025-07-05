import {ReactNode} from 'react';
import {Modal, ModalProps, Typography, Box} from '@mui/material';

interface LightboxProps extends Omit<ModalProps, "title"> {
    title?: string | ReactNode;
}

const Lightbox = ({children, title, ...rest}: LightboxProps) => (
    <Modal {...rest}>
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 3,
            borderRadius: "10px"
        }}>
            {title &&
                (typeof title === 'string' ? (
                    <Typography variant="h6" mb={2} sx={{fontWeight: "bold"}} color="primary">
                        {title}
                    </Typography>
                ) : (
                    title
                ))}
            {children}
        </Box>
    </Modal>
);

export default Lightbox;
