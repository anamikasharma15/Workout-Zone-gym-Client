import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './addServices.css'


const AddServices = () => {

    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            
            fetch('https://enigmatic-hollows-76868.herokuapp.com/addServices',{
                method: 'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    swal("Successfully Added a services");
                    reset()
                }
            })
        }

    return (
       <div>
           
            <div className='add-products'>
            <h1 className='text-center mt-4'>Please Add a Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("img")}  placeholder="Image URL"/>
                {/* <textarea {...register("description")} placeholder="Description" /> */}
                {/* <input {...register("engine")} placeholder="Engine" />
                <input {...register("power")} placeholder="Power" />
                <input {...register("abs")} placeholder="Abs" />
                <input {...register("weight")} placeholder="Weight" />
                <input {...register("cc")} placeholder="Cubic capacity" /> */}
                <input {...register("price")} placeholder="price" />
                <input className='submitBtn' type="submit" />
            </form>
        </div>
       </div>
    );
};

export default AddServices;