let endpoints = {
	SIGNIN: 'login',
	SADMINSIGNIN: 'superAdmin/login',
	SIGNUP: 'register',
	FORGOTPASSWORD: '/Users/ForgotPassword',
	ACTIVATION: '/Users/Activate',
	RESENTACTIVATION: '/Users/ResendActivationEmail',
	SIGNOUT: 'logout',

	RESETPASSWORD: '/Users/ResetPassword',
	UPDATEUSER: '/Users/:id',
	USERBYID: '/Users/:id',
	USERME: '/Users/Me',
	LOGOUT: 'logout',

	USERONBOARDING: '/Users/Onboarding/ProfilePreferences',
	PROFILE: '/Users/Profile',
	UPDATEPROFILE: '/Users/Profile',
	UPDATEPROFILEIMAGE: '/Users/Profile',
	METADATA: '/MasterData',

	//STORE
	LISTSTORE: 'store/list',
	CREATESTORE: 'store/create',
	GETBYIDSTORE: 'store/get/:id',
	IMPORTSTORE: 'store/importstorefromexcel',
	EXPORTSTORE: 'store/exportstoretoexcel',
	DELETESTORE: 'store/delete/:id',
	UPDATESTORE: "store/update",
	ACTIVESTORE: "store/active/:id",
	DEACTIVESTORE: "store/deactive/:id",

	//STAFF
	LISTSTAFF: 'staff/list',
	CREATESTAFF: 'staff/create',
	GETSTORELISTDROP: 'store/storedropdown',
	IMPORTSTAFF: 'staff/importstafffromexcel',
	EXPORTSTAFF: 'staff/exportstafftoexcel',
	GETBYIDSTAFF: 'staff/get/:id',
	DELETESTAFF: 'staff/delete/:id',
	UPDATESTAFF: "staff/update",
	ACTIVESTAFF: "staff/staffactive/:id",
	DEACTIVESTAFF: "staff/staffdeactive/:id",

	// Whatsapp
	CREATEWHATSAPPTEMPLATE: 'whatsapp_template/create',
	LANGUAGECODEDROP: 'whatsapp_template/getLanguageCodes',
	GETDROPDOWNWHATSAPPTEMPLATE: 'whatsapp_template/templatedropdown',
	LISTWHATSAPPTEMPLATE: 'whatsapp_template/list',
	WHATSAPPIMGUPLOAD: 'whatsapp_template/uploadMedia',
	GETWHATSAPPTEMPLATE: 'whatsapp_template/get/:id',
	WHATSAPPTEMPLATEDELETE: 'whatsapp_template/delete/:id/:tempname',
	WHATSAPPTEMPLATE_MSG_SEND: 'whatsapp_template/sendMessage',

	//Vendor
	VENDORSIGNIN: 'superAdmin/vendorlogin',
	VENDORLIST: 'superAdmin/vendor/list',
	VENDORCREATE: 'superAdmin/vendor/create',
	VENDOREDIT: 'superAdmin/vendor/update',
	VENDORGET: 'superAdmin/vendor/get/:id',
	VENDORDELETE: 'superAdmin/vendor/delete/:id',
	VENDORACTIVE: 'superadmin/vendor/useractive/:id',
	VENDORDEACTIVE: 'superadmin/vendor/userdeactive/:id',

	//Contact
	CONTACTCREATE: 'contact/create',
	CONTACTLIST: 'contact/list',
	CONTACTDELETE: 'contact/delete/:id',
	CONTACTTGET: 'contact/get/:id',
	CONTACTEDIT: 'contact/update',
	CONTACTSTOREDROP: 'store/storedropdown',
	CONTACTGROUPDROP: 'contactgroup/groupdropdown',
	CONTACTIMPORT: 'contact/importContactformexcel',
	CONTACTEXPORT: 'contact/exportcontacttoexcel',

	//Group
	CONTACTGROUPCREATE: 'contactgroup/create',
	CONTACTGROUPLIST: 'contactgroup/list',
	CONTACTGROUPDELETE: 'contactgroup/delete/:id',
	CONTACTGROUPGET: 'contactgroup/get/:id',
	CONTACTGROUPEDIT: 'contactgroup/update',
}

