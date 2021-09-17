import React,{useState,useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import Billuielements from "./billinguielements"
import { asyncbilldelete } from "../../action/billingaction"
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Table,TableBody,TableCell,TableContainer,TableFooter,TablePagination,TableRow,Paper,IconButton,Button,TableHead } from '@material-ui/core';
import Productname from './productname'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import moment from 'moment'
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from "axios";
import Pdf from 'react-to-pdf'
import Detail from './pdf'
import './cus.css'
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
const ref = React.createRef();
const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
 
    return (
        <div className={classes.root}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
      );
    }
    
    TablePaginationActions.propTypes = {
        count: PropTypes.number.isRequired,
        onPageChange: PropTypes.func.isRequired,
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired,
      };
      
      const useStyles2 = makeStyles({
        table: {
          width: "auto",
        },
      });
      

      export default function Billui(props){
    const {data} = props
    const classes = useStyles2();

    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(5);
   
    const [searchitem,setSearchItem] = useState('')
    const [filterddata,setFilterData] = useState([])
    const [detalis,setDetails] = useState([])
    const [toggles,setToggles] = useState(false)
    useEffect(()=>{
      setFilterData(data)
    },[data])
   
  
  
  
    const customerstate = useSelector((state)=>{
        return state.components
    })
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, filterddata.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dispatch = useDispatch()

  

  
  const handleDelete = (_id) => {
    dispatch(asyncbilldelete(_id))
  }
    const filter=(id)=>{
        const find=data.filter((ele)=>{
            return ele.customer.includes(id)
        })
        return setFilterData(find)
    }
    
    const handleChange=(e)=>{
        const result =e.target.value
        filter(result)
        setSearchItem(result)
    }
    const handleshow=(id)=>{
      axios.get(`https://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((res)=>{
          const result = res.data
         
          setDetails(result)
          setToggles(true)
        })
        .catch((err)=>{
          alert(err.message)
        })
    }
 
    const handlecancel=()=>{
      setToggles(false)
    }
    
    return (
        <div>
            <select value={searchitem} onChange={handleChange}  >
                <option value={''}>all customers</option>
            {customerstate.map((ele)=>{return <option value={ele._id}>{ele.name}</option>})}
            </select> 
         <div className="customer__table">
         <TableContainer component={Paper}>
           <Table className={classes.table} aria-label="custom pagination table">
           <TableHead>
               <TableRow>
                 <TableCell align="left">customer</TableCell>
                 <TableCell align="right">date&nbsp;</TableCell>
                 <TableCell align="right">product-quantity&nbsp;</TableCell>
                 <TableCell align="right">product-price&nbsp;</TableCell>
                 <TableCell align="right">product-subtotal&nbsp;</TableCell>
                 <TableCell align="center">Action&nbsp;</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {(rowsPerPage > 0
                 ? filterddata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                 : filterddata
               ).map((row,index) => (
                 <TableRow key={row._id}>
                   <TableCell component="th" scope="row" align="left">
                    {
                        <Billuielements customer={row.customer} _id={row._id}/>
                    }
                   </TableCell>
                   <TableCell style={{ width: 160 }} align="right">
                   {moment(row.date).add().toString()}
                   </TableCell>
                  
                   <TableCell style={{ width: 160 }}  align="right">
                    {row.lineItems&&row.lineItems.map((ele)=>{return <div><Productname product={ele.product} id={row._id}/>quantity-{ele.quantity}</div>})}
                      </TableCell>
                      <TableCell style={{ width: 160 }}  align="right">
                    {row.lineItems&&row.lineItems.map((ele)=>{return <div><Productname product={ele.product} id={row._id}/>price-{ele.price}</div>})}
                      </TableCell>
                      <TableCell style={{ width: 160 }}  align="right">
                    {row.lineItems&&row.lineItems.map((ele)=>{return <div><Productname product={ele.product} id={row._id}/>subtotal-{ele.subTotal}</div>})}
                      </TableCell>
                     
                 
                   <TableCell style={{ width: 230 }} align="center">
                   <Button onClick={() => handleshow(row._id)}><VisibilityIcon/></Button>
                    <Button onClick={() => handleDelete(row._id) }><DeleteIcon/></Button>
                   </TableCell>
                 </TableRow>
               ))}
     
               {emptyRows > 0 && (
                 <TableRow style={{ height: 53 * emptyRows }}>
                   <TableCell colSpan={6} />
                 </TableRow>
               )}
             </TableBody>
             <TableFooter>
               <TableRow>
                 <TablePagination
                   rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                   colSpan={3}
                   count={filterddata.length}
                   rowsPerPage={rowsPerPage}
                   page={page}
                   SelectProps={{
                     inputProps: { 'aria-label': 'rows per page' },
                     native: true,
                   }}
                   onPageChange={handleChangePage}
                   onRowsPerPageChange={handleChangeRowsPerPage}
                   ActionsComponent={TablePaginationActions}
                 />
               </TableRow>
             </TableFooter>
           </Table>
         </TableContainer>
        
         </div>

         <Modal show={toggles}>
           <div  ref={ref}>
            <ModalHeader>details of the bill</ModalHeader>
            <ModalBody>
              <Detail detalis={detalis}/>
              
            </ModalBody>
            <Pdf targetRef={ref} filename='bill.pdf'>
            {({ toPdf })=><button onClick={toPdf}>Download</button>}
        </Pdf>
            <button onClick={handlecancel}>cancel</button>
          </div>
         </Modal>
        </div>
         
    )
}
