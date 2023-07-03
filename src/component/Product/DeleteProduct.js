import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function DeleteProduct(props) {
    const params = useParams();
    const navigateProd = useNavigate();
    const id = params.pid;

    function removeProd() {
        axios.delete('http://localhost:3000/product' + id)
            .then((res) => {
                navigateProd('/');
            })
            .catch((error) => { console.log(error); })
    }

    useEffect(() => {
        removeProd();
    }, [])
    return (
        <div>

        </div>
    )
}

DeleteProduct.propTypes = {

}

export default DeleteProduct

