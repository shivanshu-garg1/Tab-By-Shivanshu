import { Stack, Link, IconButton, Tooltip } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import ChatGPTIcon from "./ChatGPTIcon";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialLinks = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Tooltip title="ChatGPT" arrow>
        <IconButton component={Link} href="https://chat.openai.com" color="inherit">
          <ChatGPTIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" arrow>
        <IconButton component={Link} href="https://github.com" color="inherit">
          <GitHub fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow>
        <IconButton component={Link} href="https://linkedin.com" color="inherit">
          <LinkedIn fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Twitter" arrow>
        <IconButton component={Link} href="https://twitter.com" color="inherit">
          <XIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="YouTube" arrow>
        <IconButton component={Link} href="https://www.youtube.com/" color="inherit">
          <YouTubeIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default SocialLinks;
