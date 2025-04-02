import { useEffect, useState } from "react";
import { Typography, CircularProgress } from "@mui/material";

const Quote = () => {
    const [quote, setQuote] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const URL = "https://qapi.vercel.app/api/random";

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await fetch(URL);
            if (!res.ok) {
                throw new Error("Failed to fetch")
            }
            const data = await res.json();
            setQuote(data.quote)
            setAuthor(data.author)
        }
        catch(err){
            setError("Failed to fetch quotes. Please try again.");

        }
        setLoading(false);

  };

    useEffect(() => {
        fetchData();
        
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
       
        <>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <>
                    <Typography variant="h6" fontWeight="bold">
                        "{quote}"
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
                        - {author}
                    </Typography>
                </>
            )}
            </>
       
    );
};

export default Quote;
