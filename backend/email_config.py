import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText

# Load variables from .env
load_dotenv()

SENDER_EMAIL = os.getenv("SENDER_EMAIL")
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL")
APP_PASSWORD = os.getenv("APP_PASSWORD") 

def send_email(name, email, message):
    body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
    msg = MIMEText(body)
    msg["Subject"] = "New Message from Your Portfolio"
    msg["From"] = SENDER_EMAIL
    msg["To"] = RECEIVER_EMAIL

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(SENDER_EMAIL, APP_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
        server.quit()
        return True, "Email sent!"
    except Exception as e:
        return False, str(e)
