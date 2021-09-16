
const Billfulldetail=(props)=>{
    const {bill,cancel} = props
    const handlecancel=()=>{
        cancel()
    }
    return (
      <div>
            {
                <div>
                <h1>createdAt-{bill.createdAt}</h1>
                <h1>date-{bill.date}</h1>
                <h1>customer-{bill.customer}</h1>
                <h1>total-{bill.total}</h1>
                <h1>updatedAt-{bill.updatedAt}</h1>
                <h1>user-{bill.user}</h1>
                <h1>quantity-{bill.lineItems.map((ele)=>{
                    return ele.quantity
                })}</h1>
                <h1>id-{bill.lineItems.map((ele)=>{
                    return ele._id
                })}</h1>
                <h1>productid-{bill.lineItems.map((ele)=>{
                        return ele.product
                })}</h1>
                 <h1>price-{bill.lineItems.map((ele)=>{
                    return ele.price
                })}</h1>
                <h1>subTotal-{bill.lineItems.map((ele)=>{
                    return ele.subTotal
                })}</h1>
                 
                
                </div>
            }
            <button onClick={handlecancel}>cancel</button>
      </div>
    )
}
export default Billfulldetail