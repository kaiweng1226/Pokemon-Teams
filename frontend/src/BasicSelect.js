import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { useState } from "react"

export default function BasicSelect({ label, change, list }) {
    const [state, setState] = useState(list[0])
    const handleChange = (event) => {
        setState(event.target.value)
        change(event.target.value)
    }

    return (
        <Box sx={{ margin: "25px 50px" }}>
            <FormControl fullWidth size="small" style={{ width: "140px" }}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label={label}
                    onChange={handleChange}
                >
                    {list.map((item) => {
                        return (
                            <MenuItem key={item} value={item}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "70px auto",
                                        alignItems: "center",
                                    }}
                                >
                                    <div style={{ gridColumn: "1" }}>
                                        {item}
                                    </div>
                                    {(label === "Type 1" ||
                                        label === "Type 2") &&
                                    item !== "All" ? (
                                        <img
                                            style={{ gridColumn: "2" }}
                                            src={require("./Images/Types/" +
                                                item +
                                                ".png")}
                                            width="20"
                                            height="20"
                                        ></img>
                                    ) : null}
                                </div>
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}
