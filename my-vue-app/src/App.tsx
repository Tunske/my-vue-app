
import "./App.css"

function Navbar() {
  return (
    <nav className="navbar" role="navigation" >
      <div className="container-fluid" />

      <div className="navbar-header">
        <img src="./logo.svg" alt="logo" />
      </div>


      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


        <ul className="nav navbar-nav navbar-right">
          <li><p className="navbar-text">New to Xpress rewards?</p></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Sign Up</b> </a>
          </li>
        </ul>
      </div>

    </nav>
  );
}
function App() {

  return (

    <div>
      <body>
        <Navbar />

        <div className="form-wrapper">
          <h2>Welcome Back!</h2>
          <label>Sign in to your Xpress reward partner's dashboard </label>
          <hr />
          <form action="#">
            <label>Email or phone number</label>
            <div className="form-control">
              <input type="text" required />
            </div>
            <label>Password</label>
            <div className="form-control">
              <input type="password" required />
            </div>
            <button type="submit">Sign In</button>
            <div className="form-help">
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label ><h6>Remember me</h6></label>
              </div>
              <a href="#"></a><h5>Need help?</h5><a />
            </div>
          </form>
          <p>New to here? <a href="#">Sign up now</a></p>
        </div>
      </body>
    </div>
  )
}

export default App;
