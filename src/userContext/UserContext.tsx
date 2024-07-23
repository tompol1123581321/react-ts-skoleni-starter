import React, { useContext, useState } from "react";

export type User = { username: string; email: string };
type UserContextType = {
  user?: User;
  logInUser?: (user: User) => void;
  logoutUser?: () => void;
  isLoading?: boolean;
};

type Props = React.PropsWithChildren<{
  defaultUser?: User;
}>;

const UserContext = React.createContext<UserContextType>({});

export const UserContextProvider: React.FC<Props> = ({
  defaultUser,
  children,
}) => {
  const [user, setUser] = useState<User | undefined>(defaultUser);
  const [isLoading, setIsLoading] = useState(false);

  const logoutUser = async () => {
    setIsLoading(true);
    const newUser = await new Promise<undefined>((resolve) => {
      setTimeout(() => {
        const mockedData = undefined;
        resolve(mockedData);
      }, 2000);
    });
    setUser(newUser);
    setIsLoading(false);
  };
  const logInUser = async (user: User) => {
    setIsLoading(true);

    const newUser = await new Promise<User>((resolve) => {
      setTimeout(() => {
        const mockedData = user;
        resolve(mockedData);
      }, 2000);
    });
    setUser(newUser);
    setIsLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, logInUser, logoutUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
