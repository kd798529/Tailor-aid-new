import React, { Component } from 'react';
import './Signup.css';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

class Signup extends Component {
    render() {
        return(
            <div>
                <div>
                    <NavigationBar />
                </div>
            <form class="form-signin">
           <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
           <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
           <label for="inputEmail" class="sr-only">Full Name</label>
           <input type="email" id="inputEmail" class="form-control" placeholder="Full name" required="" autofocus="" />
           <label for="inputEmail" class="sr-only">Email address</label>
           <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
           <label for="inputPassword" class="sr-only">Password</label>
           <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
           <div class="checkbox mb-3">
             <label>
               <input type="checkbox" value="remember-me" /> Remember me
             </label>
           </div>
           <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
           <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
         </form>
         <div>
             <Footer />
         </div>
        </div> 
        )
    }
}


export default Signup;