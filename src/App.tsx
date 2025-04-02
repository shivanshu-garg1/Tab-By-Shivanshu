import { Box, Paper } from "@mui/material";
import Joker from "./components/Joker";
import Weather from "./components/Weather";
import GoogleSearch from "./components/GoogleSearch";
import Quote from "./components/Quote";
import Todo from "./components/Todo";
import ThemeProviderWrapper from './components/ThemeProviderWrapper'
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <>
<ThemeProviderWrapper>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          maxWidth: 600,
          p: 2,
          zIndex: 1000,
        }}
      >
        <Paper elevation={6} sx={{ p: 2, borderRadius: 3 }}>
          <GoogleSearch />
        </Paper>
      </Box>


      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          width: 350,
          p: 2,
          zIndex: 1000,
        }}
      >
        <Paper elevation={6} sx={{ p: 2, borderRadius: 3 }}>
          <Weather />
        </Paper>
      </Box>


      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 350,
          p: 2,
          zIndex: 1000,
        }}
      >
        <Paper elevation={6} sx={{ p: 2, borderRadius: 3 }}>
          <Joker />
        </Paper>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 5,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "80%",
          maxWidth: 600,
          p: 2,
          
        }}
      >
        <Paper elevation={6} sx={{ p: 1, borderRadius: 3 }}>
          <Quote />
        </Paper>

      </Box>
      <Todo/>
      <SocialLinks/>
      </ThemeProviderWrapper>
    </>
  );
};

export default App;
