import axios from "axios"
import { useEffect, useState } from "react"
import CustomizedTable from "./CustomizedTable"
import Pagination from "./Pagination"

export default function Table() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    )
    const [previousPageUrl, setPreviousPageUrl] = useState()
    const [nextPageUrl, setNextPageUrl] = useState()

    useEffect(() => {
        async function updatePage() {
            let res = await axios.get(currentPageUrl)
            setPreviousPageUrl(res.data.previous)
            setNextPageUrl(res.data.next)
            let temp = []
            res.data.results.forEach(async (p) => {
                const image = await getImage(p.url)
                const pokemon = {
                    name: capitalize(p.name),
                    url: p.url,
                    image: image,
                }
                temp.push(pokemon)
            })
            console.log(temp)
            setPokemon(temp)
            console.log(pokemon)
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
    const pokemons = [
        {
            name: "Bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
        },
        {
            name: "Ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
        },
        {
            name: "Venusaur",
            url: "https://pokeapi.co/api/v2/pokemon/3/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
        },
        {
            name: "Charmander",
            url: "https://pokeapi.co/api/v2/pokemon/4/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        },
        {
            name: "Charmeleon",
            url: "https://pokeapi.co/api/v2/pokemon/5/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
        },
        {
            name: "Charizard",
            url: "https://pokeapi.co/api/v2/pokemon/6/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
        },
        {
            name: "Squirtle",
            url: "https://pokeapi.co/api/v2/pokemon/7/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
        },
        {
            name: "Wartortle",
            url: "https://pokeapi.co/api/v2/pokemon/8/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
        },
        {
            name: "Blastoise",
            url: "https://pokeapi.co/api/v2/pokemon/9/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
        },
        {
            name: "Caterpie",
            url: "https://pokeapi.co/api/v2/pokemon/10/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
        },
        {
            name: "Metapod",
            url: "https://pokeapi.co/api/v2/pokemon/11/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
        },
        {
            name: "Butterfree",
            url: "https://pokeapi.co/api/v2/pokemon/12/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
        },
        {
            name: "Weedle",
            url: "https://pokeapi.co/api/v2/pokemon/13/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
        },
        {
            name: "Kakuna",
            url: "https://pokeapi.co/api/v2/pokemon/14/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
        },
        {
            name: "Beedrill",
            url: "https://pokeapi.co/api/v2/pokemon/15/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
        },
        {
            name: "Pidgey",
            url: "https://pokeapi.co/api/v2/pokemon/16/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
        },
        {
            name: "Pidgeotto",
            url: "https://pokeapi.co/api/v2/pokemon/17/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
        },
        {
            name: "Pidgeot",
            url: "https://pokeapi.co/api/v2/pokemon/18/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
        },
        {
            name: "Rattata",
            url: "https://pokeapi.co/api/v2/pokemon/19/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
        },
        {
            name: "Raticate",
            url: "https://pokeapi.co/api/v2/pokemon/20/",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
        },
    ]
    return (
        <div>
            {console.log(149)}
            <CustomizedTable
                headers={headers}
                rows={pokemons}
            ></CustomizedTable>
            <Pagination
                goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
                goToNextPage={nextPageUrl ? goToNextPage : null}
            />
        </div>
    )
}
