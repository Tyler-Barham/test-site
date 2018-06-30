<?php

require_once 'mysql_connect.php';

$queries = array();
parse_str($_SERVER['QUERY_STRING'], $queries);
$condition = "";

if ($queries['searchTerm']) {
    $searchTerm = $queries['searchTerm'];
    switch ($queries['searchType']) {
        case "Name":
            $condition = "WHERE first_name LIKE '%$searchTerm%' OR last_name LIKE '%$searchTerm%'";
            break;
        case "Department":
            $condition = "WHERE department LIKE '%$searchTerm%'";
            break;
        case "Profile":
            $condition = "WHERE profile LIKE '%$searchTerm%'";
            break;
    }
}

$query = "SELECT * FROM staff_details $condition";

$res = $mysqli->query($query);

if($res) {
    class StaffDetails {}

    $allStaff = array();

    foreach($res as $row) {
        $aStaff = new StaffDetails();
        $aStaff->fname = $row['first_name'];
        $aStaff->lname = $row['last_name'];
        $aStaff->department = $row['department'];
        $aStaff->profile = $row['profile'];

        $allStaff[] = $aStaff;

    }

    header('Content-Type: application/json');
    echo json_encode($allStaff);
} else {
    echo "Couldn't query database ";
    echo mysqli_error($conn);
}

$mysqli->close();

?>
