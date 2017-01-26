import { RoleEnum } from './roleEnum';

export class ToolUser {
    name: string;
    authToken: string;
    roles: RoleEnum[];

    constructor(name: string, authToken: string, roles: string[]) { 
        this.name = name;
        this.authToken = authToken;
        this.roles = this.convertRoles(roles);
    }

    private convertRoles(roles) {
        let convertedRoles : RoleEnum[] = [];
        roles.forEach(role => {
            if(role.authority === '1'){convertedRoles.push(RoleEnum.SUBMITTER)}
            if(role.authority === '2'){convertedRoles.push(RoleEnum.INVITEE)}
            if(role.authority === '3'){convertedRoles.push(RoleEnum.ATTENDEE)}
            if(role.authority === '4'){convertedRoles.push(RoleEnum.QP)}
            if(role.authority === '5'){convertedRoles.push(RoleEnum.SME)}
            if(role.authority === '6'){convertedRoles.push(RoleEnum.ADMIN)}         
        });
        return convertedRoles;
    }
}