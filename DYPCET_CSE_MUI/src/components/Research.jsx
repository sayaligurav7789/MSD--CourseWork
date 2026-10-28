import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { researchAreas } from "../data";
import { tokens } from "../theme";

export default function Research() {
  return (
    <Box component="section" id="research" sx={{ py: { xs: 7, md: 11 } }}>
      <Container>
        <Box sx={{ maxWidth: 640, mb: 6 }}>
          <Typography sx={{ color: tokens.gold600, fontWeight: 600, mb: 1.25 }}>
            Research Areas
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "2.1rem", lineHeight: 1.2 }}>
            Six groups, organised around problems rather than tools.
          </Typography>
          <Typography sx={{ mt: 1.75, color: tokens.inkSoft, fontSize: "1.02rem" }}>
            Faculty and postgraduate researchers work in focused groups, each anchored to a set of open
            problems the group returns to across projects and publications.
          </Typography>
        </Box>

        <Grid container spacing="1px" sx={{ bgcolor: tokens.line }}>
          {researchAreas.map((r) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={r.idx}>
              <Paper elevation={0} square sx={{ p: 3.75, height: "100%", border: `1px solid ${tokens.line}` }}>
                <Typography sx={{ fontFamily: '"Source Serif 4", serif', color: tokens.lineStrong, fontSize: "1.6rem", fontWeight: 600 }}>
                  {r.idx}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontSize: "1.08rem" }}>
                  {r.title}
                </Typography>
                <Typography sx={{ mt: 1, color: tokens.inkSoft, fontSize: "0.92rem" }}>
                  {r.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
