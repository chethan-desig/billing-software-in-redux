import Productform from './productform'
const Editproduct=(props)=>{
    const {handletoggle,id,name,price,productdata} = props
    const handleclick=()=>{
        handletoggle()
    }
    return (
        <div>
            <h1>edit</h1>
            <Productform id={id} name={name} price={price} productdata={productdata} handletoggle={handletoggle}/>
            <button onClick={handleclick}>cancel</button>
        </div>
    )
}
export default Editproduct