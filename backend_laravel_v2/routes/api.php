<?php

use App\Http\Controllers\ActivityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BoxHeadingController;
// use App\Http\Controllers\Client\ContractController as ClientContractController;
// use App\Http\Controllers\Client\MachineController as ClientMachineController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyMachineController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\CompanyUserController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\MachineController;
use App\Http\Controllers\MachineModelController;
use App\Http\Controllers\PartAliasController;
use App\Http\Controllers\PartController;
use App\Http\Controllers\PartHeadingController;
use App\Http\Controllers\PartStockController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\RequisitionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\PaymentHistoryController;
use App\Http\Resources\EmployeeCollection;
use App\Http\Controllers\DeliveryNotesController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\GatePassController;
use App\Http\Controllers\SettingsController;
// client controller
use App\Http\Controllers\Client\ClientRequisitionController;
use App\Http\Controllers\Client\ClientQuotationController;
use App\Http\Controllers\Client\ClientInvoiceController;
use App\Http\Controllers\Client\ClientDeliveryNoteController;
use App\Http\Controllers\Client\ClientMachineController;
use App\Http\Controllers\Client\ClientContractController;
use App\Http\Controllers\Client\ClientUserController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProjectDataController;
use App\Http\Controllers\QuotationCommentController;
use App\Http\Controllers\ResumeDataController;
use App\Http\Controllers\UserDataController;
use App\Models\Requisition;


Route::get('aboutData',[UserDataController::class, 'about']);
Route::get('contactData',[UserDataController::class, 'contact']);
Route::get('footerData',[UserDataController::class, 'footer']);
Route::get('resumeData',[ResumeDataController::class, 'resume']);
Route::get('projectData',[ProjectDataController::class, 'project']);
Route::post('sendMail',[MailController::class, 'sendMail']);


Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {
    Route::get('headerData',[UserDataController::class, 'header']);
});



