import { NavLink } from "@solidjs/router";
import { List, ListItem, ListItemText } from "@suid/material";
import Drawer from "@suid/material/Drawer";
import { styled, useTheme } from '@suid/material/styles';
import { yellow } from "@suid/material/colors";

const SideBar = () => {
  const theme = useTheme();

  // Create a styled Drawer with theme overrides
  const StyledDrawer = styled(Drawer)({
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
      backgroundColor: theme.palette.primary.dark, // use the dark shade of the primary color
      color: yellow[500],
    },
  });

  const StyledNavLink = styled(NavLink)({
    color: 'inherit', // The color will be inherited from the parent styling
    textDecoration: 'none', // Removing the underline or other text decorations
    // '&:hover, &:focus': {
    //   color: 'inherit', // Ensure the color is inherited even on hover/focus
    // },
  });

  const StyledListItemText = styled(ListItemText)({
    color: 'inherit', // The color will be inherited from the parent styling
  });

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>
        <ListItem component={StyledNavLink} href="/">
          <StyledListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={StyledNavLink} href="/getting-started">
          <StyledListItemText primary="Getting started" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default SideBar;
