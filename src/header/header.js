// import React from 'react'
// import "./btm.css"
// export const btm = () => {
//   return (
//     <div className="container">
//       <div className="sidebar">
//         <Link href="/dashboard">
//           <div className="sidebar1">
//             <HomeIcon className="svg" />  
//             <p className="tittle">Dashboard</p>
//           </div>
//         </Link>

//         <Link href="/user">
//           <div className="sidebar1">
//             <SideuserIcon />
           
//             <p className="tittle"> Users</p>
//           </div>
//         </Link>

//         <Link href="/dispatcherusers">
//           <div className="sidebar1">
//             {/* <DispatcherIcon /> */}
           
//             <p className="tittle"> Dispatcher Users</p>
//           </div>
//         </Link>

//         <div className="sidebar1">
//           {/* <DriverIcon /> */}
//           <div className="dropdown">
//             <ul className="list">
              
//               <p className="tittle"> Drivers</p>
//               <li>
//                 <Link href="/all-drivers">All Drivers</Link>
//               </li>
//               <li>
              
//                 <Link href="/approveddrivers">Approved Drivers</Link>
//               </li>
//               <li>
//                 <Link href="/approvalpendingdrivers">
//                   Approval Pending Drivers
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <Link href="/coupons">
//           <div className="sidebar1">
//             {/* <CouponsIcon /> */}
           
//             <p className="tittle"> Coupons</p>
//           </div>
//         </Link>
//         <Link href="/riders">
//           <div className="sidebar1">
//             {/* <AllrideIcon /> */}
          
//             <p className="tittle">   All Rides</p>
//           </div>
//         </Link>
//         <Link href="/mapview">
//           <div className="sidebar1">
//             {/* <MapviewIcon /> */}
            
//             <p className="tittle">Map View</p>
//           </div>
//         </Link>
//         <p>
//           <p className="btn">OTHER SERVICES</p>
//         </p>
//         <Link href="/complaints">
//           <div className="sidebar1">
//             {/* <ComplaintsIcon /> */}
           
//             <p className="tittle"> Complaints</p>
//           </div>
//         </Link>
//         <Link href="/sos">
//           <div className="sidebar1">
//             {/* <SosIcon /> */}
           
//             <p className="tittle">  SOS</p>
//           </div>
//         </Link>
//         <Link href="/notification">
//           <div className="sidebar1">
//             {/* <NotificationIcon /> */}
            
//             <p className="tittle"> Notification</p>
//           </div>
//         </Link>
//         <div className="sidebar1">
//           {/* <VechicleIcon /> */}
//           <div className="dropdown">
//             <select className="select"name="" id="">
              
//               <li className="tittle">Vehicle Rental</li>

//               <option value="">
//                 <Link href="/rentalvehiclebooking">Rental Vehicle Type</Link>
//               </option>

//               <option value="">
            
//                 <Link href="/rentalvehiclebooking">Rented Vehicle Booking</Link>
//               </option>
//             </select>
//           </div>
//         </div>
//         <div className="sidebar1">
//           {/* <VechiclesettingsIcon /> */}
//           <div className="dropdown">
//             <select className="select" name="" id="">
              
//               <li className="tittle">Vehicle Settings</li>

//               <option value="">
//                 <Link href="/vehicletype">Vehicle Type </Link>
//               </option>

//               <option value="">
//                 <Link href="/brand">Brand</Link>
//               </option>

//               <option value="/car-model">
                
//                 <Link href="/car-model">Model</Link>
//               </option>
//             </select>
//           </div>
//         </div>
//         <p>
//           <p className="btn">GENERAL SETTINGS</p>
//         </p>
//         <Link href="/cms-pagescopy">
//           <div className="sidebar1">
//             {/* <CmspagesIcon /> */}
//             <p className="tittle">CMS Pages</p>
            
//           </div>
//         </Link>
//         <div className="sidebar1">
//           {/* <PaymentIcon /> */}
//           <div className="dropdown">
//             <select className="select" name="" id="">
              
//               <li className="tittle">Payments</li>

//               <option value="">
//                 <Link href="/">Drivers Payout </Link>
//               </option>

//               <option value="">
//                 <Link href="/payout-requests">Payout Requests </Link>
//               </option>

//               <option value="">
//                 <Link href="/driverwallet-transactions">
//                   Driver Wallet Transaction
//                 </Link>
//               </option>

//               <option value="">
//                 <Link href="/userwallet-transactions">
//                   user Wallet Transaction{" "}
//                 </Link>
//               </option>
//             </select>
//           </div>
//         </div>

//         <div className="sidebar1">
//           {/* <AdministationIcon /> */}
//           <select className="select" name="" id="">
            
//             <li className="tittle"> Administartion Tools</li>

//             <option value="">
//               <Link href="/country">Country </Link>
//             </option>

//             <option value="">
//               {" "}
//               <Link href="/currency"> Currency</Link>
//             </option>

//             <option value="">
//               <Link href="/commission">Commission </Link>{" "}
//             </option>

//             <option value="">
              
//               <Link href="/taxsetting"> Tax Setting </Link>{" "}
//             </option>

//             <option value="">
              
//               <Link href="/email"> Email template</Link>{" "}
//             </option>

//             <option value="">
              
//               <Link href="/driverdocument"> Driver Document </Link>{" "}
//             </option>

//             <option value="">
//               <Link href="/settings">Settings </Link>
//             </option>

//             <option value="">
              
//               <Link href="/term"> Terms and Condition </Link>
//             </option>

//             <option value="">
//               <Link href="/language">Language </Link>
//             </option>

//             <option value="">
//               <Link href="/paymentmethods">patment Methods </Link>
//             </option>
//           </select>
//         </div>

//         <Link href="">
//           <div className="sidebar1">
//             {/* <ReportIcon /> */}
//             <select className="select" name="" id="">
             
//               <li className="tittle">Report</li>

//               <option value="">
                
//                 <Link href="/user-reports"> Reports </Link>
//               </option>

//               <option value="">
//                 <Link href="/driver-reports"> Driver Reports </Link>{" "}
//               </option>

//               <option value="">
//                 {" "}
//                 <Link href="/travel-reports"> Travel Reports </Link>{" "}
//               </option>
//             </select>
//           </div>
//         </Link>
//         <div className="v">
//           <h4>V:3.3.2</h4>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default btm;

import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'
import "./btm.css";

const Btm = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Link to="/dashboard">
          <div className="sidebar1">
            {/* HomeIcon */}
            <p className="tittle">Dashboard</p>
          </div>
        </Link>

        {/* Other links similar to Dashboard */}
        {/* ... */}

        <Link to="/cms-pagescopy">
          <div className="sidebar1">
            {/* CmspagesIcon */}
            <p className="tittle">CMS Pages</p>
          </div>
        </Link>

        {/* Other links similar to CMS Pages */}
        {/* ... */}

        <Link to="">
          <div className="sidebar1">
            {/* ReportIcon */}
            <p className="tittle">Report</p>
          </div>
        </Link>

        {/* Other links similar to Report */}
        {/* ... */}

        <div className="v">
          <h4>V:3.3.2</h4>
        </div>
      </div>
    </div>
  );
};

export default Btm;