let API_EP_BOOK = {
	SADMINSIGNIN_API_EP: {
		url: endpoints.SADMINSIGNIN, method: 'POST', authorization: false
	},
	SIGNIN_API_EP: {
		url: endpoints.SIGNIN, method: 'POST', authorization: false
	},
	SIGNUP_API_EP: {
		url: endpoints.SIGNUP, method: 'POST', authorization: false
	},
	SIGNOUT_API_EP: {
		url: endpoints.SIGNOUT, method: 'GET', authorization: true
	},

	VENDOR_SIGNIN_API_EP: {
		url: endpoints.VENDORSIGNIN, method: 'POST', authorization: true
	},

	FORGOTPASSWORD_API_EP: {
		url: endpoints.FORGOTPASSWORD, method: 'POST', authorization: false
	},
	ACTIVATION_EMAIL_API_EP: {
		url: endpoints.ACTIVATION, method: 'POST', authorization: false
	},
	RESEND_ACTIVATION_EMAIL_API_EP: {
		url: endpoints.RESENTACTIVATION, method: 'POST', authorization: false
	},

	//User
	RESETPASSWORD_API_EP: {
		url: endpoints.RESETPASSWORD, method: 'POST', authorization: true
	},
	UPDATE_USER_API_EP: {
		url: endpoints.UPDATEUSER, method: 'PUT', authorization: true
	},
	GET_USER_BY_ID_API_EP: {
		url: endpoints.USERBYID, method: 'POST', authorization: true
	},
	GET_USER_ME_API_EP: {
		url: endpoints.USERME, method: 'POST', authorization: true
	},
	USER_LOGOUT_API_EP: {
		url: endpoints.LOGOUT, method: 'GET', authorization: true
	},

	// Vendor

	SUPER_ADMIN_VENDOR_LIST: {
		url: endpoints.VENDORLIST, method: 'POST', authorization: true
	},

	SUPER_ADMIN_VENDOR_CREATE: {
		url: endpoints.VENDORCREATE, method: 'POST', authorization: true
	},

	SUPER_ADMIN_VENDOR_EDIT: {
		url: endpoints.VENDOREDIT, method: 'PUT', authorization: true
	},

	SUPER_ADMIN_VENDOR_GET: {
		url: endpoints.VENDORGET, method: 'GET', authorization: true
	},

	SUPER_ADMIN_VENDOR_DELETE: {
		url: endpoints.VENDORDELETE, method: 'DELETE', authorization: true
	},
	SUPER_ADMIN_VENDOR_ACTIVE: {
		url: endpoints.VENDORACTIVE, method: 'GET', authorization: true
	},
	SUPER_ADMIN_VENDOR_DEACTIVE: {
		url: endpoints.VENDORDEACTIVE, method: 'GET', authorization: true
	},

	// Contact Api

	ADMIN_CONTACT_LIST: {
		url: endpoints.CONTACTLIST, method: 'POST', authorization: true
	},
	ADMIN_CONTACT_CREATE: {
		url: endpoints.CONTACTCREATE, method: 'POST', authorization: true
	},
	ADMIN_CONTACT_EDIT: {
		url: endpoints.CONTACTEDIT, method: 'PUT', authorization: true
	},
	ADMIN_CONTACT_GET: {
		url: endpoints.CONTACTTGET, method: 'GET', authorization: true
	},
	ADMIN_IMPORT_CONTACT_API_EP: {
		url: endpoints.CONTACTIMPORT, method: 'POST', authorization: true
	},
	ADMIN_EXPORT_CONTACT_API_EP: {
		url: endpoints.CONTACTEXPORT, method: 'GET', authorization: true
	},
	ADMIN_CONTACT_DELETE: {
		url: endpoints.CONTACTDELETE, method: 'DELETE', authorization: true
	},
	ADMIN_CONTACT_STORE_DROPDOWN: {
		url: endpoints.CONTACTSTOREDROP, method: 'GET', authorization: true
	},
	ADMIN_CONTACT_GROUP_DROPDOWN: {
		url: endpoints.CONTACTGROUPDROP, method: 'GET', authorization: true
	},

	//Group
	CONTACT_GROUP_LIST: {
		url: endpoints.CONTACTGROUPLIST, method: 'POST', authorization: true
	},
	CONTACT_GROUP_CREATE: {
		url: endpoints.CONTACTGROUPCREATE, method: 'POST', authorization: true
	},
	CONTACT_GROUP_EDIT: {
		url: endpoints.CONTACTGROUPEDIT, method: 'PUT', authorization: true
	},
	CONTACT_GROUP_GET: {
		url: endpoints.CONTACTGROUPGET, method: 'GET', authorization: true
	},
	CONTACT_GROUP_DELETE: {
		url: endpoints.CONTACTGROUPDELETE, method: 'DELETE', authorization: true
	},


	//Master
	GET_METADATA_API_EP: {
		url: endpoints.METADATA + '/Rules_Creation', method: 'GET', authorization: true
	},
	// Whatsapp

	ADMIN_WHATSAPP_CREATE_TEMPLATE: {
		url: endpoints.CREATEWHATSAPPTEMPLATE, method: 'POST', authorization: true
	},
	WHATSAPPTEMPLATE_MSG_SEND: {
		url: endpoints.WHATSAPPTEMPLATE_MSG_SEND, method: 'POST', authorization: true
	},
	ADMIN_WHATSAPP_LIST_TEMPLATE: {
		url: endpoints.LISTWHATSAPPTEMPLATE, method: 'POST', authorization: true
	},
	ADMIN_IMG_UPLOAD_API_EP: {
		url: endpoints.WHATSAPPIMGUPLOAD, method: 'POST', authorization: true
	},
	ADMIN_WHATSAPP_GET: {
		url: endpoints.GETWHATSAPPTEMPLATE, method: 'GET', authorization: true
	},
	WHATSAPP_DELETE: {
		url: endpoints.WHATSAPPTEMPLATEDELETE, method: 'DELETE', authorization: true
	},
	TEMPALTE_WHATSAPPDROP_API_EP: {
		url: endpoints.GETDROPDOWNWHATSAPPTEMPLATE, method: 'GET', authorization: true
	},
	LANGUAGECODE_WHATSAPPDROP_API_EP: {
		url: endpoints.LANGUAGECODEDROP, method: 'GET', authorization: true
	},

	//Store
	LIST_STORE_API_EP: {
		url: endpoints.LISTSTORE, method: 'POST', authorization: true
	},
	IMPORT_STORE_API_EP: {
		url: endpoints.IMPORTSTORE, method: 'POST', authorization: true
	},
	EXPORT_STORE_API_EP: {
		url: endpoints.EXPORTSTORE, method: 'GET', authorization: true
	},
	CREATE_STORE_API_EP: {
		url: endpoints.CREATESTORE, method: 'POST', authorization: true
	},
	GET_STORE_BY_ID_API_EP: {
		url: endpoints.GETBYIDSTORE, method: 'GET', authorization: true
	},
	ACTIVE_STORE_API_EP: {
		url: endpoints.ACTIVESTORE, method: 'GET', authorization: true
	},
	DEACTIVE_STORE_API_EP: {
		url: endpoints.DEACTIVESTORE, method: 'GET', authorization: true
	},
	UPDATE_STORE_API_EP: {
		url: endpoints.UPDATESTORE, method: 'PUT', authorization: true
	},
	DELETE_STORE_API_EP: {
		url: endpoints.DELETESTORE, method: 'DELETE', authorization: true
	},

	//Staff
	LIST_STAFF_API_EP: {
		url: endpoints.LISTSTAFF, method: 'POST', authorization: true
	},
	LIST_STOREDROP_API_EP: {
		url: endpoints.GETSTORELISTDROP, method: 'GET', authorization: true
	},
	IMPORT_STAFF_API_EP: {
		url: endpoints.IMPORTSTAFF, method: 'POST', authorization: true
	},
	EXPORT_STAFF_API_EP: {
		url: endpoints.EXPORTSTAFF, method: 'GET', authorization: true
	},
	CREATE_STAFF_API_EP: {
		url: endpoints.CREATESTAFF, method: 'POST', authorization: true
	},
	GET_STAFF_BY_ID_API_EP: {
		url: endpoints.GETBYIDSTAFF, method: 'GET', authorization: true
	},
	ACTIVE_STAFF_API_EP: {
		url: endpoints.ACTIVESTAFF, method: 'GET', authorization: true
	},
	DEACTIVE_STAFF_API_EP: {
		url: endpoints.DEACTIVESTAFF, method: 'GET', authorization: true
	},
	UPDATE_STAFF_API_EP: {
		url: endpoints.UPDATESTAFF, method: 'PUT', authorization: true
	},
	DELETE_STAFF_API_EP: {
		url: endpoints.DELETESTAFF, method: 'DELETE', authorization: true
	},

	//Rules
	GET_RULES_METADATA_API_EP: {
		url: endpoints.METADATA + '/Rules_Creation', method: 'GET', authorization: true
	}
}

export default API_EP_BOOK;