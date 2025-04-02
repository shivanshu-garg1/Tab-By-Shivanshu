import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface WeatherData {
  city: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  feelsLike: number;
  weather: string;
}

interface InfoProps {
  info: WeatherData | null;
  loading: boolean;
  notFound: boolean;
}

const Info = ({ info, loading, notFound }: InfoProps) => {
  const [alert, setAlert] = useState<boolean>(false);

  useEffect(() => {
    if (notFound) {
      setAlert(true);
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notFound]);

  if (loading) {
    return <Typography align="center" color="text.secondary">Loading...</Typography>;
  }

  return (
    <Card sx={{ mt: 2, bgcolor: "blue.50" }}>
      <CardContent>
        {alert ? (
          <Typography color="error" align="center">
            City Not Found
          </Typography>
        ) : info ? (
          <>
            <Typography variant="h6">{info.city}'s Weather</Typography>
            <Typography>Temp: {info.temp}°C</Typography>
            <Typography>Min Temp: {info.tempMin}°C</Typography>
            <Typography>Max Temp: {info.tempMax}°C</Typography>
            <Typography>Humidity: {info.humidity}%</Typography>
            <Typography>Feels Like: {info.feelsLike}°C</Typography>
            <Typography>Weather: {info.weather}</Typography>
          </>
        ) : (
          <Typography align="center" color="text.secondary">
            Enter a city to get weather details.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Info;
