import { useState } from "react";
import {Box, Typography, TextField, Button, Snackbar, Alert} from "@mui/material";

export default function contact(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [alert, setAlert] = useState({ open: false, type: "success", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            setAlert({ open: true, type: data.success ? "success" : "error", message: data.message });
            if (data.success) setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            
        setAlert({ open: true, type: "error", message: "Failed to send message." });
        }
    };

    return(
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mt={6} mb={8}>
                Contact
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: { xs: "100%", sm: "400px", md: "500px" },
                }}
            >
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                        backgroundColor:"rgba(59, 59, 59, 0.64)",
                        borderRadius:3,
                        input: { color: 'white' },
                        '& label': { color: '#d8d8d8ff' },
                        '& label.Mui-focused': { color: 'cyan' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' },
                            '&:hover fieldset': { borderColor: 'cyan' },
                            '&.Mui-focused fieldset': { borderColor: 'cyan' },
                        }
                    }}
                />

                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                        backgroundColor:"rgba(59, 59, 59, 0.64)",
                        borderRadius:3,
                        input: { color: 'white' },
                        '& label': { color: '#d8d8d8ff' },
                        '& label.Mui-focused': { color: 'cyan' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' },
                            '&:hover fieldset': { borderColor: 'cyan' },
                            '&.Mui-focused fieldset': { borderColor: 'cyan' },
                        }
                    }}
                />

                <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    required
                    sx={{
                        backgroundColor:"rgba(59, 59, 59, 0.64)",
                        borderRadius:3,
                        '& label': { color: '#d8d8d8ff' },
                        '& label.Mui-focused': { color: 'cyan' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' },
                            '&:hover fieldset': { borderColor: 'cyan' },
                            '&.Mui-focused fieldset': { borderColor: 'cyan' },
                            '& .MuiInputBase-input': { color: 'white' }
                        }
                    }}
                />

                <Button type="submit" variant="contained" size="large">
                Send Message
                </Button>
            </Box>

            {/* Snackbar for alerts */}
            <Snackbar open={alert.open} autoHideDuration={4000} onClose={() => setAlert({ ...alert, open: false })} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.type} sx={{ width: "100%" }}>
                {alert.message}
                </Alert>
            </Snackbar>
        </Box>        
    );
}