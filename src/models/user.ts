export interface Profile {
  address: string;
  avatarUrl: string;
  coverUrl: string;
  createdAt: string;
  dateOfBirth: string;
  deletedAt: string;
  gender: string;
  id: number;
  phoneNumber: string;
  updatedAt: string;
  user: number;
}

export interface User {
  createdAt: string;
  deletedAt: string;
  email: string;
  id: number;
  isLocked: boolean;
  name: string;
  role: string;
  updatedAt: string;
  profile: Profile;
}
