import React from 'react';
import Sidebar from '../../shared/Sidebar';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import {Container} from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import './index.css';

interface Props {
  children: React.ReactNode
}
function DashboardLayout (props:Props){
    return (
      <>
        <div className="dashboard-maincontent">
          <Sidebar />
          <>{props.children}</>
        </div>
      </>
    );
}

// const DashboardLayout: React.FunctionComponent<Props> = (props:Props) => {
//     if (!localStorage.getItem("userToken")){return <Navigate to={"/sign-in"} />;}

//     return (
//       <Container className='admin-bg p-0 dashboard-layout' fluid>
//         <div className='sidebar-main-container'>
//           <Sidebar />
//         </div>
//         <div className='maincont'>
//           <Header />
//           <main>{props.children}</main>
//           <Footer />
//         </div>
//       </Container>
//     );
// }
export default DashboardLayout;