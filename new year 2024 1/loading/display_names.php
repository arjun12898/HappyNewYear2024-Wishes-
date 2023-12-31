<?php
// Read the content of the user_names.txt file
$fileName = "user_names.txt";

// Check if the file exists
if (file_exists($fileName)) {
    // Read the file content into an array
    $names = file($fileName, FILE_IGNORE_NEW_LINES);

    // Output the names
    foreach ($names as $name) {
        echo $name . "<br>";
    }
} else {
    echo "No names stored yet.";
}
?>
