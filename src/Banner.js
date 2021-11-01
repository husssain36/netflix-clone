import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from './axios';
import requests from './request';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData()
    }, []);
    

        const truncate = (string, n) => {
            return string?.length > n ? string.substr(0, n-1) + '....' : string;
        }

    return (
        <BannerHeader 
           style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundPosition: "center center",
                
           }}
        >
            {/* <BannerOverlay/> */}
            
            <BannerContents>
                <BannerTitle>{movie?.name || movie?.title || movie?.original_name}</BannerTitle>
                <BannerButtons>
                    <button>Play</button>
                    <button>My List</button>
                </BannerButtons>

                <BannerDescription>
                    {truncate(`${movie.overview}
                    `, 200
                    )}
                </BannerDescription>

            </BannerContents>

            <BannerFade/>

            

        </BannerHeader>
    )
}

export default Banner

const BannerHeader = styled.header`
    height: 600px;
    position: relative;
    object-fit: contain;
    color: white;
`;

const BannerOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: black;
   opacity: 0.5;`;

const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;

`;

const BannerTitle = styled.h1`
        font-size: 3 rem;
        font-weight: 800;
        padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div`
    display: flex;
    
 > button{
     cursor: pointer;
     color: white;
     outline: none;
     border: none;
     font-weight: 700;
     border-radius: 0.2vw;
     padding-left: 2rem;
     padding-right: 2rem;
     margin-right: 1rem;
     background-color: rgba(51, 51, 51, 0.51);
     padding-bottom: 0.5rem;
     padding-top: 0.5rem;

    &:hover {
    color: black !important;
    background-color: #e6e6e6 !important;
    transition: all 0.2s !important;
    }
 }
`;

const BannerDescription = styled.h1`
    width: 45rem;
    line-height: 1.3rem;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
    text-overflow: ellipsis;
`;

const BannerFade = styled.div`
    height: 16.9rem;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
    )
`;

