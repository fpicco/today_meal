export {};
declare global {
  interface IRecipe {
    title: string;
    ingredients: string[];
    image?: string;
  }
  interface IUser {
    username: string;
    email: string;
    image?: string;
  }
  interface IProfile {
    name: string;
    email: string;
    picture?: string;
  }
}

namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    MONGODB_URI: string;
  }
}
