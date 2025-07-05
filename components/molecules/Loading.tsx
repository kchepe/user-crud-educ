import {Box, CircularProgress, Typography} from "@mui/material";

const Loading = () => {
    return <Box sx={{display: "flex", gap: 2, alignItems:"center"}}>
        <CircularProgress size={16}/>
        <Typography sx={{fontSize: "14px"}}>Loading...</Typography>
    </Box>
}

export default Loading