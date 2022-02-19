import React, { useContext,useState ,useReducer} from "react";

 const ProductsContext=React.createContext();
 const ProductsContextDispatcher=React.createContext();
 const initialatate=[];
 const reducer=(state,action)=>{
     switch(action.type){
         case 'addHandler':
             return ([...state,{title:bookName,category:categoryName,id:state.length+1}]  )
     }
 }

const ProductsProvider = ({children}) => {
   
    const[productList,dispatch]=useReducer(reducer,initialatate);
    // const[productlist,setProductlist]=useState([]);
   
   
  
    return ( 
        <ProductsContext.Provider value={productList}  >
            <ProductsContextDispatcher.Provider vlaue={dispatch}>
           {children}
           </ProductsContextDispatcher.Provider>
           </ProductsContext.Provider>
    );
}
export default ProductsProvider;

    
export const useProducts=()=>useContext(ProductsContext);
export const useProductsAction=()=>{
   
    return useContext(ProductsContextDispatcher);
  
}