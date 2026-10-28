import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { contact } from "../data";
import { tokens } from "../theme";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Demo only — wire this up to your college mail server or a form
    // endpoint (e.g. Formspree, an API route) to actually receive messages.
    setSent(true);
  }

  const rows = [
    { k: "Address", v: contact.address },
    { k: "Department Office", v: contact.office },
    { k: "Head of Department", v: contact.hodEmail },
    { k: "Office Hours", v: contact.hours },
  ];

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 7, md: 11 } }}>
      <Container>
        <Box sx={{ maxWidth: 640, mb: 6 }}>
          <Typography sx={{ color: tokens.gold600, fontWeight: 600, mb: 1.25 }}>Contact</Typography>
          <Typography variant="h2" sx={{ fontSize: "2.1rem", lineHeight: 1.2 }}>
            Reach the Department office.
          </Typography>
        </Box>

        <Grid container spacing={7}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Divider />
            {rows.map((r) => (
              <Box key={r.k}>
                <Box sx={{ py: 2 }}>
                  <Typography sx={{ fontSize: "0.82rem", color: tokens.gold600, fontWeight: 600 }}>
                    {r.k}
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: "0.98rem", color: tokens.ink }}>{r.v}</Typography>
                </Box>
                <Divider />
              </Box>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack component="form" spacing={2} onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Full name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                type="email"
                name="email"
                label="Email address"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                name="subject"
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="message"
                label="Message"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                minRows={4}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ alignSelf: "flex-start", bgcolor: tokens.navy900, "&:hover": { bgcolor: tokens.navy800 } }}
              >
                Send message
              </Button>
              {sent && (
                <Alert severity="info" onClose={() => setSent(false)}>
                  This is a demo form — connect it to your college mail server to receive messages.
                </Alert>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
