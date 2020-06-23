import React, { useState } from 'react'
import { connect } from 'react-redux'
import Cart from './Components/Cart'
import './Navbar.css'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useHistory, Link } from "react-router-dom";

function Navbar(props) {


    const [flag, setflag] = useState(0)
   const history = useHistory();
   const obj = Object.keys(props.cart)
   console.log("obj", props.cart)


    function del(data) {

       delete props.cart[data]

    }

    function route() {

       history.push("/Cart");
    }
    function Product() {

       history.push("/")
    }

    return (
        <nav className="mb-1 navbar navbar-expand-lg bg-secondary" style={{ height: "100px", position: "fixed", width: "100%", top: 0, left: 0 }}>
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler"  data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item nav-link" onClick={() => {

                        setflag(0)
                        Product()
                    }}>
                        Product
                    </li>

                    <li className="nav-item nav-link" onClick={() => {

                        //    route()
                        setflag(1)
                    }}>
                        Cart
                    </li>
                    {flag === 1 ?


                        <div className="bg-secondary position-absolute" style={{ marginLeft: "150px", marginTop: "80px", border: "1px solid black", width: "300px", height: "200px" }} >

                            {
                                obj.map((item, id) => {
                                    return (<div>
                                        {props.cart[item] === 0 ?

                                            del(item)

                                            :
                                            <div>
                                                <h5> id:{item}   {props.products[item - 1].name}  Quantity:{props.cart[item]}

                                                </h5>

                                             </div>
                                         }    </div>
                                     )
                                 })

                             }
                             {Object.keys(props.cart).length > 0 ?
                                <button style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} onClick={() => {
                                    setflag(0)
                                    route()
                                }}>Cart</button>
                                :
                                <p style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>Cart is empty</p>
                            }
                                
                        </div>
                        :

                        null
                    }
                </ul>
            </div>
        </nav>

    )

}
const mapDispatchToprops = (state) => {

    console.log("carts state", state.Carts)
    return {

        cart: state.Carts,
        products: state.Product
    }

}
export default connect(mapDispatchToprops, null)(Navbar);
//export default Topbar