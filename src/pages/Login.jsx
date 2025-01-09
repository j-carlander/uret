import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import fetchService from "../services/fetchService";

const defaultUser = { email: "", password: "" };

export function Login() {
  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();
  async function onSubmit(e) {
    e.preventDefault();
    const result = await fetchService.login(user);
    result.message == "Inloggad"
      ? navigate("/")
      : alert("Fel användarnamn eller lösenord");
  }
  return (
    <article className="login-page-wrapper">
      <form className="login-form" onSubmit={onSubmit}>
        <TextField
          id="email-field"
          label="Epost"
          variant="outlined"
          type="email"
          value={user.email}
          onChange={(e) =>
            setUser((user) => ({ ...user, email: e.target.value }))
          }
        />
        <TextField
          id="password-field"
          label="Lösenord"
          variant="outlined"
          type="password"
          value={user.password}
          onChange={(e) =>
            setUser((user) => ({ ...user, password: e.target.value }))
          }
        />
        <div className="login-btn-group">
          <Button
            variant="outlined"
            type="reset"
            onClick={() => setUser(defaultUser)}>
            Avbryt
          </Button>
          <Button variant="contained" type="submit">
            Logga in
          </Button>
        </div>
      </form>
      <Divider />
      <div className="register-btn-container">
        <Link to={"/registrera"}>
          <Button variant="text" size="small">
            Registrera
          </Button>
        </Link>
      </div>
    </article>
  );
}
