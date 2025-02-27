export interface IProfile {
    userId: number;
    fullName: string;
    bio: string;
  }
  
  // In-memory profile store (to be replaced with a persistent DB)
  export const profiles: IProfile[] = [];
  