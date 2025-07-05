import {styled} from "@mui/material/styles";
import {TableCell, TableCellProps} from "@mui/material";
import {tableCellClasses} from "@mui/material/TableCell";

const TableCellStyled = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));



const StyledTableCell = ({children, ...rest}: TableCellProps) => {
    return <TableCellStyled {...rest}>{children}</TableCellStyled>
}
export default StyledTableCell