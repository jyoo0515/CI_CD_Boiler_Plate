import { atom } from 'recoil';

export interface User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
}

interface AuthState {
  user: User | null;
}

const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
  },
});

export default authState;
