import React from 'react';
import { useForm } from 'react-hook-form';

const Checkout = () => {
    const { register, handleSubmit, watch, formState : { errors } } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <div style={{ textAlign:'center' }}>
            <h2>Checkout page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name',{ required : true, minLength : 5 })} placeholder="Enter name" />
                { errors.name && <span style={{ color: 'red',display: 'block' }}>This Field is required!</span> }
                <br/>

                <input type="email" {...register('email',{ required : true })} placeholder="Enter email" />
                { errors.email && <span style={{ color: 'red',display: 'block' }}>This Field is required!</span> }
                <br/>

                <input type="password" {...register('password', { required : true, minLength : 6 })} placeholder="Enter password" />
                { errors.password && <span style={{ color: 'red',display: 'block' }}>This Field is required!</span> }
                <br/>

                <input type="number" {...register('age', { required : true ,min : 10, max : 20 })} id="age" placeholder="Enter age" />
                { errors.age && <span style={{ color: 'red',display: 'block' }}>This Field is required!</span> }
                <br/>

                <select {...register('gender')} id="gender">
                    <option>-- select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Checkout;