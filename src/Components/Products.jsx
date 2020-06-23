import React,{useState,useEffect} from 'react'
import { db} from '../Service/firebase'
import Product from '../Components/Product'
import '../Components/Products.css'
import { connect } from 'react-redux'
function Products(props){


    const [data, setdata] = useState([]);

    useEffect(() => {

        db.collection('users')
            .get()
            .then(output => {
             

                const user = []
                output.forEach(doc => {
                    const data = doc.data()
                    user.push(data)
                    
                   props.changeName(user)
                });

                setdata([...user])
            })
            .catch(error => console.log(error))
    }, [])


    function changeQty(id, qty) {
        props.changeQty(id, qty)

        db.collection('cart')
         .add({
             id:id,
             qty:qty
         })
    }


    return (

        <div className="main">

            {props.productList.map((item)=>{  
 
           return <Product name={item.name} index={item.id} img={item.img} quantity={props.cart[item.id]} changeQty={(id, qty)=>{
                    changeQty(id, qty)
                }}  />
                                                         
           })}


        </div>       

    )

}
const mapStateToProps = (state) => {

        console.log("state",state.Product)
    
    return {
        productList:state.Product,
        cart:state.Carts
    }

}
const mapDispatchToprops = (dispatch)=>{

    return {
        changeName: (response) => { dispatch ({ type:"CHANGE_NAME",products:response})},
        changeQty: (id, qty) => { dispatch({ type: "UPDATE_QTY", payload: {
            id,
            qty
        }}) }
    }
}


// export default Products;

export default connect(mapStateToProps,mapDispatchToprops)(Products)