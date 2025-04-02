import { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Box } from "@mui/material";

interface WeatherData {
  city: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  feelsLike: number;
  weather: string;
}

interface SearchBoxProps {
  setWeather: (data: WeatherData | null) => void;
  setLoading: (loading: boolean) => void;
  setNotFound: (notFound: boolean) => void;
}

const SearchBox = ({ setWeather, setLoading, setNotFound }: SearchBoxProps) => {
  const [city, setCity] = useState("");
  const API = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "bf0629c113347855b7802716383a9de2";

  const fetchData = async () => {
    setLoading(true);
    setNotFound(false);

    try {
      const res = await fetch(`${API}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await res.json();

      if (data.cod !== 200) {
        setLoading(false);
        setWeather(null);
        setNotFound(true);
        return;
      }

      const result: WeatherData = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      setTimeout(() => {
        setLoading(false);
        setWeather(result);
        setNotFound(false);
      }, 500);
    } catch (err) {
      console.log("Error: " + err);
      setWeather(null);
      setLoading(false);
      setNotFound(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCity("");
    fetchData();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
      <TextField
        label="Enter city"
        variant="outlined"
        size="small"
        value={city}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;
