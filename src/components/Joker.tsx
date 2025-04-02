import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

interface Jokes {
  setup: string;
  punchline: string;
}

const Joker = () => {
  const [joke, setJoke] = useState<Jokes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const URL = "https://official-joke-api.appspot.com/jokes/random";

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setJoke({ setup: data.setup, punchline: data.punchline });
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
    const interval = setInterval(fetchJoke, 60000);
        return () => clearInterval(interval);
  }, []);

  return (
    <Card sx={{ mt: 2, bgcolor: "yellow.100" }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          😂 Joke
        </Typography>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          joke && (
            <>
              <Typography>{joke.setup}</Typography>
              <Typography fontWeight="bold">{joke.punchline}</Typography>
            </>
          )
        )}
        <Button onClick={fetchJoke} variant="contained" color="warning" sx={{ mt: 2 }}>
          Next Joke
        </Button>
      </CardContent>
    </Card>
  );
};

export default Joker;
