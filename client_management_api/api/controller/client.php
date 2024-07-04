<?php
// Include Deals Model
require_once "model/client.php";
require_once "model/login.php";
class CLIENT extends CLIENTMODEL
{
	public function clientCtrl($request, $tokenParms)
	{
		try {
            
			// Object for Login Model
			$loginAuthendicate = new LOGINMODEL();
			// Token check for all the service
			$token = $loginAuthendicate->tokenCheck($tokenParms);


			if (!empty ($token)) {
                
				$response = $this->processList($request, $token);
				echo $this->json($response);
				exit();
			} else {
				throw new Exception("Unauthorized Login");
			}
		} catch (Exception $e) {
			echo $this->json(
				array(
					"result" => "401",
					"message" => $e->getMessage(),
				)
			);
			exit();
		}
	}
}

// Initiate controller & Response method
$classActivate = new CLIENT();
// Reponse for the request
$classActivate->clientCtrl($data, $token);

?>