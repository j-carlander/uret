import { Button } from "@mui/material";
import Icon from "@mui/material/Icon";
import { signOutCurrentUser } from "../../utils/currentUser";
import "./Header.css";

export function Header({ currentUser }) {
  return (
    <header className="page-header">
      <div className="current-user">
        <p>Välkommen {currentUser}!</p>
        <Button onClick={signOutCurrentUser}>
          <Icon>logout</Icon>
        </Button>
      </div>
    </header>
  );
}
