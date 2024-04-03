import { FaUser } from "react-icons/fa6";
import { FaLock, FaRegUser } from "react-icons/fa";

import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [userName, setUserName] = useState("Jack");
  const [password, setPassword] = useState("qwerty");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName && !password) return;

    dispatch(login({ userName, password }));

    navigate(-1);

    toast.success(`Welcome ${userName}`);
  }

  return (
    <section className="login-section">
      <div className="login-section__overlay h-full center">
        <div className="login-form">
          <div className="login-form__icon center">
            <FaRegUser />
          </div>

          <div className="login-form__wrapper">
            <form onSubmit={handleSubmit} className="form">
              <div className="form__row">
                <div className="form__icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  className="form__input"
                  placeholder="Email / UserName"
                  defaultValue={userName}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="form__row">
                <div className="form__icon">
                  <FaLock />
                </div>
                <input
                  type="password"
                  className="form__input"
                  placeholder="Password"
                  defaultValue={password}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-register">
                <div className="form-register__remember">
                  <input type="checkbox" className="form-register__checkbox" />
                  <label htmlFor="">Remember me</label>
                </div>

                <p>forgot password?</p>
              </div>

              <button className="form__btn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
