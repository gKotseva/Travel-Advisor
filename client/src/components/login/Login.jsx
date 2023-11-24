import './login.modules.css'

export default function Login() {
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="email" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </>
  );
}
