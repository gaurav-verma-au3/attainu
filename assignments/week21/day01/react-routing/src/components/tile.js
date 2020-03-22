import React from 'react'

let Tile = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={props.src} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.body}</p>
                </div>
            </div>
        </div>
    )
}


export default Tile













