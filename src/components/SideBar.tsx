import { NavLink } from "@solidjs/router";
import { List, ListItem, ListItemText } from "@suid/material";

const SideBar = () => {
  return (
    <List>
      <ListItem component={NavLink} href="/dashboard" end>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem component={NavLink} href="/getting-started">
          <ListItemText primary="Getting Started" />
        </ListItem>
      <List>
        <ListItem component={NavLink} href="/getting-started/overview">
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem component={NavLink} href="/getting-started/usage">
          <ListItemText primary="Usage" />
        </ListItem>
      </List>
      {/* Add other sidebar items here */}
    </List>
  );
};

export default SideBar;
