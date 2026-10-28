import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { facilities } from "../data";
import { tokens } from "../theme";

export default function Facilities() {
  const mid = Math.ceil(facilities.length / 2);
  const columns = [facilities.slice(0, mid), facilities.slice(mid)];

  return (
    <Box component="section" id="facilities" sx={{ py: { xs: 7, md: 11 } }}>
      <Container>
        <Box sx={{ maxWidth: 640, mb: 6 }}>
          <Typography sx={{ color: tokens.gold600, fontWeight: 600, mb: 1.25 }}>Facilities</Typography>
          <Typography variant="h2" sx={{ fontSize: "2.1rem", lineHeight: 1.2 }}>
            Labs built around one specialisation each, not shared general-purpose rooms.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {columns.map((col, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <Divider />
              {col.map((f) => (
                <Box key={f.name}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                    spacing={2}
                    sx={{ py: 2.25 }}
                  >
                    <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: tokens.navy900 }}>
                      {f.name}
                    </Typography>
                    <Typography sx={{ color: tokens.inkSoft, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                      {f.cap}
                    </Typography>
                  </Stack>
                  <Divider />
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
