import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { tokens } from "../theme";

// A continuously scrolling strip of images. The image list is rendered twice
// back-to-back and the whole track is animated by exactly -50%, so the loop
// seam is invisible. Pauses on hover/focus and respects reduced-motion.
export default function Marquee({ images, speed = 34 }) {
  const track = [...images, ...images];

  return (
    <Box
      sx={{
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.14)",
        bgcolor: "rgba(6,21,39,0.4)",
        py: 2.5,
        "&:hover .marquee-track, &:focus-within .marquee-track": {
          animationPlayState: "paused",
        },
      }}
    >
      <Box
        className="marquee-track"
        sx={{
          display: "flex",
          width: "max-content",
          gap: 3,
          animation: `marquee-scroll ${speed}s linear infinite`,
          "@keyframes marquee-scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        {track.map((img, i) => (
          <Box
            key={`${img.src}-${i}`}
            sx={{
              position: "relative",
              flexShrink: 0,
              width: { xs: 220, md: 280 },
              height: { xs: 140, md: 176 },
              borderRadius: 1,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt={img.caption}
              loading="lazy"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(0deg, rgba(6,21,39,0.85), transparent)",
                px: 1.5,
                py: 1,
              }}
            >
              <Typography sx={{ color: "#EDF1F6", fontSize: "0.78rem", fontWeight: 500 }}>
                {img.caption}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
