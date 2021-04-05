import React from 'react'

const Signup = () => {
    return (
        <form>
          <div>
            <input type= "text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Signup"/>
        </form>
    )
  }

  export default Signup