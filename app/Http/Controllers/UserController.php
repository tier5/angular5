<?php
/**
* UserController to manage CRUD operation of users(super-admin, admin, agents).
* @param Request $request
*/

namespace App\Http\Controllers;

use App\Model\Department;
use App\Model\DepartmentAgentMap;
use Illuminate\Http\Request;
use Auth,Mail,Hash;
use Response;
use App\Model\UserToken; /* User Token Model */
use App\Model\Users;

class UserController extends Controller
{

  /**
   * Login of User
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function getUsers()
  {


        $users = Users::all();

        return Response::json(array(
            'status'   => true,
            'code'     => 200,
            'error'    => false,
            'response' => $users,
            'message'  => "Logged in Successfully."
        ));

  }
  
}
