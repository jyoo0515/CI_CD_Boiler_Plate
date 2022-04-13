import { useSetRecoilState } from 'recoil';
import authState, { User } from './atom';
import { useMemo } from 'react';

export default function useAuthActions() {
  const set = useSetRecoilState(authState);

  return useMemo(
    () => ({
      authorize: (user: User) => set({ user }),
      logout: () => set({ user: null }),
    }),
    [set]
  );
}
