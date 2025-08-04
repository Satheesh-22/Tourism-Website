<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $token = filter_var($_POST['token'], FILTER_SANITIZE_STRING);
    $newPassword = password_hash($_POST['password'], PASSWORD_BCRYPT);

    try {
        // Assuming a PDO connection
        $pdo = new PDO("mysql:host=".getenv('DB_HOST').";dbname=".getenv('DB_NAME'), getenv('DB_USER'), getenv('DB_PASS'));
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Verify token
        $stmt = $pdo->prepare("SELECT email FROM password_resets WHERE token = ?");
        $stmt->execute([$token]);
        $email = $stmt->fetchColumn();

        if ($email) {
            // Update password
            $stmt = $pdo->prepare("UPDATE users SET password = ? WHERE email = ?");
            $stmt->execute([$newPassword, $email]);

            // Remove the token from the database
            $stmt = $pdo->prepare("DELETE FROM password_resets WHERE token = ?");
            $stmt->execute([$token]);

            echo "Password has been reset successfully.";
        } else {
            echo "Invalid token.";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
