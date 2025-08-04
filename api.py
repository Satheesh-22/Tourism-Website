import requests

client_id = "YOUR_API_KEY"
client_secret = "YOUR_API_SECRET"

def get_access_token():
    url = "https://test.api.amadeus.com/v1/security/oauth2/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret
    }
    
    response = requests.post(url, data=payload)
    access_token = response.json().get("access_token")
    print("Access Token:", access_token)
    return access_token

# Call function to get token
get_access_token()
