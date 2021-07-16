import React from 'react'

const Error = (props) => {
    return (
        <div>
            <h1>These Are Not The Droids You're Looking For.</h1>
            <img src={process.env.PUBLIC_URL + "/Obi-Wan.jpg"} alt="Image of Obi-Wan Kenobi" style={{height:400, width:600}} />
        </div>
    )
}

export default Error
