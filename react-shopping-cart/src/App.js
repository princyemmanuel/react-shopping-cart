import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from "./data.json"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      cartItems:[],
      size:"",
      sort:"",
    };
  }
  addToCart =(product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart =false;
    cartItems.forEach((items)=>{
      if(items._id === product._id){
        items.count++;
      alreadyInCart =true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product,count:1});
    }
    this.setState({cartItems});
  }
  sortProducts= (event)=>{
    //imp
    const sort=event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort:sort,
      products:this.state.products
      .slice()
      .sort((a,b)=>
        sort==="lowest"
          ?a.price > b.price
          ?1
          :-1
          :sort==="highest"
          ?a.price < b.price
            ? 1
            :-1
          :a._id>b._id
          ? 1
          :-1  


      ),
    }));
  };
  filterProducts = (event) =>{
    //imp
    console.log(event.target.value);
    if(event.target.value===""){
      this.setState({size:event.target.value,
         products:data.products});
    }else{
      this.setState({
        size: event.target.value,
        products:data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >=0
        ),
  
      });

    }
    
  };
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href ="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size} 
                sort={this.state.sort} 
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
<fiter/>
              <Products products={this.state.products} 
              addToCart={this.addToCart}></Products>
            </div>
            <div className="sidebar">
               <Cart cartItems= {this.state.cartItems}/>
            </div>
          </div>
        </main>
        <footer>
          All rights is reserved !
        </footer>
      </div>
    );
  
  }
  
}

export default App;
