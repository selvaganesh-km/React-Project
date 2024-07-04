<?php
require_once "include/apiResponseGenerator.php";
require_once "include/dbConnection.php";
class REGISTERMODEL extends APIRESPONSE
{
    private function processMethod($data, $loginData)
    {

        switch (REQUESTMETHOD) {
            case 'GET':
                $data = array(
                    'apiStatus' => array(
                        'code' => 405,
                        'message' => "GET Method Not Allowed"),
                );
                return $data;
                break;

            case 'POST':
                $type = $data['type'];
                if ($type == 'user') {
                    $result = $this->userRegistration($data, $loginData);
                } else {
                    $result = array(
                        "apiStatus" => array(
                            "code" => "404",
                            "message" => "Invalid request"),
                    );
                }
                return $result;
                break;
            case 'PUT':
                $urlPath = $_GET['url'];
                $urlParam = explode('/', $urlPath);
                if ($urlParam[1] == "update") {
                    $result = $this->updateUser($data, $loginData);
                    // print_r($data);exit;
                } else {
                    throw new Exception("Unable to proceed your request!");
                }
                return $result;
                break;
            case 'DELETE':
                // echo "Delete api."; exit();
                $urlPath = $_GET['url'];
                $urlParam = explode('/', $urlPath);
                if ($urlParam[1] == "delete") {
                    $result = $this->deleteUserimg($data, $loginData);
                    // print_r($urlParam[0]);exit;
                } else {
                    throw new Exception("Unable to proceed your request!");
                }
                return $result;
                break;
            default:
                $result = $this->handle_error($data);
                return $result;
                break;
        }
    }
    // Initiate db connection
    private function dbConnect()
    {
        $conn = new DBCONNECTION();
        $db = $conn->connect();
        return $db;
    }
    /**
     * Post/Register Member
     *
     * @param array $data
     * @return multitype:string
     */
    public function userRegistration($data, $loginData)
    {
        // print_r($data);
        try {
            $db = $this->dbConnect();
            $userData = $data['userData'];
            // if ($userData['password'] != $userData['confirmPassword']) {
            //     throw new Exception("Password & Confirm Password are not correct!");
            // }
            $password = $userData['password'];
            $sql = "SELECT id FROM tbl_users WHERE email_id = '" . $userData['emailId'] . "' AND status = 1";
            // echo $sql;exit;
            $result = mysqli_query($db, $sql);
            $row_cnt = mysqli_num_rows($result);
            if ($row_cnt > 0) {
                throw new Exception("User already exist");
            }
            $user_name = isset($userData['user_name']) ? $userData['user_name'] : "";
            $phone = isset($userData['phone']) ? $userData['phone'] : "";
            // $role_id = isset($userData['role_id']) ? $userData['role_id'] : "";

            if (empty($user_name)) {
                throw new Exception("user_name is required");
            } elseif (empty($phone)) {throw new Exception("phone_number is required");}
            // elseif(empty($role_id)){throw new Exception("role_id is required");}

            $hashed_password = hash('sha256', hash('sha256', $password));

            $insertQuery = "INSERT INTO tbl_users (`user_name`, email_id,`password`, phone,address,img_id,twitter,facebook,instagram,linkedin) VALUES ('" . $user_name . "','" . $userData['emailId'] . "','" . $hashed_password . "','" . $phone . "','" . $userData['address'] . "','" . $userData['img_id'] . "','" . $userData['twitter'] . "','" . $userData['facebook'] . "','" . $userData['instagram'] . "','" . $userData['linkedin'] . "')";
            // print_r($insertQuery);exit;
            if ($db->query($insertQuery) === true) {
                $lastInsertedId = mysqli_insert_id($db);
                $this->updateUserRole($lastInsertedId, $loginData);
                $db->close();
            }
            $resultArray = array(
                "apiStatus" => array(
                    "code" => "200",
                    "message" => "Your registration has submitted Successfully"),
                // "result" => array("mailStatus" => ""),
                "result" => array("lastUserId" => $lastInsertedId),

            );
            return $resultArray;
        } catch (Exception $e) {
            return array(
                "apiStatus" => array(
                    "code" => "401",
                    "message" => $e->getMessage()),
            );
        }
    }

    public function updateUserRole($lastInsertedId, $loginData)
    {
        try {
            $db = $this->dbConnect();

            if ($lastInsertedId) {
                $insertQuery = "INSERT INTO tbl_user_role_map (`user_id`,`role_id` , `created_by`) VALUES ('$lastInsertedId','2', '" . $loginData['user_id'] . "') ";
                // print_r($insertQuery);exit;
                if ($db->query($insertQuery) === true) {
                    $db->close();
                    return true;
                }
                return false;
            } else {
                throw new Exception("Not able to update role");
            }

        } catch (Exception $e) {
            return array(
                "apiStatus" => array(
                    "code" => "401",
                    "message" => $e->getMessage()),
            );
        }
    }

