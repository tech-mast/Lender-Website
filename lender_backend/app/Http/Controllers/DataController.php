<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tapp\Airtable\Airtable;
use Tapp\Airtable\Api\AirtableApiClient;
use App\Models\User;
use App\Models\FormInfo;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    // function list(){
    //     $client = new AirtableApiClient($_ENV["AIRTABLE_BASE"],$_ENV["AIRTABLE_TABLE"],$_ENV["AIRTABLE_KEY"]);
    //     return (new Airtable($client))->get();
    //     return (new Airtable($client))->patch('recHdvp8IlZzX4s9I', ['RadioWould' => '1']);
    //     return (new Airtable($client))->firstOrCreate(['RadioWould' => '5'], ['HowOften' => 'less']);
    //     return (new Airtable($client)) -> find('recoOYPasnWJr8Z5i');
    //     $fetchClient = (new Airtable($client)) -> get();
    //     return( $fetchClient['fields']['AnnualRevenue']);
    //     return( $fetchClient);
    // }
    function list(){
        return User::all();
    }

    function profile($id){
        // $client = new AirtableApiClient($_ENV["AIRTABLE_BASE"],$_ENV["AIRTABLE_TABLE"],$_ENV["AIRTABLE_KEY"]);
        // $fetchClient = (new Airtable($client)) -> find($id);
        // $userDB = User::where('formId', $id) ->leftJoin('forminfos','users.formId','=','forminfos.formId') ->first(); 
        // $userDB = User::where('users.formId',$id) ->leftJoin('forminfos','users.formId','=','forminfos.formId') ->first(); 
        $userDB = FormInfo::where('forminfos.formId',$id)->first(); 
      
        return( $userDB);
    }
    
    function profileUpdate($id,Request $req){
        // $client = new AirtableApiClient($_ENV["AIRTABLE_BASE"],$_ENV["AIRTABLE_TABLE"],$_ENV["AIRTABLE_KEY"]);
        // (new Airtable($client)) -> patch($id,['Name'=>$req->name, 'Email'=>$req->email,'AnnualRevenue' =>$req->annualRevenue]);
        // $fetchClient = (new Airtable($client)) -> find($id);
        $userDB = FormInfo::where('formId',$id)->first(); 
        $userDB->email = $req->email;
        $userDB->firstName = $req->firstName;
        $userDB->lastName = $req->lastName;
        $userDB ->dateOfBirth =$req ->dateOfBirth;
        $userDB ->sin =$req ->sin;
        $userDB ->phone =$req ->phone;
        $userDB ->desiredPayment =$req ->desiredPayment;
        $userDB ->maritalStatus =$req ->maritalStatus;
        $userDB ->bankrupt = $req ->bankrupt;
        $userDB ->proposalConsumer =$req -> proposalConsumer;
        $userDB ->house = $req ->house;
        $userDB ->mortgageRent = $req ->mortgageRent;
        $userDB ->streetAddress = $req ->streetAddress;
        $userDB ->city = $req ->city;
        $userDB ->province = $req ->province;
        $userDB ->postcode = $req ->postcode;
        $userDB ->streetAddress2 = $req ->streetAddress2;
        $userDB ->city2 =$req ->city2;
        $userDB ->province2 = $req ->province2;
        $userDB ->postcode2 =$req ->postcode2;
        $userDB ->country2 = $req ->country2;
        $userDB ->sinceWhen = $req ->sinceWhen;
        $userDB ->vehicle = $req ->vehicle;
        $userDB ->vin = $req ->vin;
        $userDB ->kilometrage = $req ->kilometrage;
        $userDB ->carCondition = $req ->carCondition;
        $userDB ->carFaxLink = $req ->carFaxLink;
        $userDB ->dealerName = $req ->dealerName;
        $userDB ->amountCar = $req ->amountCar;
        $userDB ->amountDeposit = $req ->amountDeposit;
        $userDB ->amountFinanced = $req ->amountFinanced;
        $userDB ->employer = $req ->employer;
        $userDB ->employerAddress = $req ->employerAddress;
        $userDB ->nameSuperior = $req ->nameSuperior;
        $userDB ->employerPhone = $req ->employerPhone;
        $userDB ->positionHeld = $req ->positionHeld;
        $userDB ->employerSinceWhen = $req ->employerSinceWhen;
        $userDB ->schedules = $req ->schedules;
        $userDB ->salary = $req ->salary;
        $userDB ->annualRevenue = $req ->annualRevenue;
        $userDB ->employer2 = $req ->employer2;
        $userDB ->employerAddress2 = $req ->employerAddress2;
        $userDB ->nameSuperior2 = $req ->nameSuperior2;
        $userDB ->employerPhone2 = $req ->employerPhone2;
        $userDB ->positionHeld2 = $req ->positionHeld2;
        $userDB ->employerSinceWhen2 = $req ->employerSinceWhen2;
        $userDB ->schedules2 = $req ->schedules2;
        $userDB ->salary2 = $req ->salary2;
        $userDB ->annualRevenue2 = $req ->annualRevenue2;
        $userDB ->income1Name = $req ->income1Name;
        $userDB ->income1Amount = $req ->income1Amount;
        $userDB ->income2Name = $req ->income2Name;
        $userDB ->income2Amount = $req ->income2Amount;
        $userDB ->income3Name = $req ->income3Name;
        $userDB ->income3Amount = $req ->income3Amount;
        $userDB ->feedbacks = $req ->feedbacks;

        if($req->file('fileCredit_path')){
        $userDB->fileCredit_path = $req->file('fileCredit_path') ->store('attachments');
        }
        if($req->file('fileId_path')){
        $userDB->fileId_path = $req->file('fileId_path')->store('attachments');
        }
        if($req->file('fileVehicle_path')){
        $userDB->fileVehicle_path = $req->file('fileVehicle_path')->store('attachments');
        }
        if($req->file('filePay_path')){
        $userDB->filePay_path = $req->file('filePay_path')->store('attachments');
        }
        if($req->file('fileBank_path')){
        $userDB->fileBank_path = $req->file('fileBank_path')->store('attachments');
        }
        if($req->file('fileCheque_path')){
        $userDB->fileCheque_path = $req->file('fileCheque_path')->store('attachments');
        }

        $userDB->save();

        // update airtable info
        $client = new AirtableApiClient($_ENV["AIRTABLE_BASE"],$_ENV["AIRTABLE_TABLE"],$_ENV["AIRTABLE_KEY"]);
        (new Airtable($client)) -> patch($id,
        ['Email'=>$userDB->email,
        'FirstName'=>$userDB->firstName,
        'LastName'=>$userDB->lastName,
        'DateOfBirth'=>$userDB ->dateOfBirth,
        'SIN'=>$userDB ->sin,
        'Phone'=>$userDB ->phone,
        'DesiredPayment'=>$userDB ->desiredPayment,
        'MaritalStatus'=>$userDB ->maritalStatus,
        'Bankrupt'=>$userDB ->bankrupt,
        'ProposalConsumer'=>$userDB ->proposalConsumer,
        'House'=>$userDB ->house,
        'MortgageRent'=>$userDB ->mortgageRent,
        'StreetAddress'=>$userDB ->streetAddress,
        'City'=>$userDB ->city,
        'Province'=>$userDB ->province,
        'PostCode'=>$userDB ->postcode,
        'StreetAddress2'=>$userDB ->streetAddress2,
        'City2'=>$userDB ->city2,
        'Province2'=>$userDB ->province2,
        'PostCode2'=>$userDB ->postcode2,
        'Country2'=>$userDB ->country2,
        'SinceWhen'=>$userDB ->sinceWhen,
        'Vehicle'=>$userDB ->vehicle,
        'VIN'=>$userDB ->vin,
        'Kilometrage'=>$userDB ->kilometrage,
        'Condition'=>$userDB ->carCondition,
        'CarFaxLink'=>$userDB ->carFaxLink,
        'DealerName'=>$userDB ->dealerName,
        'AmountCar'=>$userDB ->amountCar,
        'AmountDeposit'=>$userDB ->amountDeposit,
        'AmountFinanced'=>$userDB ->amountFinanced,
        'Employer'=>$userDB ->employer,
        'EmployerAddress'=>$userDB ->employerAddress,
        'NameSuperior'=>$userDB ->nameSuperior,
        'EmployerPhone'=>$userDB ->employerPhone,
        'PositionHeld'=>$userDB ->positionHeld,
        'EmployerSinceWhen'=>$userDB ->employerSinceWhen,
        'Schedules'=>$userDB ->schedules,
        'Salary'=>$userDB ->salary,
        'AnnualRevenue'=>$userDB ->annualRevenue,
        'Employer2'=>$userDB ->employer2,
        'EmployerAddress2'=>$userDB ->employerAddress2,
        'NameSuperior2'=>$userDB ->nameSuperior2,
        'EmployerPhone2'=>$userDB ->employerPhone2,
        'PositionHeld2'=>$userDB ->positionHeld2,
        'EmployerSinceWhen2'=>$userDB ->employerSinceWhen2,
        'Schedules2'=>$userDB ->schedules2,
        'Salary2'=>$userDB ->salary2,
        'AnnualRevenue2'=>$userDB ->annualRevenue2,
        'Income1Name'=>$userDB ->income1Name,
        'Income1Amount'=>$userDB ->income1Amount,
        'Income2Name'=>$userDB ->income2Name,
        'Income2Amount'=>$userDB ->income2Amount,
        'Income3Name'=>$userDB ->income3Name,
        'Income3Amount'=>$userDB ->income3Amount,
        'Feedbacks'=>$userDB ->feedbacks,
        ]);
        return( $userDB);
    }

    function client($id){
        $userDB = User::where('id', $id) ->first(); 
        return( $userDB);
    }
    function clientUpdate($id,Request $req){
        $userDB = User::where('id', $id) ->first(); 
        $userDB->email = $req->email;
        $userDB->formId = $req->formId;
        $userDB->isAdmin = $req->isAdmin;
        $userDB->save();
        // update airtable info
        $client = new AirtableApiClient($_ENV["AIRTABLE_BASE"],$_ENV["AIRTABLE_TABLE"],$_ENV["AIRTABLE_KEY"]);
        (new Airtable($client)) -> patch($userDB->formId,['Email'=>$req->email]);
        return( $userDB);
    }
    function clientBasicInfoUpdate($id,Request $req){
        $userDB = User::where('id', $id) ->first(); 
        $userDB->email = $req->email;
        $userDB->save();
        // update airtable info
        $client = new AirtableApiClient($_ENV["AIRTABLE_BASE"],$_ENV["AIRTABLE_TABLE"],$_ENV["AIRTABLE_KEY"]);
        (new Airtable($client)) -> patch($userDB->formId,['Email'=>$req->email]);
        return( $userDB);
    }

    function clientMatchUpdate(Request $req){
        $userDB = User::where('email', $req->email) ->first(); 
        if($userDB){
        $userDB->isMatch = "yes";
        $userDB->zumId = $req->zumId;
        $userDB->save();
        return( $userDB);
        }
        else{
            return ["error" => "Erro: not match! \n you bank infor doesn't match your profile infor! \n please update your profile first!"];
         }
    }

    function password($id){
        $userDB = User::where('id', $id) ->first(); 
        return( $userDB);
    }
    function passwordReset($id,Request $req){
        $userDB = User::where('id', $id) ->first(); 
        if(!Hash::check($req ->password, $userDB -> password)){
            return["error" => "Original Password is not correct!! please try again"];
        }else{
            $userDB ->password =  Hash::make($req ->input('newPassword'));
        }
        $userDB->save();
        return( $userDB);
    }

}
