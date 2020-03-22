import React from 'react'
import Tile from '../components/tile'
const Home = () => {

    return (
        <div className="container">
            <h1
                className="text-center  mt-5"
            >
                Welcome To HomePage
            </h1>
            <div
                className="container d-flex justify-content-center align-items-center mt-5"
            >

                <Tile
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
                    title="What we do?"
                />
                <Tile
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
                    title="What we do?"

                />
                <Tile
                    body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
                    title="What we do?"

                />

            </div>
        </div>
    )

}


export default Home