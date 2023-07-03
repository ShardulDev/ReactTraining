import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import ProductDetails from '../Product/ProductDetails'
import AddProduct from '../Product/AddProduct'
import DeleteProduct from '../Product/DeleteProduct'
function NavComp(props) {
    return (
        <div>
            <BrowserRouter>
                <div>
                    {/* <Link to={''}>Product Details</Link> */}
                </div>
                <Routes>
                    <Route path='/'>
                        <Route index Component={ProductDetails}></Route>
                        <Route path='/addProduct' Component={AddProduct}></Route>
                        <Route path='/deleteProduct/:pid' Component={DeleteProduct}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

NavComp.propTypes = {

}

export default NavComp

