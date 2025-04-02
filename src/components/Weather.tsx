import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchBox from "./SearchBox";
import Info from "./Info";

interface WeatherData {
  city: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  feelsLike: number;
  weather: string;
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  return (
    <Box>
      <Typography variant="h6" align="center" gutterBottom>
        🌤 Weather
      </Typography>
      <SearchBox setWeather={setWeather} setLoading={setLoading} setNotFound={setNotFound} />
      <Info info={weather} loading={loading} notFound={notFound} />
    </Box>
  );
};

export default Weather;
