import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { Divider } from "@mui/material";

const defaultUser = { email: "", password: "" };

export function Login() {
  const [user, setUser] = useState(defaultUser);
  function onSubmit(e) {
    e.preventDefault();
    console.log("User info provided: ", user);
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
            onClick={() => setUser(defaultUser)}
          >
            Avbryt
          </Button>
          <Button variant="contained" type="submit">
            Logga in
          </Button>
        </div>
      </form>
      <Divider />
      <div className="register-btn-container">
        <Button variant="text" size="small">
          Registrera
        </Button>
      </div>
    </article>
  );
}
