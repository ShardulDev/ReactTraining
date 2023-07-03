import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import axios from 'axios';

function AddProduct(props) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            'productName': '',
            'brandName': '',
            'price': null
        }
    });
    // const{onChange, onBlur, name, ref} = registerAForm('productName');

    function registerProduct(data) {
        console.log("submit event:", data);
        // axios.post()
        axios.post('http://localhost:3000/product', data)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(registerProduct)}>
                <table>
                    <tr>
                        <td><label>Product Name</label></td>
                        <td><input type='text' {...register('productName', { required: true, maxLength: 4})}></input></td>
                        {/* {errors.productName?.type === "required" && (
                            <p role="alert">First name is required</p>
                        )} */}
                        {errors.productName && errors.productName.type == 'required' && <td>No!!</td>}
                        {errors.productName && errors.productName.type == 'maxLength' && <td>Exceed!!</td>}
                    </tr>
                    <tr>
                        <td><label>Brand Name</label></td>
                        <td><input type='text' {...register('brandName', { required: true, maxLength: 4 })}></input></td>
                        {errors.brandName && errors.brandName.type == 'required' && <td>No!!</td>}
                        {errors.brandName && errors.brandName.type == 'maxLength' && <td>Exceed!!</td>}
                    </tr>
                    <tr>
                        <td><label>Price</label></td>
                        <td><input type='number' {...register('price', { required: true, maxLength: 4 })}></input></td>
                        {errors.brandName && errors.brandName.type == 'required' && <td>No!!</td>}
                        {errors.brandName && errors.brandName.type == 'maxLength' && <td>Exceed!!</td>}
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type='submit'>Submit</button></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct

