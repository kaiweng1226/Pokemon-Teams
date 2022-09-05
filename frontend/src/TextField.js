import Autocomplete from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

import { useState } from "react"

export default function BasicTextFields({ text, onSubmit, options }) {
    const [search, setSearch] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <Box
            sx={{ margin: "25px 50px" }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(event) => handleSubmit(event)}
        >
            <Autocomplete
                freeSolo
                options={options}
                onChange={(event, value) => {
                    onSubmit(value)
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        style={{ width: "140px" }}
                        size="small"
                        id="outlined-basic"
                        label={text}
                        variant="outlined"
                    />
                )}
            ></Autocomplete>
        </Box>
    )
}
