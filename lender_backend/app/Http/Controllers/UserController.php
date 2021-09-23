<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Forminfo;
use Tapp\Airtable\Airtable;
use Tapp\Airtable\Api\AirtableApiClient;
use Illuminate\Support\Arr;


class UserController extends Controller
{
   function login(Request $req){
      
      $inputEmail = $req -> input('email');
      $userDB = User::where('email', $req -> email) ->first(); 
      if($userDB && !Hash::check($req ->password, $userDB -> password)){
         return["error" => "Email or password is not match"];
      }
      if($userDB && Hash::check($req ->password, $userDB -> password)){
         return $userDB;
      }
      if(!$userDB){
         $client = new AirtableApiClient($_ENV["AIRTABLE_BASE"],$_ENV["AIRTABLE_TABLE"],$_ENV["AIRTABLE_KEY"]);
         $fetchClient = ((new Airtable($client)) -> where('Email',$inputEmail) ->get());
      
         if(!empty($fetchClient[0])){
            $formInfoUser = new FormInfo;
            $formInfoUser ->formId = $fetchClient[0]['id'];
            if(Arr::exists($fetchClient[0]['fields'],'Email')==1){
               $formInfoUser ->email = $fetchClient[0]['fields']['Email'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'FirstName')==1){
               $formInfoUser ->firstName = $fetchClient[0]['fields']['FirstName'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'LastName')==1){
               $formInfoUser ->lastName = $fetchClient[0]['fields']['LastName'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'DateOfBirth')==1){
               $formInfoUser ->dateOfBirth = $fetchClient[0]['fields']['DateOfBirth'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'SIN')==1){
               $formInfoUser ->sin = $fetchClient[0]['fields']['SIN'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Phone')==1){
               $formInfoUser ->phone = $fetchClient[0]['fields']['Phone'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'DesiredPayment')==1){
               $formInfoUser ->desiredPayment = $fetchClient[0]['fields']['DesiredPayment'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'MaritalStatus')==1){
               $formInfoUser ->maritalStatus = $fetchClient[0]['fields']['MaritalStatus'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Bankrupt')==1){
               $formInfoUser ->bankrupt = $fetchClient[0]['fields']['Bankrupt'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'ProposalConsumer')==1){
               $formInfoUser ->proposalConsumer = $fetchClient[0]['fields']['ProposalConsumer'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'House')==1){
               $formInfoUser ->house = $fetchClient[0]['fields']['House'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'MortgageRent')==1){
               $formInfoUser ->mortgageRent = $fetchClient[0]['fields']['MortgageRent'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'StreetAddress')==1){
               $formInfoUser ->streetAddress = $fetchClient[0]['fields']['StreetAddress'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'City')==1){
               $formInfoUser ->city = $fetchClient[0]['fields']['City'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Province')==1){
               $formInfoUser ->province = $fetchClient[0]['fields']['Province'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'PostCode')==1){
               $formInfoUser ->postcode = $fetchClient[0]['fields']['PostCode'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'StreetAddress2')==1){
               $formInfoUser ->streetAddress2 = $fetchClient[0]['fields']['StreetAddress2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'City2')==1){
               $formInfoUser ->city2 = $fetchClient[0]['fields']['City2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Province2')==1){
               $formInfoUser ->province2 = $fetchClient[0]['fields']['Province2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'PostCode2')==1){
               $formInfoUser ->postcode2 = $fetchClient[0]['fields']['PostCode2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Country2')==1){
               $formInfoUser ->country2 = $fetchClient[0]['fields']['Country2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'SinceWhen')==1){
               $formInfoUser ->sinceWhen = $fetchClient[0]['fields']['SinceWhen'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Vehicle')==1){
               $formInfoUser ->vehicle = $fetchClient[0]['fields']['Vehicle'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'VIN')==1){
               $formInfoUser ->vin = $fetchClient[0]['fields']['VIN'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Kilometrage')==1){
               $formInfoUser ->kilometrage = $fetchClient[0]['fields']['Kilometrage'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Condition')==1){
               $formInfoUser ->carCondition = $fetchClient[0]['fields']['Condition'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'CarFaxLink')==1){
               $formInfoUser ->carFaxLink = $fetchClient[0]['fields']['CarFaxLink'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'DealerName')==1){
               $formInfoUser ->dealerName = $fetchClient[0]['fields']['DealerName'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'AmountCar')==1){
               $formInfoUser ->amountCar = $fetchClient[0]['fields']['AmountCar'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'AmountDeposit')==1){
               $formInfoUser ->amountDeposit = $fetchClient[0]['fields']['AmountDeposit'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'AmountFinanced')==1){
               $formInfoUser ->amountFinanced = $fetchClient[0]['fields']['AmountFinanced'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Employer')==1){
               $formInfoUser ->employer = $fetchClient[0]['fields']['Employer'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'EmployerAddress')==1){
               $formInfoUser ->employerAddress = $fetchClient[0]['fields']['EmployerAddress'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'NameSuperior')==1){
               $formInfoUser ->nameSuperior = $fetchClient[0]['fields']['NameSuperior'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'EmployerPhone')==1){
               $formInfoUser ->employerPhone = $fetchClient[0]['fields']['EmployerPhone'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'PositionHeld')==1){
               $formInfoUser ->positionHeld = $fetchClient[0]['fields']['PositionHeld'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'EmployerSinceWhen')==1){
               $formInfoUser ->employerSinceWhen = $fetchClient[0]['fields']['EmployerSinceWhen'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Schedules')==1){
               $formInfoUser ->schedules = $fetchClient[0]['fields']['Schedules'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Salary')==1){
               $formInfoUser ->salary = $fetchClient[0]['fields']['Salary'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'AnnualRevenue')==1){
               $formInfoUser ->annualRevenue = $fetchClient[0]['fields']['AnnualRevenue'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Employer2')==1){
               $formInfoUser ->employer2 = $fetchClient[0]['fields']['Employer2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'EmployerAddress2')==1){
               $formInfoUser ->employerAddress2 = $fetchClient[0]['fields']['EmployerAddress2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'NameSuperior2')==1){
               $formInfoUser ->nameSuperior2 = $fetchClient[0]['fields']['NameSuperior2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'EmployerPhone2')==1){
               $formInfoUser ->employerPhone2 = $fetchClient[0]['fields']['EmployerPhone2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'PositionHeld2')==1){
               $formInfoUser ->positionHeld2 = $fetchClient[0]['fields']['PositionHeld2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'EmployerSinceWhen2')==1){
               $formInfoUser ->employerSinceWhen2 = $fetchClient[0]['fields']['EmployerSinceWhen2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Schedules2')==1){
               $formInfoUser ->schedules2 = $fetchClient[0]['fields']['Schedules2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Salary2')==1){
               $formInfoUser ->salary2 = $fetchClient[0]['fields']['Salary2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'AnnualRevenue2')==1){
               $formInfoUser ->annualRevenue2 = $fetchClient[0]['fields']['AnnualRevenue2'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Income1Name')==1){
               $formInfoUser ->income1Name = $fetchClient[0]['fields']['Income1Name'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Income1Amount')==1){
               $formInfoUser ->income1Amount = $fetchClient[0]['fields']['Income1Amount'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Income2Name')==1){
               $formInfoUser ->income2Name = $fetchClient[0]['fields']['Income2Name'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Income2Amount')==1){
               $formInfoUser ->income2Amount = $fetchClient[0]['fields']['Income2Amount'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Income3Name')==1){
               $formInfoUser ->income3Name = $fetchClient[0]['fields']['Income3Name'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Income3Amount')==1){
               $formInfoUser ->income3Amount = $fetchClient[0]['fields']['Income3Amount'];
            }
            if(Arr::exists($fetchClient[0]['fields'],'Feedbacks')==1){
               $formInfoUser ->feedbacks = $fetchClient[0]['fields']['Feedbacks'];
            }
            $formInfoUser ->save();
            $user = new User; 
            $user ->email = $inputEmail;
            $user ->formId = $fetchClient[0]['id'];
            $user ->password =  Hash::make($req ->input('password'));
            $user ->save();
            $userDB = User::where('email', $inputEmail) ->first(); 
            return $userDB;
         }
         else{
            return ["error" => "email doesn't exit! \nplease fill in the online form first!"];
         }
      }
   }
}
