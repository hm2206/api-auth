
const methods = {
    "DocumentTypesController.index": {
        "url": "api/document_types",
        "description": "Listar tipo de documentos",
        "required": false,
        "action_type": "GET"
    },
    "DocumentTypesController.store": {
        "url": "api/document_types",
        "description": "Create tipo de documento",
        "required": true,
        "action_type": "POST"
    },
    "DocumentTypesController.show": {
        "url": "api/document_types/:id",
        "description": "Obtener el tipo de documento",
        "required": false,
        "action_type": "GET"
    },
    "DocumentTypesController.update": {
        "url": "api/document_types/:id",
        "description": "Actualizar el tipo de documento",
        "required": true,
        "action_type": "PUT"
    },
    "DocumentTypesController.delete": {
        "url": "api/document_types/:id",
        "description": "Eliminar el tipo de documento",
        "required": true,
        "action_type": "DELETE"
    },
    "PeopleController.index": {
        "url": "api/people",
        "description": "Listar personas",
        "required": false,
        "action_type": "GET"
    },
    "PeopleController.store": {
        "url": "api/people",
        "description": "Create persona",
        "required": true,
        "action_type": "POST"
    },
    "PeopleController.show": {
        "url": "api/people/:id",
        "description": "Obtener a la persona",
        "required": false,
        "action_type": "GET"
    },
    "PeopleController.update": {
        "url": "api/people/:id",
        "description": "Actualizar datos de la persona",
        "required": true,
        "action_type": "PUT"
    },
    "PeopleController.delete": {
        "url": "api/people/:id",
        "description": "Eliminar persona",
        "required": true,
        "action_type": "DELETE"
    },
    "SystemsController.index": {
        "url": "api/systems",
        "description": "Listar sistemas",
        "required": false,
        "action_type": "GET"
    },
    "SystemsController.store": {
        "url": "api/systems",
        "description": "Create sistema",
        "required": true,
        "action_type": "POST"
    },
    "SystemsController.show": {
        "url": "api/systems/:id",
        "description": "Obtener sistema",
        "required": false,
        "action_type": "GET"
    },
    "SystemsController.update": {
        "url": "api/systems/:id",
        "description": "Actualizar sistema",
        "required": true,
        "action_type": "PUT"
    },
    "SystemsController.delete": {
        "url": "api/systems/:id",
        "description": "Eliminar sistema",
        "required": true,
        "action_type": "DELETE"
    },
    "SystemsController.authorize": {
        "url": "api/systems/authorize/me",
        "description": "Obtener sistema autorizado",
        "required": false,
        "action_type": "GET"
    },
    "ClientsController.index": {
        "url": "api/clients",
        "description": "Listar dispositivos del cliente",
        "required": false,
        "action_type": "GET"
    },
    "ClientsController.store": {
        "url": "api/clients",
        "description": "Crear dispositivos del cliente",
        "required": true,
        "action_type": "POST"
    },
    "ClientsController.show": {
        "url": "api/clients/:id",
        "description": "Obtener dispositivo del cliente",
        "required": false,
        "action_type": "GET"
    },
    "ClientsController.update": {
        "url": "api/clients/:id",
        "description": "Actualizar dispositivo del cliente",
        "required": true,
        "action_type": "PUT"
    },
    "ClientsController.delete": {
        "url": "api/clients/:id",
        "description": "Eliminar dispositivo del cliente",
        "required": true,
        "action_type": "DELETE"
    },
    "RolesController.index": {
        "url": "api/roles",
        "description": "Listar roles de usuarios",
        "required": false,
        "action_type": "GET"
    },
    "RolesController.store": {
        "url": "api/roles",
        "description": "Crear role de usuario",
        "required": true,
        "action_type": "POST"
    },
    "RolesController.update": {
        "url": "api/roles/:id",
        "description": "Actualizar role de usuario",
        "required": true,
        "action_type": "PUT"
    },
    "RolesController.delete": {
        "url": "api/roles/:id",
        "description": "Eliminar role de usuario",
        "required": true,
        "action_type": "DELETE"
    },
    "RolesController.methods": {
        "url": "api/roles/:id/methods",
        "description": "Listar m??todos de accesso seg??n el rol",
        "required": true,
        "action_type": "GET"
    },
    "RolesController.detachMethod": {
        "url": "api/roles/:id/detach_method",
        "description": "Asociar un method a un rol espec??fico",
        "required": true,
        "action_type": "DELETE"
    },
    "UsersController.index": {
        "url": "api/users",
        "description": "Listar usuarios",
        "required": false,
        "action_type": "GET"
    },
    "UsersController.store": {
        "url": "api/users",
        "description": "Crear usuario",
        "required": true,
        "action_type": "POST"
    },
    "UsersController.show": {
        "url": "api/users/:id",
        "description": "Obtener usuario",
        "required": false,
        "action_type": "POST"
    },
    "UsersController.update": {
        "url": "api/users/:id",
        "description": "Actualizar usuario",
        "required": true,
        "action_type": "PUT"
    },
    "UsersController.delete": {
        "url": "api/users/:id",
        "description": "Eliminar usuario",
        "required": true,
        "action_type": "DELETE"
    },
    "LoginController.login": {
        "url": "api/login",
        "description": "Autenticar a un usuario",
        "required": false,
        "action_type": "POST"
    },
    "LoginController.logout": {
        "url": "api/logout",
        "description": "Cerrar sesi??n a un usuario",
        "required": false,
        "action_type": "POST"
    },
    "AuthController.me": {
        "url": "api/auth/me",
        "description": "Obtener usuario autenticado",
        "required": false,
        "action_type": "GET"
    },
    "AuthController.authorize": {
        "url": "api/auth/authorize",
        "description": "Obtener autorizaci??nes del usuario autenticado",
        "required": false,
        "action_type": "GET"
    },
    "Public/UsersController.store": {
        "url": "api/public/users",
        "description": "Crear un usuario predeterminado",
        "required": false,
        "action_type": "GET"
    },
    "Public/UsersController.resetPassword": {
        "url": "api/public/users/:email/reset_password",
        "description": "Recuperar cuenta de un usuario",
        "required": false,
        "action_type": "PUT"
    },
    "Public/UsersController.changePassword": {
        "url": "api/public/users/:email/change_password",
        "description": "Cambio de cuenta de un usuario con c??digo",
        "required": false,
        "action_type": "PUT"
    }
}

export default methods;