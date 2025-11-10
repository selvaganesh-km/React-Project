import API_EP_BOOK from "../../endpoints";
import API from "../../api";

//Store Api
const listStoreAPIEP = API_EP_BOOK.LIST_STORE_API_EP;
const getStoreByIdAPIEP = API_EP_BOOK.GET_STORE_BY_ID_API_EP;
const storeActiveAPIEP = API_EP_BOOK.ACTIVE_STORE_API_EP;
const storeDeactiveAPIEP = API_EP_BOOK.DEACTIVE_STORE_API_EP;
const deleteStoreAPIEP = API_EP_BOOK.DELETE_STORE_API_EP;
const updateStoreByAPIEP = API_EP_BOOK.UPDATE_STORE_API_EP;
const createStore = API_EP_BOOK.CREATE_STORE_API_EP;
const importStore = API_EP_BOOK.IMPORT_STORE_API_EP;
const exportStore = API_EP_BOOK.EXPORT_STORE_API_EP;

//Staff Api
const listStaffAPIEP = API_EP_BOOK.LIST_STAFF_API_EP;
const getStaffByIdAPIEP = API_EP_BOOK.GET_STAFF_BY_ID_API_EP;
const staffActiveAPIEP = API_EP_BOOK.ACTIVE_STAFF_API_EP;
const staffDeactiveAPIEP = API_EP_BOOK.DEACTIVE_STAFF_API_EP;
const getStoreDropAPIEP = API_EP_BOOK.LIST_STOREDROP_API_EP;
const deleteStaffAPIEP = API_EP_BOOK.DELETE_STAFF_API_EP;
const updateStaffByAPIEP = API_EP_BOOK.UPDATE_STAFF_API_EP;
const createStaff = API_EP_BOOK.CREATE_STAFF_API_EP;
const importStaff = API_EP_BOOK.IMPORT_STAFF_API_EP;
const exportStaff = API_EP_BOOK.EXPORT_STAFF_API_EP;

//Contact Api
const contactListAPI = API_EP_BOOK.ADMIN_CONTACT_LIST;
const contactCreateAPI = API_EP_BOOK.ADMIN_CONTACT_CREATE;
const contactEditAPI = API_EP_BOOK.ADMIN_CONTACT_EDIT;
const contactDeleteAPI = API_EP_BOOK.ADMIN_CONTACT_DELETE;
const contactStoreDropdwon = API_EP_BOOK.ADMIN_CONTACT_STORE_DROPDOWN;
const contactGroupDropdwon = API_EP_BOOK.ADMIN_CONTACT_GROUP_DROPDOWN;
const contactGetAPI = API_EP_BOOK.ADMIN_CONTACT_GET;
const importContact = API_EP_BOOK.ADMIN_IMPORT_CONTACT_API_EP;
const exportContact = API_EP_BOOK.ADMIN_EXPORT_CONTACT_API_EP;

//Group Api
const contactGroupListAPI = API_EP_BOOK.CONTACT_GROUP_LIST;
const contactGroupCreateAPI = API_EP_BOOK.CONTACT_GROUP_CREATE;
const contactGroupEditAPI = API_EP_BOOK.CONTACT_GROUP_EDIT;
const contactGroupDeleteAPI = API_EP_BOOK.CONTACT_GROUP_DELETE;
const contactGroupGetAPI = API_EP_BOOK.CONTACT_GROUP_GET;

// Whatsapp
const whatsappCreateAPI = API_EP_BOOK.ADMIN_WHATSAPP_CREATE_TEMPLATE;
const whatsappMsgSendAPI = API_EP_BOOK.WHATSAPPTEMPLATE_MSG_SEND;
const whatsappListAPI = API_EP_BOOK.ADMIN_WHATSAPP_LIST_TEMPLATE;
const whatsappImgUploadAPI = API_EP_BOOK.ADMIN_IMG_UPLOAD_API_EP;
const whatsappGetAPI = API_EP_BOOK.ADMIN_WHATSAPP_GET;
const whatsappDeleteAPI = API_EP_BOOK.WHATSAPP_DELETE;
const whatsappTemplateDropdwon = API_EP_BOOK.TEMPALTE_WHATSAPPDROP_API_EP;
const languageCodeDropdwon = API_EP_BOOK.LANGUAGECODE_WHATSAPPDROP_API_EP;

