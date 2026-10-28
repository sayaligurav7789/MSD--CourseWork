import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { stats } from "../data";
import { tokens } from "../theme";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        background: `radial-gradient(ellipse 900px 500px at 78% -10%, rgba(184,134,43,0.18), transparent 60%),
          linear-gradient(180deg, ${tokens.navy950}, ${tokens.navy900} 60%, ${tokens.navy800})`,
        color: "#edf1f6",
        pt: { xs: 7, md: 12 },
      }}
    >
      <Container>
        <Grid container spacing={7} alignItems="center" sx={{ pb: { xs: 5.5, md: 8 } }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography sx={{ color: tokens.gold500, fontWeight: 600, mb: 2.25 }}>
              Estd. 2001 &nbsp;·&nbsp; NBA Accredited Programme
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: "#fff", fontSize: { xs: "2.3rem", md: "3.1rem" }, lineHeight: 1.12, maxWidth: "15ch" }}
            >
              Educating engineers who build the systems the next decade will run on.
            </Typography>
            <Typography sx={{ mt: 2.75, color: "#b9c6d6", fontSize: "1.12rem", maxWidth: "46ch" }}>
              The Department of Computer Science &amp; Engineering trains undergraduate, postgraduate and
              doctoral students in the foundations and frontiers of computing — from algorithms and
              systems to AI, data science and secure infrastructure.
            </Typography>
            <Stack direction="row" spacing={1.75} flexWrap="wrap" useFlexGap sx={{ mt: 4.25 }}>
              <Button
                href="#programs"
                variant="contained"
                sx={{
                  bgcolor: tokens.gold500,
                  color: tokens.navy950,
                  "&:hover": { bgcolor: "#c6963b" },
                }}
              >
                Explore programmes
              </Button>
              <Button
                href="#research"
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.35)",
                  "&:hover": { borderColor: "rgba(255,255,255,0.6)", bgcolor: "rgba(255,255,255,0.08)" },
                }}
              >
                View research areas
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 1,
                p: 3.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Source Serif 4", serif',
                  color: tokens.gold100,
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  borderLeft: `2px solid ${tokens.gold500}`,
                  pl: 2,
                }}
              >
                Our graduates are trained to reason about a problem before they reach for a framework — to
                know why a system is built the way it is, not only how to build it.
                <Box component="span" sx={{ display: "block", color: "#8fa3ba", fontSize: "0.8rem", mt: 1.25 }}>
                  — From the Department&rsquo;s teaching philosophy
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.14)", bgcolor: "rgba(6,21,39,0.55)" }}>
        <Container>
          <Grid container>
            {stats.map((s, i) => (
              <Grid
                size={{ xs: 6, md: 3 }}
                key={s.label}
                sx={{
                  py: 3.25,
                  px: 2.5,
                  borderRight: {
                    xs: i % 2 === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    md: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  },
                }}
              >
                <Typography
                  sx={{ fontFamily: '"Source Serif 4", serif', color: "#fff", fontSize: "1.9rem", fontWeight: 600 }}
                >
                  {s.num}
                </Typography>
                <Typography sx={{ color: "#9fb3cb", fontSize: "0.85rem", mt: 0.5 }}>{s.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
