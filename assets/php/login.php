<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $query = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user["password"])) {
            $_SESSION["user"] = $user["email"];
            header("Location: dashboard.php");
            exit();
        } else {
            echo "<script>alert('Invalid credentials.'); window.location.href='index.html';</script>";
        }
    } else {
        echo "<script>alert('User not found.'); window.location.href='index.html';</script>";
    }
}
?>
