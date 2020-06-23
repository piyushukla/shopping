import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { connect } from 'react-redux'
import  Products from './Products'
function Cart(props){

   console.log("props", props.products)
    const obj = Object.keys(props.cart)
    const history =  useHistory();
  
    function del(){

        history.push("/")
    }
    return(

        <div style={{ marginLeft: "180px", border: "1px solid black", width: "50%", height: "200px" }} > 

            {
                obj.map((item,id)=>{
                return ( <div>
                {props.cart[item]===0 ?

                        delete props.cart[item]
               //       null
                    :
                    <div>  
                            <h5> id:{item}   {props.products[item-1].name}  Quantity:{props.cart[item]}
                            </h5>
                            <button class="btn btn-primary" type="submit" onClick={()=>{

                                props.changeQty(item,props.cart[item]+1)
                            }}>Add </button>
                            <button class="btn btn-primary" type="submit" onClick={() => {

                                props.changeQty(item, props.cart[item] - 1)
                            }}> Sub</button>
                    </div>
                }    </div>
                )
                })
            }
            {Object.keys(props.cart).length=== 0?
                 
            <div>
                 <h1>No item Added please click on add  button </h1>  
                    <button type="button" class="btn btn-secondary" onClick={()=>{
                        del()
                    }}>ADD</button>
               </div>     
               :
                null
            }
        </div>

    )
}


const mapStateToprops = (state)=>{

    console.log("carts state",state.Carts)
    return {

            cart:state.Carts,
            products:state.Product
    }
}

const mapDispatchToprops = (dispatch) => {

    return {
        changeQty: (id, qty) => {
            dispatch({
                type: "UPDATE_QTY", payload: {
                    id,
                    qty
                }
            })
        }
    }
}

export default connect(mapStateToprops,mapDispatchToprops) (Cart);