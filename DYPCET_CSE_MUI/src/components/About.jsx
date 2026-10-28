import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { pillars } from "../data";
import { tokens } from "../theme";

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 7, md: 11 } }}>
      <Container>
        <Box sx={{ maxWidth: 640, mb: 6 }}>
          <Typography sx={{ color: tokens.gold600, fontWeight: 600, mb: 1.25 }}>
            About the Department
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "2.1rem", lineHeight: 1.2 }}>
            Built on a curriculum that treats computing as an engineering discipline.
          </Typography>
        </Box>

        <Grid container spacing={7}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ color: tokens.inkSoft, fontSize: "1.02rem", mb: 2 }}>
              Established in 2001, the Department of Computer Science &amp; Engineering has grown into one
              of the college&rsquo;s largest and most research-active departments. The curriculum is
              designed around a strong foundation in data structures, algorithms, computer architecture
              and theory of computation, before students specialise into electives spanning artificial
              intelligence, systems, and security.
            </Typography>
            <Typography sx={{ color: tokens.inkSoft, fontSize: "1.02rem" }}>
              The Department runs its programmes under Shivaji University, Kolhapur, and is accredited by
              the National Board of Accreditation (NBA). Teaching is supplemented by active project labs,
              an in-house incubation cell, and long-standing industry partnerships that bring practising
              engineers into the classroom as guest faculty.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Divider />
            {pillars.map((p) => (
              <Box key={p.title}>
                <Box sx={{ py: 2.5 }}>
                  <Typography variant="h6" sx={{ fontSize: "1.05rem", color: tokens.navy900, mb: 0.75 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ color: tokens.inkSoft, fontSize: "0.95rem" }}>{p.text}</Typography>
                </Box>
                <Divider />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
