let Url = {
    // start:"http://192.168.0.101/client_management_api/",
    // start:"https://d8d4-183-82-178-141.ngrok-free.app/client_management_api/",
    start:"http://192.168.0.107/client_management_api/",
    clientCreate:"api/client/create",
    login:"api/login",
    clientList:"api/client/list",
    clientEdit:"api/client/update",
    clientDelete:"api/client/delete/",

    userCreate:"api/user/create",
    userList:"api/user/list",
    userEdit:"api/user/update",
    userDelete:"api/user/delete/",

    domainCreate:"api/domain/create",
    domainList:"api/domain/list",
    domainEdit:"api/domain/update",
    domainDelete:"api/domain/delete/",

    hostingCreate1:"api/hosting/create",
    hostingList:"api/hosting/list",
    hostingEdit1:"api/hosting/update",
    hostingDelete:"api/hosting/delete/",

    credentialCreate:"api/service_provider/create",
    credentialList:"api/service_provider/list",
    credentialEdit:"api/service_provider/update",
    credentialDelete:"api/service_provider/delete/",

    
    tenantCreate:"api/tenant/create",
    tenantList:"api/tenant/list",
    tenantEdit:"api/tenant/update",
    tenantDelete:"api/tenant/delete/",

    // Method

    logout:"api/logout/",
    forgot:"api/login/forgotPassword",
    reset:"api/login/resetPassword/",
    change:"api/login/changePassword",
    validEmail:"api/login/validateToken",
   
    // Get Api
    getApi:"api/client/get/",
    tenantGet:"api/tenant/get/",
    domainGet:"api/domain/get/",
    serviceGet:"api/service_provider/get/",
    hostGet:"api/hosting/get/",
    userGet:"api/user/get/",
   

    // Image Upload Api In Client

    imageUpload:"api/fileUpload/imageInsert",

    // Image Upload Api In Tenant
    
    imageUpload:"api/fileUpload/imageInsert",

    // Image Show

    imageShowed:"api/uploads/images/",

    // Forgot
    resendMail:"api/login/resendMail",

    // HostingGet Drop

    hostingGetDrop1:"api/hosting/get/servicelist",
    hostingGetDrop2:"api/hosting/get/clientlist",

    // Service Offered Dynamic Image

    // serviceOffered:"http://192.168.0.101/client_management_api/api/",
    serviceOffered:"http://localhost/client_management_api/api/",

    // Image Upload

    superProfile:"api/tenant/getsuperadmin/",
    userProfile:"api/client/get/getadmin/",

    // My Profile User Update
    userProfileUpdate:"api/register/update",

    // My Profile User Delete
    userProfileDelete:"api/register/delete/",

}

export default Url