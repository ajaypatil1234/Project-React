import React from 'react'
import { useNavigate } from 'react-router-dom'

function Read() {
    const navigate = useNavigate()

    function Back() {
        navigate('/')
    }
    return (
        <div className="container">
            <button className='btn btn-dark' onClick={() => Back()}>Back</button>
            <div className="row">


                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nesciunt, odio sed maxime laboriosam soluta nam autem quae, itaque voluptatum ea. Minima eum quam non voluptates reprehenderit asperiores consectetur hic.
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi illo ratione quod nihil, nesciunt inventore dolore eum, ducimus itaque mollitia commodi suscipit omnis eveniet et aut fugiat sit. Explicabo, assumenda.</p>
            </div>
        </div>
    )
}

export default Read