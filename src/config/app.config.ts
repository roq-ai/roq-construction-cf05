interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Logistics Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'ROQ Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
