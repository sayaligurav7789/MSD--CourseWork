import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { navLinks } from "../data";
import { tokens } from "../theme";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: tokens.navy950, color: "#8fa3ba", py: { xs: 5, md: 6 }, fontSize: "0.86rem" }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexWrap="wrap"
          gap={3}
          sx={{ pb: 3.5 }}
        >
          <Typography sx={{ color: "#fff", fontFamily: '"Source Serif 4", serif', fontSize: "1.05rem" }}>
            D. Y. Patil College of Engineering and Technology, Kolhapur
          </Typography>
          <Stack direction="row" spacing={2.75} flexWrap="wrap" useFlexGap component="nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="hover"
                color="inherit"
                sx={{ "&:hover": { color: "#fff" } }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          flexWrap="wrap"
          gap={1.25}
          sx={{ pt: 2.5 }}
        >
          <Typography sx={{ fontSize: "0.86rem" }}>
            © {new Date().getFullYear()} Department of Computer Science &amp; Engineering, DYPCET
            Kolhapur. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: "0.86rem" }}>
            Affiliated to Shivaji University, Kolhapur &nbsp;·&nbsp; NBA Accredited
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
