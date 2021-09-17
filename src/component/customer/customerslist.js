import React,{useState,useEffect} from "react"
import { useDispatch } from "react-redux";
import { sort, sortReverse} from "./sorting"
import CustomerForm  from './customerform'
import { startdeletecustomer } from '../../action/componentsaction'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Table,TableBody,TableCell,TableContainer,TableFooter,TablePagination,TableRow,Paper,IconButton,Button,TableHead } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './cus.css'
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
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
                    

      export default function CustomPaginationActionsTable(props){
    const {data} = props
    const classes = useStyles2();

    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(5);
    const [ editData, setEditData ] = useState({})
    const [ toggle, setToggle ] = useState(false)
    const [searchingitem,setSearchingItem] = useState('')
    const [filterddata,setFilterData] = useState([])
    const [sorting,setSort] = useState([])
    useEffect(()=>{
        setFilterData(data)
    },[data])
    const dispatch = useDispatch()
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, filterddata.length - page * rowsPerPage);
    const handleChange=(e)=>{
        setSearchingItem(e.target.value)
        
    }
 
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
      const handleToggleTrue = () => {
        setToggle(true)
      }
    
      const handleToggleFalse = () => {
        setToggle(false)
      }
    
  const handleDelete = (_id) => {
    dispatch(startdeletecustomer(_id))
  }

  const handleDetails = (data) => {
    setEditData(data)
    handleToggleTrue()
  }


    const handlesearch=(data,arr)=>{
        const find=data.filter((ele)=>{
            return ele.name.toLowerCase().includes(searchingitem.toLocaleLowerCase())
        })
        if(arr.length===0){
           return  setFilterData(data)
        }else{
           return setFilterData(find)
        }
    }
    useEffect(()=>{
       handlesearch(data,searchingitem)
    },[searchingitem])
    const handleSelectChange=(e)=>{
        const result = e.target.value
        setSort(result)
        if(result ==='atoz'){
            const resultData = sort(data)
            setFilterData(resultData) 
        } else if(result === 'ztoa'){
            const resultData= sortReverse(data)
            setFilterData(resultData)
        }
    }
 
    return(
        <div>
            <input type='text' placeholder='search here by name' value={searchingitem} onChange={handleChange}/>
            <label>Sort By</label>
                        <select value={ sorting } onChange={ handleSelectChange } style = {{ width:'200px'}}>
                            <option value="atoz">A to Z</option>
                            <option value="ztoa">Z to A</option>
                        </select>
                        <div className='mt-4'>
                        <div className="customer__table">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Mobile&nbsp;</TableCell>
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
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.mobile}
              </TableCell>
              <TableCell style={{ width: 230 }} align="center">
                <Button onClick={ () => handleDetails(row) }><EditIcon/></Button>
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
    <div>
     <Modal show={toggle}>
       <ModalHeader>edit form</ModalHeader>
       <ModalBody>
       {
        Object.keys(editData).length > 0 && toggle ?<CustomerForm 
          editData={ editData }  
          handleToggleFalse={ handleToggleFalse }/> : null
      }
       </ModalBody>
     </Modal>
    </div>
    </div>
       </div>
             
                
        </div>
    )
}
