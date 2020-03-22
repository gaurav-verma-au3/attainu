import React from 'react'
import AboutTile from '../components/aboutTile'
const AboutUs = () => {

    return (
        <div className="container">
            <h1
                className="text-center  mt-5"
            >
                Know more About Us.
            </h1>
            <div
                className="container mt-5 mx-auto"
            >

                <AboutTile
                    title="CEO"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ratione! "
                    src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                ></AboutTile>
                <AboutTile
                    title="CTO"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ratione! "
                    src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                ></AboutTile>
                <AboutTile
                    title="COO"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ratione! "
                    src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                ></AboutTile>

            </div>
        </div>
    )

}

export default AboutUs