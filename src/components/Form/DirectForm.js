import axios from 'axios';
import React, {useState} from 'react'

export default function DirectForm({params , pname}) {
  const[unitPrice, setUnitPrice] = useState(0);
  const[quantity, setQuantity] = useState(0);

  const seller = {
    id : 2
  }

  function addProduct_(){
    axios.post("http://localhost:3002/api/seller/add_selling_product",{
        name:pname,
        description:params,
        amount:quantity,
        seller_id:seller.id,
        price:unitPrice
    }).then((res)=>{
      console.log(res.data)
      alert(res.data)
      
    }).catch((err)=>{
      alert(err)
    })
}

  return (
    <div>
        <form method='get'>
        <table border="0">
          <tr>
          <th>Unit Price (LKR)</th>
            <td>
              <input type="number" className='text' onChange={(e)=>{setUnitPrice(e.target.value)}}/>
            </td>
          </tr>
          <tr>
            <th>Quantity</th>
            <td><input type="number" className='text' required onChange={(e)=>{setQuantity(e.target.value)}}/></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="reset" name="Cancel" value="Cancel" className='cancel'/>
              <input type="submit" name="Submit" value="Submit" className='submit' onClick={addProduct_}/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}
