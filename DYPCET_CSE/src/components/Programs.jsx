import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { programs } from "../data";
import { tokens } from "../theme";

export default function Programs() {
  return (
    <Box component="section" id="programs" sx={{ py: { xs: 7, md: 11 }, bgcolor: tokens.paper2 }}>
      <Container>
        <Box sx={{ maxWidth: 640, mb: 6 }}>
          <Typography sx={{ color: tokens.gold600, fontWeight: 600, mb: 1.25 }}>
            Academic Programmes
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "2.1rem", lineHeight: 1.2 }}>
            From foundational engineering to independent research.
          </Typography>
        </Box>

        <Grid
          container
          sx={{
            border: `1px solid ${tokens.lineStrong}`,
            "& > .MuiGrid-root": { borderRight: `1px solid ${tokens.lineStrong}` },
            "& > .MuiGrid-root:last-of-type": { borderRight: "none" },
          }}
        >
          {programs.map((p) => (
            <Grid size={{ xs: 12, md: 4 }} key={p.title}>
              <Card elevation={0} square sx={{ height: "100%", borderRadius: 0 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography sx={{ color: tokens.gold600, fontSize: "0.82rem", fontWeight: 600 }}>
                    {p.tag}
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1.25, fontSize: "1.32rem", lineHeight: 1.3 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ mt: 2, color: tokens.inkSoft, fontSize: "0.94rem" }}>
                    {p.desc}
                  </Typography>
                  <Divider sx={{ mt: 2.5 }} />
                  <Stack direction="row" spacing={2.5} sx={{ pt: 2 }}>
                    {p.meta.map((m) => (
                      <Box key={m.l}>
                        <Typography
                          sx={{ fontFamily: '"Source Serif 4", serif', fontWeight: 600, color: tokens.navy900, fontSize: "1.15rem" }}
                        >
                          {m.n}
                        </Typography>
                        <Typography sx={{ color: tokens.inkSoft, fontSize: "0.78rem", mt: 0.25 }}>
                          {m.l}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
