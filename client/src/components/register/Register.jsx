import './register.modules.css'

export default function register() {
  return (
    <>
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input type="text" name="email" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required="" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="repeatPassword" required="" />
            <label>Repeat Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </a>
        </form>
      </div>
    </>
  );
}