const VendorAPI = {
    // Whatsapp 

    whatsappTemplateCreate: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(whatsappCreateAPI, requestAPIData);
        return getResponse;
    },
    whatsappMsgSendAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(whatsappMsgSendAPI, requestAPIData);
        return getResponse;
    },
    whatsappTemplateList: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(whatsappListAPI, requestAPIData);
        return getResponse;
    },
    whatsappImgUploadAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(whatsappImgUploadAPI, requestAPIData);
        return getResponse;
    },
    whatsappGet: function (id: any) {
        const url = whatsappGetAPI.url.replace(':id', id);
        const requestAPIData = {
            url: url,
            method: whatsappGetAPI.method,
            authorization: whatsappGetAPI.authorization
        };

        return API(requestAPIData)
    },
    whatsappDeletetemp: function (id: any, tempname: any) {
        const url = whatsappDeleteAPI.url.replace(':id', id).replace(':tempname', tempname);;
        const requestAPIData = {
            url: url,
            method: whatsappDeleteAPI.method,
            authorization: whatsappDeleteAPI.authorization
        };

        return API(requestAPIData)
    },
    whatsappTemplateDropdwon: function () {
        const apiUrl = whatsappTemplateDropdwon.url;
        const requestAPIData = {
            url: apiUrl,
            method: whatsappTemplateDropdwon.method,
            authorization: whatsappTemplateDropdwon.authorization
        };
        return API(requestAPIData);
    },
    languageCodeDropdwon: function () {
        const apiUrl = languageCodeDropdwon.url;
        const requestAPIData = {
            url: apiUrl,
            method: languageCodeDropdwon.method,
            authorization: languageCodeDropdwon.authorization
        };
        return API(requestAPIData);
    },
    // STORE API'S START
    listStoreData: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(listStoreAPIEP, requestAPIData);
        return getResponse;
    },
    createStore: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(createStore, requestAPIData);
        return getResponse;
    },
    importStore: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(importStore, requestAPIData);
        return getResponse;
    },
    exportStore: function () {
        const apiUrl = exportStore.url;
        const requestAPIData = {
            url: apiUrl,
            method: exportStore.method,
            authorization: exportStore.authorization,
        };
        return API(requestAPIData);
    },
    getStoreByIdAPIEP: function (storeId: any) {
        const apiUrl = getStoreByIdAPIEP.url.replace(':id', storeId);
        const requestAPIData = {
            url: apiUrl,
            method: getStoreByIdAPIEP.method,
            authorization: getStoreByIdAPIEP.authorization
        };
        return API(requestAPIData);
    },
    storeActiveAPIEP: function (storeId: any) {
        const apiUrl = storeActiveAPIEP.url.replace(':id', storeId);
        const requestAPIData = {
            url: apiUrl,
            method: storeActiveAPIEP.method,
            authorization: storeActiveAPIEP.authorization
        };
        return API(requestAPIData);
    },
    storeDeactiveAPIEP: function (storeId: any) {
        const apiUrl = storeDeactiveAPIEP.url.replace(':id', storeId);
        const requestAPIData = {
            url: apiUrl,
            method: storeDeactiveAPIEP.method,
            authorization: storeDeactiveAPIEP.authorization
        };
        return API(requestAPIData);
    },
    updateStore: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(updateStoreByAPIEP, requestAPIData);
        return getResponse;
    },
    deleteStoreAPIEP: function (storeId: any) {
        const apiUrl = deleteStoreAPIEP.url.replace(':id', storeId);
        const requestAPIData = {
            url: apiUrl,
            method: deleteStoreAPIEP.method,
            authorization: deleteStoreAPIEP.authorization
        };
        return API(requestAPIData);
    },
    // STORE API'S END

    // STAFF API'S START
    listStaffData: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(listStaffAPIEP, requestAPIData);
        return getResponse;
    },
    createStaff: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(createStaff, requestAPIData);
        return getResponse;
    },
    importStaff: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(importStaff, requestAPIData);
        return getResponse;
    },
    exportStaff: function () {
        const apiUrl = exportStaff.url;
        const requestAPIData = {
            url: apiUrl,
            method: exportStaff.method,
            authorization: exportStaff.authorization
        };
        return API(requestAPIData);
    },
    staffActiveAPIEP: function (storeId: any) {
        const apiUrl = staffActiveAPIEP.url.replace(':id', storeId);
        const requestAPIData = {
            url: apiUrl,
            method: staffActiveAPIEP.method,
            authorization: staffActiveAPIEP.authorization
        };
        return API(requestAPIData);
    },
    staffDeactiveAPIEP: function (storeId: any) {
        const apiUrl = staffDeactiveAPIEP.url.replace(':id', storeId);
        const requestAPIData = {
            url: apiUrl,
            method: staffDeactiveAPIEP.method,
            authorization: staffDeactiveAPIEP.authorization
        };
        return API(requestAPIData);
    },
    getStaffByIdAPIEP: function (staffId: any) {
        const apiUrl = getStaffByIdAPIEP.url.replace(':id', staffId);
        const requestAPIData = {
            url: apiUrl,
            method: getStaffByIdAPIEP.method,
            authorization: getStaffByIdAPIEP.authorization
        };
        return API(requestAPIData);
    },

    getStoreDropAPIEP: function () {
        const apiUrl = getStoreDropAPIEP.url;
        const requestAPIData = {
            url: apiUrl,
            method: getStoreDropAPIEP.method,
            authorization: getStoreDropAPIEP.authorization
        };
        return API(requestAPIData);
    },
    updateStaff: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(updateStaffByAPIEP, requestAPIData);
        return getResponse;
    },
    deleteStaffAPIEP: function (staffId: any) {
        const apiUrl = deleteStaffAPIEP.url.replace(':id', staffId);
        const requestAPIData = {
            url: apiUrl,
            method: deleteStaffAPIEP.method,
            authorization: deleteStaffAPIEP.authorization
        };
        return API(requestAPIData);
    },
    // STAFF API'S END

    // CONTACT API'S START
    contactCreateAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(contactCreateAPI, requestAPIData);
        return getResponse;
    },
    contactListAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(contactListAPI, requestAPIData);
        return getResponse;
    },
    importContatc: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        }; const getResponse = API(importContact, requestAPIData);
        return getResponse;
    },
    exportContact: function () {
        const apiUrl = exportContact.url;
        const requestAPIData = {
            url: apiUrl,
            method: exportContact.method,
            authorization: exportContact.authorization
        };
        return API(requestAPIData);
    },
    contactEditAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(contactEditAPI, requestAPIData);
        return getResponse;
    },

    contactDeleteAPI: function (id: any) {
        const url = contactDeleteAPI.url.replace(':id', id);
        const requestAPIData = {
            url: url,
            method: contactDeleteAPI.method,
            authorization: contactDeleteAPI.authorization
        };
        return API(requestAPIData)

    },

    contactGetAPI: function (id: any) {
        const url = contactGetAPI.url.replace(':id', id);
        const requestAPIData = {
            url: url,
            method: contactGetAPI.method,
            authorization: contactGetAPI.authorization
        };

        return API(requestAPIData)
    },

    contactStoreDropdownAPI: function () {
        const getResponse = API(contactStoreDropdwon);
        return getResponse;
    },

    contactGroupDropdownAPI: function () {
        const getResponse = API(contactGroupDropdwon);
        return getResponse;
    },
    // CONTACT API'S END

    // CONTACT_GROUP API'S START
    contactGroupCreateAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(contactGroupCreateAPI, requestAPIData);
        return getResponse;
    },
    contactGroupListAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(contactGroupListAPI, requestAPIData);
        return getResponse;
    },
    contactGroupEditAPI: function (apiData: any) {
        const requestAPIData = {
            bodyData: apiData
        };
        const getResponse = API(contactGroupEditAPI, requestAPIData);
        return getResponse;
    },

    contactGroupDeleteAPI: function (id: any) {
        const url = contactGroupDeleteAPI.url.replace(':id', id);
        const requestAPIData = {
            url: url,
            method: contactGroupDeleteAPI.method,
            authorization: contactGroupDeleteAPI.authorization
        };
        return API(requestAPIData)

    },

    contactGroupGetAPI: function (id: any) {
        const url = contactGroupGetAPI.url.replace(':id', id);
        const requestAPIData = {
            url: url,
            method: contactGroupGetAPI.method,
            authorization: contactGroupGetAPI.authorization
        };

        return API(requestAPIData)
    },
    // CONTACT_GROUP API'S END
}
export default VendorAPI;