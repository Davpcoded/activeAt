import React from "react";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row middle">
        <div class="col-12 col-md-6 title-section">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="text-center" style={{ paddingTop: "30px" }}>
                  <h1>ActiveAt</h1>
                  <p id="tagline"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="container">
            <div className="row">
              <h2 id="login-title">Login</h2>
              <form className="login center-block">
                <div className="form-group">
                  <div className="col-md-12">
                    <label for="InputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email-input"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password-input"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div style={{display: "none"}} id="alert" class="alert alert-danger" role="alert">
                      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                      <span class="sr-only">Error:</span> <span class="msg"></span>
                    </div>
                    <div style={{marginLeft: "15px;"}}>
                      <button type="submit" class="btn btn-outline-dark">Login</button>         
                      <p class = "text-right">Or sign up <a href="/signup">here</a></p> 
                    </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
