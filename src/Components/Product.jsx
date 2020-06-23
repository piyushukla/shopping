import React from 'react'


function Products({name,index,img,quantity,changeQty}){


    return (

        <div className="card-container ">

            <li style={{ listStyle: "none", border: "1px solid black", width: "200px" }}> 
                <img className="hover-img" src={img} alt="Robot" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                <p style={{textAlign:"center"}}>{name}</p>
                {quantity >=1 ?
                 <div>
                     <button className="btn btn-secondary" onClick={()=>{
                            changeQty(index, quantity - 1)
                        }}>Substract</button>   
                        <input type="text" className="form-control" value={quantity} disabled/>
                        <button className="btn btn-secondary" onClick={()=>{
                            changeQty(index, quantity + 1)
                        }}>Add</button>
                 </div>

                :
                 <button className="btn btn-secondary" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} onClick={()=>{
                        changeQty(index, 1)
                    }}>
                        
                        Add</button>

                }
            </li>  

        </div>

    )


}

export default Products