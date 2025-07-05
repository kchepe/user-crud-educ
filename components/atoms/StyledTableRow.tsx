import {styled} from "@mui/material/styles";
import {TableRow, TableRowProps} from "@mui/material";


const TableRowStyled = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const StyledTableRow = ({children, ...rest}: TableRowProps) => {
    return <TableRowStyled {...rest}>{children}</TableRowStyled>
}
export default StyledTableRow