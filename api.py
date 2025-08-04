import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

client_id = os.getenv("AMADEUS_CLIENT_ID")
client_secret = os.getenv("AMADEUS_CLIENT_SECRET")

def get_access_token():
    if not client_id or not client_secret:
        print("Error: Missing API credentials. Please set AMADEUS_CLIENT_ID and AMADEUS_CLIENT_SECRET environment variables.")
        return None
    
    url = "https://test.api.amadeus.com/v1/security/oauth2/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret
    }
    
    try:
        response = requests.post(url, data=payload)
        response.raise_for_status()  # Raise an exception for bad status codes
        access_token = response.json().get("access_token")
        print("Access Token:", access_token)
        return access_token
    except requests.exceptions.RequestException as e:
        print(f"Error getting access token: {e}")
        return None

# Call function to get token
if __name__ == "__main__":
    get_access_token()
