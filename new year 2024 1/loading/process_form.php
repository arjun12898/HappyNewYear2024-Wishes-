<?php
if (isset($_POST['name'])) {
    $userName = $_POST['name'];

    // Validate and sanitize the input
    $userName = filter_var($userName, FILTER_SANITIZE_STRING);

    // Database connection parameters
    $servername = "localhost";
    $username = "your_mysql_username";
    $password = "your_mysql_password";
    $dbname = "your_database_name";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the user's name into the database
    $sql = "INSERT INTO user_names (name) VALUES ('$userName')";
    if ($conn->query($sql) === TRUE) {
        echo "Name stored successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    echo "Error: 'name' parameter is missing.";
}
?>
