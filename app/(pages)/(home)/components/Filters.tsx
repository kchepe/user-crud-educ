import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Button, Box, TextField, InputAdornment} from "@mui/material";
import {ChangeEvent, useState} from "react";

interface FiltersProps {
    fetchUsers: (search?: string) => Promise<void>
}

const Filters = ({fetchUsers}: FiltersProps) => {

    const [search, setSearch] = useState("");

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleClearFilter = async () => {
        setSearch("")
        await fetchUsers();
    }

    return <Box>
        <TextField value={search} onChange={handleSearchInput} type="Search" label="Search" placeholder="Search user by email, firstname or lastname..." fullWidth
                   slotProps={{
                       input: {
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchOutlinedIcon/>
                               </InputAdornment>
                           ),
                       },
                   }}/>
        <Box sx={{mt: 2, display: "flex", gap: 2, justifyContent: "flex-end"}}>
            {search &&  <Button onClick={handleClearFilter}>Clear Filter</Button>}
            <Button variant="contained" type="button" onClick={async () => await fetchUsers(search)}>Search</Button>
        </Box>
    </Box>

}

export default Filters