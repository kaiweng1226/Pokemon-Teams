import axios from "axios"
import { useEffect, useState } from "react"
import CustomizedTable from "./CustomizedTable"
import Pagination from "./Pagination"

export default function Table() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=905"
    )
    const [previousPageUrl, setPreviousPageUrl] = useState()
    const [nextPageUrl, setNextPageUrl] = useState()

    useEffect(() => {
        async function updatePage() {
            let res = await axios.get(currentPageUrl)
            setPreviousPageUrl(res.data.previous)
            setNextPageUrl(res.data.next)
            const pokemons = await Promise.all(
                res.data.results.map(async (p) => {
                    const image = await getImage(p.url)
                    const pokemon = {
                        name: capitalize(p.name),
                        url: p.url,
                        image: image,
                    }
                    return pokemon
                })
            )
            setPokemon(pokemons)
        }
        updatePage()
    }, [currentPageUrl])

    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1)
    }

    async function getImage(url) {
        const response = await axios.get(url)
        return response.data.sprites.other.home.front_default
    }

    function goToPreviousPage() {
        setCurrentPageUrl(previousPageUrl)
    }

    function goToNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    const headers = ["Pokemon", "URL", "Image"]

    return (
        <div>
            <Pagination
                goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
                goToNextPage={nextPageUrl ? goToNextPage : null}
            />
            <br></br>
            <CustomizedTable headers={headers} rows={pokemon}></CustomizedTable>
        </div>
    )
}
