import IFormikData from 'interfaces/common/IFormikData';

interface IUser extends IFormikData {
  id: number;
  username: string;
  email: string;
}

export default IUser;
