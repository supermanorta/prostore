import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserPreferencesStore = {
  defaultDepartment: number | null;
  defaultstore: number | null;
  currentDepartment: number;
  currentstore: number;
  setDefaultDepartment: (selectedDepartment: number) => void;
  setDefaultstore: (selectedStore: number) => void;
  setCurrentDepartment: (department: number) => void;
  setCurrentstore: (store: number) => void;
};

export const userPreferencesStore = create<UserPreferencesStore>()(
  persist(
    (set) => ({
      defaultDepartment: -1,
      defaultstore: -1,
      currentDepartment: 2,
      currentstore: 202,
      setDefaultDepartment: (selectedDepartment) => {
        set((state) => ({ defaultDepartment: selectedDepartment }));
      },
      setDefaultstore: (selectedStore) => {
        set((state) => ({ defaultstore: selectedStore }));
      },
      setCurrentDepartment: (department) => {
        set((state) => ({ currentDepartment: department }));
      },
      setCurrentstore: (store) => {
        set((state) => ({ currentDepartment: store }));
      },
    }),
    { name: 'userPrefs' }
  )
);