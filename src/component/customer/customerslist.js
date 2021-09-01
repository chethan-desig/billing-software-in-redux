import Customerui from "./customerui"
const customerlist=(props)=>{
    const {data,deleting} = props
    return(
        <div>
            {
                data.map((ele)=>{
                    return <Customerui  {...ele}/>
                })
            }
        </div>
    )
}
export default customerlist