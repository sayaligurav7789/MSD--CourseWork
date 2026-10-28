import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import { navLinks } from "../data";
import { tokens } from "../theme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* Utility bar */}
      <Box sx={{ bgcolor: tokens.navy950, color: "#cbd6e4", fontSize: "0.83rem" }}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={2}
            sx={{ py: 1 }}
          >
            <Typography variant="body2" sx={{ color: "#9fb3cb" }}>
              D. Y. Patil College of Engineering and Technology, Kolhapur &nbsp;·&nbsp; An Autonomous
              Institute
            </Typography>
            <Stack direction="row" spacing={2.5} component="nav">
              <Link href="#" underline="hover" color="inherit" sx={{ "&:hover": { color: "#fff" } }}>
                Admissions
              </Link>
              <Link href="#" underline="hover" color="inherit" sx={{ "&:hover": { color: "#fff" } }}>
                Alumni
              </Link>
              <Link href="#contact" underline="hover" color="inherit" sx={{ "&:hover": { color: "#fff" } }}>
                Contact
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main nav */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ bgcolor: tokens.navy900, borderBottom: `1px solid ${tokens.navy700}` }}
      >
        <Container>
          <Toolbar disableGutters sx={{ py: 1, gap: 3 }}>
            <Stack direction="row" alignItems="center" spacing={1.75} sx={{ flexGrow: 1 }}>
              <Avatar
                variant="rounded"
                sx={{
                  width: 52,
                  height: 52,
                  background: `linear-gradient(155deg, ${tokens.gold500}, ${tokens.gold600})`,
                  color: tokens.navy950,
                  fontFamily: '"Source Serif 4", serif',
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                DY
              </Avatar>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: '"Source Serif 4", serif',
                    fontSize: "1.08rem",
                    fontWeight: 600,
                    lineHeight: 1.25,
                  }}
                >
                  Department of Computer Science &amp; Engineering
                </Typography>
                <Typography sx={{ color: "#9fb3cb", fontSize: "0.8rem", mt: 0.25 }}>
                  D. Y. Patil College of Engineering and Technology, Kolhapur
                </Typography>
              </Box>
            </Stack>

            {isMobile ? (
              <IconButton
                onClick={() => setOpen(true)}
                aria-label="Open navigation"
                sx={{ color: "#fff", border: `1px solid ${tokens.navy700}`, borderRadius: 1 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={0.5} component="nav">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: "#d7e0ec",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      px: 1.75,
                      py: 1.25,
                      borderRadius: 0.5,
                      "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.06)" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, bgcolor: tokens.navy900, height: "100%" }} role="presentation">
          <List sx={{ pt: 2 }}>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.href}
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}
                sx={{ color: "#d7e0ec", "&:hover": { bgcolor: "rgba(255,255,255,0.06)", color: "#fff" } }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
