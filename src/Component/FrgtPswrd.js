import React from 'react'

const FrgtPswrd=()=>{
    return(
        <>
        <div className="Main_Container">
        <div className="Logo_Container">
            <div className="help">Need Help?<a href="mailto:info@smoothhiring.com?subject=Please%20help%20me%20with%3A%20"> Email us</a></div>
            <div className="Logo">
            <img src="https://smoothhiring.com/wp-content/uploads/2021/03/Smooth-hiring-logo-001-02.png" width="200" height="40" alt="logo"/>
            </div>
        </div>
        <div className="mid_cntnr">
            <div className="mail_cntnr">
               <div className="frgt_pswd"> <h1>Forgot Your Password? No Worries...</h1></div>
               <div className="para">
                   <p>Just enter the email address you signed up with, and we will send you a link to reset your password.</p>
               </div>
               <div className="mail">
                   <label for="email">Email:</label>
                   <div className="input"><span className="envelope"><i class="far fa-envelope"></i></span><input type="email" name="email" id="email" placeholder="Enter your email address" required/></div>
                   <div className="btn"><button>Reset Password</button></div>
               </div>
               <div className="prvcy">
                   <p>
                       View aur <a href="/">Privacy Policy</a>
                   </p>
               </div>
            </div>
        </div>
        <div className="footer">
            Clearfit Inc
        </div>
        </div>
        </>
    )
    
}
export default FrgtPswrd;