import React, { Component } from 'react'

class Cart extends Component {
 state = {}
 render() {
     const {cartItems} = this.props;

  return(
   <div>
       {cartItems.length=== 0 ? (<div className="cart cart-header">Cart is empty</div>
       ):(
        <div className="cart cart-header">You have {cartItems.length} in the cart{" "}
        </div>

       )
       }

   </div>
    )
   }
 }


export default Cart