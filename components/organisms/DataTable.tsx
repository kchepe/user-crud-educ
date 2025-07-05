import {Paper, Table, TableContainer, TableRow, TableHead, TableBody, Box} from "@mui/material";
import {StyledTableCell, TableBodyDisplay} from "@/components";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';

interface DataTableProps<T> {
    data: T[]
    isLoading?: boolean
    columns: ColumnDef<T>[]
}

const DataTable = <T, >({columns, data, isLoading}: DataTableProps<T>) => {

    const [firstArrayItem, ...restItem] = columns;

    const table = useReactTable({
        data,
        columns: [
            {
                ...firstArrayItem,
                header: (headerProps) => (
                    <Box>
                        {firstArrayItem.header && typeof firstArrayItem.header !== "string"
                            ? firstArrayItem.header(headerProps)
                            : firstArrayItem.header}
                    </Box>
                ),
                cell: (cellProps) => (
                    <Box>
                        {firstArrayItem.cell && typeof firstArrayItem.cell !== "string"
                            ? firstArrayItem.cell(cellProps)
                            : firstArrayItem.cell}
                    </Box>

                ),
            } as ColumnDef<T>,
            ...restItem,
        ],
        getCoreRowModel: getCoreRowModel(),
    });

    return <TableContainer component={Paper}>
        <Table>
            <TableHead>

                {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>
                    {
                        headerGroup.headers.map(header => <StyledTableCell key={header.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(header.column.columnDef.header, header.getContext())}
                        </StyledTableCell>)
                    }
                </TableRow>)}

            </TableHead>
            <TableBody>
                <TableBodyDisplay data={table} isLoading={isLoading} numberOfColumn={columns.length}/>
            </TableBody>
        </Table>
    </TableContainer>
}

export default DataTable