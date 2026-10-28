import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { hod, faculty } from "../data";
import { tokens } from "../theme";

export default function Faculty() {
  return (
    <Box component="section" id="faculty" sx={{ py: { xs: 7, md: 11 }, bgcolor: tokens.navy950, color: "#edf1f6" }}>
      <Container>
        <Box sx={{ maxWidth: 640, mb: 6 }}>
          <Typography sx={{ color: tokens.gold500, fontWeight: 600, mb: 1.25 }}>Faculty</Typography>
          <Typography variant="h2" sx={{ color: "#fff", fontSize: "2.1rem", lineHeight: 1.2 }}>
            A department led by teacher-researchers.
          </Typography>
        </Box>

        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            bgcolor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            p: 4,
            mb: 6,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              border: `1px solid ${tokens.gold500}`,
              p: 0.75,
              flexShrink: 0,
            }}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(150deg, ${tokens.navy700}, ${tokens.navy800})`,
                color: tokens.gold100,
                fontFamily: '"Source Serif 4", serif',
                fontSize: "1.7rem",
                fontWeight: 600,
              }}
            >
              {hod.initials}
            </Avatar>
          </Box>
          <Box>
            <Typography variant="h3" sx={{ color: "#fff", fontSize: "1.3rem" }}>
              {hod.name}
            </Typography>
            <Typography sx={{ color: tokens.gold500, fontSize: "0.92rem", fontWeight: 600, mt: 0.5 }}>
              {hod.role}
            </Typography>
            <Typography sx={{ color: "#b9c6d6", mt: 1.75, fontSize: "0.96rem", maxWidth: "60ch" }}>
              {hod.bio}
            </Typography>
          </Box>
        </Card>

        <Grid container spacing={2.5}>
          {faculty.map((f) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={f.name}>
              <Card
                elevation={0}
                sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", height: "100%" }}
              >
                <CardContent sx={{ p: 2.75 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      background: `linear-gradient(150deg, ${tokens.navy700}, ${tokens.navy800})`,
                      border: "1px solid rgba(184,134,43,0.5)",
                      color: tokens.gold100,
                      fontFamily: '"Source Serif 4", serif',
                      fontWeight: 600,
                    }}
                  >
                    {f.initials}
                  </Avatar>
                  <Typography sx={{ color: "#fff", fontSize: "1rem", mt: 1.75 }}>{f.name}</Typography>
                  <Typography sx={{ color: "#8fa3ba", fontSize: "0.82rem", mt: 0.4 }}>{f.role}</Typography>
                  <Divider sx={{ mt: 1.25, mb: 1.25, borderColor: "rgba(255,255,255,0.08)" }} />
                  <Typography sx={{ color: "#6e839c", fontSize: "0.78rem" }}>{f.spec}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
