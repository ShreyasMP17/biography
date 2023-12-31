import "../styles/adminNavbar.css"
import { Link } from "react-router-dom";

const AdminNavbar = () => {
     return (
          <div className="main1">
               <div className="adminNavbar">
                    <p> <b> Admin Portal</b></p>
                    <Link to="/admin/"> Home</Link>
                    <Link to="/admin/add-star" href="">Add Star</Link>
                    <Link to="/admin/add-user"href="">Add User</Link>
                    <Link to="/admin/star-list" href="">Star List</Link>
                    <Link to="/admin/user-list" href="">User List</Link>
                    <Link to="/" href="">Logout</Link>
                    
                    
               </div>
               
          </div>
     );
}

export default AdminNavbar;

