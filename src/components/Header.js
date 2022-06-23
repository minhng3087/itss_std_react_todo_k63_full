import { auth } from "../lib/firebase";
import Login from "./Login"

function Header({ user }) {
    
  const logout = () => {
    auth.signOut();
  };
  
  return (
    <div> 
    {user ? ( 
      <div class="navbar-end" 
        style={{
            display: "flex",
        }}
    >
        <div class="navbar-item">
          {user.name}
        </div>
        <div class="navbar-item">
          <button class="button is-danger is-light is-small" onClick={logout}> Logout </button>
        </div>
      </div >
    ) : (<Login />)}
    </div>
  )
}

export default Header;