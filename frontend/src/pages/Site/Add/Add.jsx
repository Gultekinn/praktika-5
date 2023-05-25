import React from 'react'
import {Formik,Form,Field} from 'formik'
import { useState } from 'react'
import axios from 'axios'
import '../Add/Add.scss'
const Add = () => {
   const [name,setName]=useState('')
   const[price,setPrice]=useState('')
   const item={
    name,
    price
   }
  return (
   
    <div className='formik'>
<Formik onSubmit={async()=>{
 await axios.post('http://localhost:5055/',item).then((res)=>{
  
 })
}}  initialValues={{name:'',price:''}}>
  <Form>
    <Field onChange={(e)=>{
      setName(e.target.value)
    }} value={name} type="text"/>

    <Field onChange={(e)=>
      setPrice(e.target.value)
    } value={price} type="Number"/>
    <button type='submit'>Submit</button>
  </Form>
</Formik>

    </div>
  )
}

export default Add