export const addToCart=(data)=>{
    console.log("this is actions data",data);
    return{
        type:"AddToCart",
        payload:data
    }
}