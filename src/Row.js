import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from './axios'

function Row({title, fetchURL, isLargeRow = false}) {

    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    console.log(movies)

    return (
        <RowMain>
            <h2>{title}</h2>
            <RowPosters>   
                
                {movies.map(movie => (
                    <>
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    key={movie.id}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path || movie.poster_path
                    }`} alt={movie.name} />
                    {/* <p key={movie.id}>{movie?.name || movie?.original_title}</p> */}
                    </>
                ))}
                
            </RowPosters>
        </RowMain>
    )
}

export default Row

const RowMain = styled.div`
    color: white;
    margin-left: 20px;
`;

const RowPosters = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll !important;
    padding: 20px;

    &::-webkit-scrollbar{
        display: none;
    }

     >.row__poster{
        position: relative;
        max-height: 100px;
        object-fit: contain;
        margin-right: 10px;
        width: 100%;
        transition: tramsform 450ms;
        
    }

    >.row__poster:hover {
        transform: scale(1.09);
        opacity: 1
    }

    >.row__posterLarge{
        max-height: 250px;
        width: 100%;
        transition: tramsform 450ms;
    }

    >.row__posterLarge:hover{
        transform: scale(1.09);
        opacity: 1
    }
`;