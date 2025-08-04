# India Tourism Website
🌐 Discover unforgettable destinations and vibrant cultures across India! From serene escapes to thrilling adventures, our curated guides help you travel smarter and deeper. Your next journey begins here—plan, explore, and create memories that last a lifetime.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python 3.7+
- PHP 7.4+ (for backend processing)
- MySQL/MariaDB (for database)

### Installation

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up the database:**
   ```bash
   mysql -u root -p < booking.sql
   ```

4. **Add required images:**
   - Create an `img/` directory
   - Add the following images:
     - `back.jpg` (background image)
     - `delhi1.jpg`, `delhi2.jpg` (Delhi destinations)
     - `goa1.jpg`, `goa2.jpg` (Goa destinations)
     - `bangalore1.jpg`, `bangalore2.jpg` (Karnataka destinations)
     - `chennai1.jpg`, `chennai2.jpg` (Tamil Nadu destinations)

### Running the Application

1. **Start the Node.js server:**
   ```bash
   npm start
   ```

2. **Start a PHP server:**
   ```bash
   php -S localhost:8000
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:8000
   ```

## 🔧 Configuration

### API Keys
- Update `api.py` with your Amadeus API credentials
- Configure Google Sign-In in `login.html` with your Google Client ID

### Database
- Update database connection details in `submit_login.php`

## 🐛 Issues Fixed
- ✅ Created missing `submit_login.php` file
- ✅ Fixed PHP array structure in `get_hotels.php`
- ✅ Removed duplicate JavaScript functions
- ✅ Added proper package management files
- ✅ Created image directory structure
- ✅ Fixed Google Sign-In placeholder URLs

## 📁 Project Structure
```
├── index.html          # Main landing page
├── login.html          # Login page
├── register.html       # Registration page
├── script.js           # JavaScript functionality
├── styles.css          # CSS styling
├── server.js           # Node.js API server
├── api.py              # Python API integration
├── get_hotels.php      # PHP hotel data
├── submit_login.php    # Login processing
└── img/                # Image assets (needs to be populated)
```
