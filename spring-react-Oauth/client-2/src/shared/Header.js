import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// class AppHeader extends Component {
//   render() {
//     return (
//       <header className="app-header">
//         <div className="container">
//           <div className="app-branding">
//             <Link to="/" className="app-title">
//               React Login
//             </Link>
//           </div>
//           <div className="app-options">
//             <nav className="app-nav">
//               {this.props.authenticated ? (
//                 <ul>
//                   <li>
//                     <NavLink to="/profile">
//                       <p>profile</p>
//                     </NavLink>
//                   </li>
//                 </ul>
//               ) : (
//                 <ul>
//                   <li>
//                     <NavLink to="/login">Login</NavLink>
//                   </li>
//                 </ul>
//               )}
//             </nav>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

// export default AppHeader;

// import React from 'react';

const Header = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {props.authenticated ? (
                <NavLink to="/profile" className="nav-link">
                  <p>Profile</p>
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
