import React from "react";

function SignUp() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
