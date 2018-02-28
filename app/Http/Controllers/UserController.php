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
  public function userLogin(Request $request)
  {
    $email    = $request->email; //email id for login
    $password = $request->password; //password for login

    // Validation of login form
    $validator = \Validator::make($request->all(), [
          'email'    => 'required',
          'password' => 'required|min:6'
          ]);

    if($validator->fails()) {

        return Response::json(array(
            'status'   => false,
            'error'    => true,
            'code'     => 400,
            'response' => $validator->messages(),
            'message'  => null
        ));

    }

    // Merge email and userName for login
    $field                  = filter_var($request->input('email'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
    $request->merge([$field => $request->input('email')]);
    $credentials            = $request->only($field, 'password');
    $credentials            = array_add($credentials, 'profile_status', '1'); //If profile status !1 then user is not Active

    if(Auth::attempt($credentials)) { //Attempt Auth login

        $token = $this->generateRandomString();


            //create a new token
            $saveToken                  = new UserToken;
            $saveToken->user_id         = Auth::user()->id;
            $saveToken->token           = $token;
            $saveToken->profile_user_id = Auth::user()->id;
            $saveToken->status          = 1;
            $saveToken->save();

            $createToken = UserToken::where('user_id',Auth::user()->id)->with('userInfo')->first(); //sending user info with token

        $response = ['userId'=>Auth::user()->id,'userToken'=>$saveToken->token,'userType'=>Auth::user()->type,'firstName'=>$createToken->userInfo->first_name,'lastName'=>$createToken->userInfo->last_name,'email'=>$createToken->userInfo->email];

        return Response::json(array(
            'status'   => true,
            'code'     => 200,
            'error'    => false,
            'response' => $response,
            'message'  => "Logged in Successfully."
        ));

    } else {

        return Response::json(array(
            'status'  => false,
            'code'    => 400,
            'error'   => true,
            'response'=> [],
            'message' => 'Invalid email or password!'
        ));

    }
  }
  
}
