<?php
session_start();

// Database connection (you'll need to configure this)
$host = 'localhost';
$dbname = 'tourism_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if (empty($username) || empty($password)) {
        header('Location: login.html?error=empty_fields');
        exit();
    }
    
    // In a real application, you would hash the password and check against database
    // For demo purposes, we'll use a simple check
    if ($username === 'demo' && $password === 'password') {
        $_SESSION['user_id'] = 1;
        $_SESSION['username'] = $username;
        header('Location: index.html?login=success');
    } else {
        header('Location: login.html?error=invalid_credentials');
    }
    exit();
}
?>