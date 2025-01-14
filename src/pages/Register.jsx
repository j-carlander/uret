import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const defaultUser = { fname: "", lname: "", email: "", password: "" };

export function Register() {
  const [user, setUser] = useState(defaultUser);
  function onSubmit(e) {
    e.preventDefault();
    console.log("User info provided: ", user);
  }
  return (
    <article className="login-page-wrapper">
      <Typography variant="h3" component="h1" align="center">
        Uret
      </Typography>
      <Typography variant="h4" component="h2" align="center">
        Registrera nytt konto
      </Typography>
      <form className="login-form" onSubmit={onSubmit}>
        <TextField
          id="fname-field"
          label="Förnamn"
          variant="outlined"
          type="text"
          value={user.fname}
          onChange={(e) =>
            setUser((user) => ({ ...user, fname: e.target.value }))
          }
        />
        <TextField
          id="lname-field"
          label="Efternamn"
          variant="outlined"
          type="text"
          value={user.lname}
          onChange={(e) =>
            setUser((user) => ({ ...user, lname: e.target.value }))
          }
        />
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
            Registrera
          </Button>
        </div>
      </form>
      <Divider />
      <div className="register-btn-container">
        <Button component={Link} to={"/logga-in"} variant="text" size="small">
          Har du redan konto, Logga in här
        </Button>
      </div>
    </article>
  );
}
