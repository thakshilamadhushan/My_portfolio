from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from email_config import send_email

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/send-email")
async def contact(request: Request):
    data = await request.json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    success, msg = send_email(name, email, message)
    return {"success": success, "message": msg}
