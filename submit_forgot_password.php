<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Verify CAPTCHA
    $recaptcha_secret = getenv('RECAPTCHA_SECRET');
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
    $response_keys = json_decode($response, true);

    if (intval($response_keys["success"]) !== 1) {
        echo "CAPTCHA verification failed.";
        exit();
    }

    // Generate a secure token
    $resetToken = bin2hex(random_bytes(16));
    $resetLink = "https://yourwebsite.com/reset_password.php?token=$resetToken";

    try {
        // Save $resetToken and $email to the database (example)
        // Assuming a PDO connection
        $pdo = new PDO("mysql:host=".getenv('DB_HOST').";dbname=".getenv('DB_NAME'), getenv('DB_USER'), getenv('DB_PASS'));
        $stmt = $pdo->prepare("INSERT INTO password_resets (email, token) VALUES (?, ?)");
        $stmt->execute([$email, $resetToken]);

        // Send the email (using PHPMailer for example)
        require 'PHPMailerAutoload.php';
        $mail = new PHPMailer(true);
        $mail->setFrom('no-reply@yourwebsite.com', 'World Tourism');
        $mail->addAddress($email);
        $mail->Subject = 'Password Reset Request';
        $mail->Body = "Click the link below to reset your password:\n$resetLink";

        if ($mail->send()) {
            echo "Password reset email sent. Please check your inbox.";
        } else {
            echo "Failed to send password reset email.";
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
