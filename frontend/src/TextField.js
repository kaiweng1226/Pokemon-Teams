import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useState } from "react"

export default function BasicTextFields({ text, onSubmit, options }) {
    const [search, setSearch] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(search)
    }

    return (
        <Box
            sx={{ margin: "25px 50px" }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                style={{ width: "140px" }}
                size="small"
                id="outlined-basic"
                label={text}
                variant="outlined"
                onChange={(event) => setSearch(event.target.value)}
            />
        </Box>
    )
}
