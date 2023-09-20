import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const UserProfileContext = createContext();

export const useUserProfile = () => useContext(UserProfileContext);

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const currentUser = useCurrentUser();

  useEffect(() => {
    
    const fetchUserProfile = async () => {
      try {
        if (currentUser) {
        const { data } = await axiosReq.get(`/profiles/${currentUser.pk}/`);
        setUserProfile(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
      fetchUserProfile();
}, [currentUser]);


  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile}}>
      {children}
    </UserProfileContext.Provider>
  );
};