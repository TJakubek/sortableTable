// import Columns from "src/enums/columns";

export const columns = {
  City: 'city',
  Company: 'company',
  Email: 'email',
  Id: 'id',
  Name: 'name',
  Phone: 'phone',
  Username: 'username',
  Website: 'website',
};

const columnConfig: Array<{ text: string; maxWidth?: string }> = [
  { text: columns.Id, maxWidth: '45px' },
  { text: columns.Name },
  { text: columns.Email },
  { text: columns.Phone, maxWidth: '16rem' },
  { text: columns.Username },
  { text: columns.Website },
  { text: columns.Company, maxWidth: '10%' },
  { text: columns.City, maxWidth: '10vw' },
];

export default columnConfig;
