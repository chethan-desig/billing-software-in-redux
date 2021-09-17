import register from './photos/register.png'
import login from './photos/login.png'
import customer from './photos/customer.png'
import product from './photos/product.png'
import bill from './photos/bill.png'
import billing from './photos/billing.jpg'
import Navbar from './navbar/navbarauth'
const Home=()=>{
    return (
        <div>
           <Navbar />
         <img src={billing} alt='thid is a web design ' class="rounded mx-auto d-block" />

         <div class='container'>
<div className='row' id = 'scrollspyHeading1'>
   
    <div class="col-md-6" >

    <h3>Register page</h3>
   <p>Here we can register with there details which still u didn't have the account in this software and u can register by there name address emailId phone number and then which type of the bussiness you have to use this software to billing and then which u already have an account in this software u only need to login by there emailid and password which u created while registering process  </p>
</div>
<div class='col-md-6'>
 <img src={register}alt='thid is a web design ' height='300px' width='100%'/>
 </div>
 
 </div>
 <div className='row' id = 'scrollspyHeading2'>
 <div class='col-md-6'>
 <img src={login} alt='thid is a web design ' height='300px' width='100%'/>
 </div>
    <div class="col-md-6" >

    <h3>Login page</h3>
   <p >while u click on the login link in the navbar u can see the login page which u login by the email and password while u creating in the register page and you currect cerdential in the fields you can get in to inside the software you can start the working by  your  details while you entering the fileds which you give wrong cerdiential then you will not redirect to page it will the errors   </p>
 
</div>

 </div>
 <div className='row' id = 'scrollspyHeading1'>
   
    <div class="col-md-6" >

    <h3>Customer page</h3>
   <p >while you given the right crediential in the login page you will see the customer page and then you will have right to add your customers in the field in the fields you will add there name and then there phone number and email and when you click on the submit it will enter in the list which is showen in the left of the page in this you see all you customer information which you need whenever you want this help full by searching the name of the customer and then you edit it by ther customer name and email and phone number and then you will able to delete</p>
  
</div>
<div class='col-md-6'>
 <img src={customer} alt='thid is a web design ' height='300px' width='100%'/>
 </div>
 
 </div>
 <div className='row' id = 'scrollspyHeading1'>
 <div class='col-md-6'>
 <img src={product} alt='thid is a web design ' height='300px' width='100%'/>
 </div>
 
    <div class="col-md-6" >

    <h3>Product page</h3>
   <p >In this page you will see the products details it will get when you click on the product link in the navbar and this will show product page then you will enter the product name in the field and then you will add the price of that product and then when you click on the submit button it will show in the list of the product which it is usefull to you when will enquire the product details in the list by there name and atoz or ztoz an you will use by there name to search and you will able to edit and then  you will able to delete   </p>

</div>
<div className='row' id = 'scrollspyHeading1'>
   
   <div class="col-md-6" >

   <h3>Billing page</h3>
  <p > this page will open when you cilck on the billing link it will show this page and then in this page you will able to enter the product name by selecting and customers which you enter in the customer page it will be shown and you enter the date of which you are creating the bill and you will able to enter quantity of the product by entering adding or minusing the product quantity and then here you will able to enter the products not only the one product you can add multiple product in the quantity and then you able download the bill invoice will you submiting the billing details and this showen in then left of the pae in the list and you can remove the bills </p>
 
</div>
<div class='col-md-6'>
<img src={bill} alt='thid is a web design ' height='300px' width='100%'/>
</div>

</div>
 
 </div>
 
 </div>
  <footer>
      demo login details-Login:harsha@gmail.com,password:123456
  </footer>
        </div>
    )
}
export default Home