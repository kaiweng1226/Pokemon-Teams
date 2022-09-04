import React from "react"
import Button from "@mui/material/Button"

export default function Pagination({ goToNextPage, goToPreviousPage }) {
    return (
        <div>
            {goToPreviousPage ? (
                <Button variant="contained" onClick={goToPreviousPage}>
                    Previous
                </Button>
            ) : (
                <Button variant="contained" disabled>
                    Previous
                </Button>
            )}
            {goToNextPage ? (
                <Button variant="contained" onClick={goToNextPage}>
                    Next
                </Button>
            ) : (
                <Button variant="contained" disabled>
                    Next
                </Button>
            )}
        </div>
    )
}
