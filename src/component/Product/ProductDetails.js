import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ProductDetails(props) {
    const [products, setProducts] = useState([]);

    function getProductDetails() {
        axios.get('http://localhost:3000/product').then((res) => {
            console.log(res.data);
            setProducts(products.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getProductDetails()
    }, [])


    return (
        <div>
            <h3>Product Details</h3>
            <Link to={'/addProduct'}> Add Product</Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Brand Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prod) => {
                            return <tr>
                                <td>{prod.id}</td>
                                <td>{prod.productName}</td>
                                <td>{prod.brandName}</td>
                                <td>{prod.price}</td>
                                <td><Link to={`/deleteProduct/` + 1}>Delete</Link></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
//componentdidmount and componentdidupdate




ProductDetails.propTypes = {

}

export default ProductDetails

