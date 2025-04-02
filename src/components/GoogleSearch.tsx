import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const GoogleSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
      <TextField
        variant="outlined"
        placeholder="Search Google..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ width: "100%" }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default GoogleSearch;