    private function updateUser($data, $loginData)
    {
// print_r($loginData);exit;
        try {
            $db = $this->dbConnect();
            $userData = $data['userData'];
            $tokenCkeck = "SELECT user_id FROM tbl_user_login_log WHERE token='$loginData'";
            $result = $db->query($tokenCkeck);
            $row = $result->fetch_assoc();
            $lastInsertedId = $row['user_id'];

            $validationData = array("id" => $userData['id'], "user_name" => $userData['user_name'], "email_id" => $userData['emailId']);
            // print_r($validationData);exit;

            $this->validateInputDetails($validationData);
            $dateNow = date("Y-m-d H:i:s");
            $userData = $data['userData'];
            $userId = $userData['id'];

            // $updateQuery = "UPDATE tbl_users SET user_name = '" . $data['user_name'] . "', email_id = '" . $data['emailId'] ."',phone = '" . $data['phone'] . "',address = '" . $data['address'] . "',updated_by = '" . $loginData['user_id'] . "',updated_date = '$dateNow' WHERE id = " . $data['id'] . "";
            if (!isset($userData['img_id'])) {
                // Update user details without img_id
                $updateQuery = "UPDATE tbl_users SET user_name = '{$userData['user_name']}', email_id = '{$userData['emailId']}',phone = '{$userData['phone']}', address = '{$userData['address']}', updated_by = '{$lastInsertedId}',twitter = '{$userData['twitter']}',facebook = '{$userData['facebook']}',instagram = '{$userData['instagram']}',linkedin = '{$userData['linkedin']}', updated_date = '{$dateNow}' WHERE id ='{$userId}'";

            } else {
                // Update user details with img_id
                $updateQuery = "UPDATE tbl_users SET user_name = '{$userData['user_name']}', email_id = '{$userData['emailId']}',phone = '{$userData['phone']}', address = '{$userData['address']}', img_id = '{$userData['img_id']}',twitter = '{$userData['twitter']}',facebook = '{$userData['facebook']}',instagram = '{$userData['instagram']}',linkedin = '{$userData['linkedin']}', updated_by = '{$lastInsertedId}', updated_date = '{$dateNow}' WHERE id ='{$userId}'";
            }
            if ($db->query($updateQuery) === true) {

                $db->close();
                $statusCode = "200";
                $statusMessage = "User details updated successfully";

            } else {
                $statusCode = "500";
                $statusMessage = "Unable to update User details, please try again later";
            }
            $resultArray = array(
                "apiStatus" => array(
                    "code" => $statusCode,
                    "message" => $statusMessage),

            );
            return $resultArray;
        } catch (Exception $e) {
            return array(
                "apiStatus" => array(
                    "code" => "401",
                    "message" => $e->getMessage()),

            );
        }
    }

    private function deleteUserimg($data, $loginData)
    {
        // print_r($loginData);exit;
        try {
            $id = $data[2];
            $db = $this->dbConnect();
            if (empty($data[2])) {
                throw new Exception("Bad request id is required");
            }
           
            $sql = "SELECT id FROM tbl_users WHERE status = 1  and id =$id";
            // print_r($sql);
            $result = $db->query($sql);
            $row_cnt = mysqli_num_rows($result);
            // echo $row_cnt;
            if ($row_cnt == 0) {
                throw new Exception("id " . $id . " not found");
            }
            // $deleteQuery = "UPDATE tbl_users set img_id=0 WHERE id = " . $id . "";
            $deleteQuery = "UPDATE tbl_users AS tm
            LEFT JOIN tbl_image AS u ON tm.img_id = u.id
            SET tm.img_id = 0, u.status = 0
            WHERE tm.id = $id ";
            // print_r($deleteQuery);exit;
            if ($db->query($deleteQuery) === true) {
                $db->close();
                $statusCode = "200";
                $statusMessage = "User image deleted successfully";

            } else {
                $statusCode = "500";
                $statusMessage = "Unable to delete User image, please try again later";
            }
            $resultArray = array(
                "apiStatus" => array(
                    "code" => $statusCode,
                    "message" => $statusMessage),

            );
            return $resultArray;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());

        }
    }

    public function validateInputDetails($validationData)
    {
        foreach ($validationData as $key => $value) {
            if (empty($value) || trim($value) == "") {
                throw new Exception($key . " should not be empty!");
            }
        }
    }

// Unautherized api request
    private function handle_error($request)
    {
    }
/**
 * Function is to process the crud request
 *
 * @param array $request
 * @return array
 */
    public function processList($request, $token)
    {

        try {
            $responseData = $this->processMethod($request, $token);
            $result = $this->response($responseData);
            return $result;
        } catch (Exception $e) {
            return array(
                "apiStatus" => array(
                    "code" => "401",
                    "message" => $e->getMessage()),
            );
        }
    }
}
