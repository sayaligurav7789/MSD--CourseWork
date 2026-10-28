import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { notices, placements } from "../data";
import { tokens } from "../theme";

export default function Notices() {
  return (
    <Box component="section" id="notices" sx={{ py: { xs: 7, md: 11 }, bgcolor: tokens.paper2 }}>
      <Container>
        <Box sx={{ maxWidth: 640, mb: 6 }}>
          <Typography sx={{ color: tokens.gold600, fontWeight: 600, mb: 1.25 }}>
            Notices &amp; Events
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "2.1rem", lineHeight: 1.2 }}>
            What&rsquo;s happening in the Department.
          </Typography>
        </Box>

        <Grid container spacing={7}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Divider />
            {notices.map((n) => (
              <Box key={n.title}>
                <Stack direction="row" spacing={2.5} sx={{ py: 2.25 }}>
                  <Box
                    sx={{
                      fontFamily: '"Source Serif 4", serif',
                      color: tokens.navy900,
                      fontSize: "0.88rem",
                      width: 64,
                      flexShrink: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {n.month}
                    <Typography sx={{ fontSize: "1.3rem", fontWeight: 700 }}>{n.day}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.97rem", color: tokens.ink }}>{n.title}</Typography>
                    <Typography sx={{ color: tokens.gold600, fontSize: "0.76rem", fontWeight: 600, mt: 0.5 }}>
                      {n.cat}
                    </Typography>
                  </Box>
                </Stack>
                <Divider />
              </Box>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card elevation={0} sx={{ bgcolor: tokens.navy900, color: "#fff" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h3" sx={{ color: "#fff", fontSize: "1.15rem" }}>
                  Placements, 2025–26
                </Typography>
                <Typography sx={{ fontFamily: '"Source Serif 4", serif', fontSize: "2.6rem", color: tokens.gold500, mt: 2.25 }}>
                  {placements.rate}
                </Typography>
                <Typography sx={{ color: "#9fb3cb", fontSize: "0.88rem", mt: 0.25 }}>
                  {placements.rateLabel}
                </Typography>
                <Stack spacing={1.25} sx={{ mt: 2.75 }}>
                  {placements.rows.map((r) => (
                    <Stack
                      key={r.k}
                      direction="row"
                      justifyContent="space-between"
                      sx={{ fontSize: "0.88rem", color: "#cbd6e4", pt: 1.25, borderTop: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      <span>{r.k}</span>
                      <span>{r.v}</span>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
