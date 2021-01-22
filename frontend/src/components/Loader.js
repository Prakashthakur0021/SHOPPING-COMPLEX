import React from 'react'
import { Spinner } from 'react-bootstrap'


const Loader = () => {
    return (
        <Spinner animation="border" role="status" style={{position: 'absolute', top: '45%', left: '45%' , width: '100px', height: '100px', margin: 'auto', display: 'grid',alignItems: 'center', justifyContent: 'center'}}>
            <span class="sr-only">Loading</span>
        </Spinner>
    )
}

export default Loader
