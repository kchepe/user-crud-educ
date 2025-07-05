import {StyledTableCell, StyledTableRow, Loading} from "@/components";
import {flexRender, Table} from '@tanstack/react-table';
import {Box, Typography} from "@mui/material";


interface TableBodyDisplayProps<T> {
    data: Table<T>
    isLoading?: boolean
    numberOfColumn: number
}

const TableBodyDisplay = <T, >({data, isLoading, numberOfColumn}: TableBodyDisplayProps<T>) => {

    if (isLoading) {
        return <StyledTableRow>
            <StyledTableCell colSpan={numberOfColumn}>
                <Box sx={{display: "flex", justifyContent: "center", paddingY: 3}}>
                    <Loading/>
                </Box>
            </StyledTableCell>
        </StyledTableRow>
    }


    if(!isLoading && data.getRowModel().rows.length === 0) {
        return <StyledTableRow >
            <StyledTableCell colSpan={numberOfColumn}>
                <Box sx={{display: "flex", justifyContent: "center", paddingY: 3}}>
                    <Typography sx={{fontSize: "14px"}}>No Results Found</Typography>
                </Box>
            </StyledTableCell>
        </StyledTableRow>
    }

    return <>
        {data.getRowModel().rows.map(row => <StyledTableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
                <StyledTableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTableCell>
            ))}
        </StyledTableRow>)}
    </>
}

export default TableBodyDisplay