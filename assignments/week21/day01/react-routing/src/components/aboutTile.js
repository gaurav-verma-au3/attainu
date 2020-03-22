import React from 'react'

const AboutTile = (props) => {


    return (
        <div>
            <div className="container-fluid mt-2">

                <div className="row">
                    <div className="col-10 ">
                        <h3 className="mt-5 ml-3">{props.title}</h3>
                        <p className="mt-2 ml-3" >{props.body}</p>
                    </div>
                    <div className="col-2">
                        <img src={props.src}
                            style={{
                                width: "150px",
                                height: "150px",
                                margin: "0px",
                                padding: "0px"
                            }}
                            alt="sorry"
                        />
                    </div>

                </div>

            </div>
        </div>
    )

}


export default AboutTile