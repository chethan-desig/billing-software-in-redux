

const Searchingui=(props)=>{
    const {_id,name,email,mobile} = props
    return (
        <div>
             <ul>
                   <li>{`${name}-${mobile}-${email}`}</li>
                   <button >remove</button>-<button>edit</button>
                   
                </ul>
        </div>
    )
}
export default Searchingui