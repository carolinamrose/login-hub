import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api.js";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
   const tokenLocal = localStorage.getItem("@TOKEN");
   const [token, setToken] = useState(tokenLocal ? tokenLocal : "");
   const [techList, setTechList] = useState([]);
   const [editingTech, setEditingTech] = useState(null);

   const authHeader = { headers: { Authorization: `Bearer ${token}` } };

   useEffect(() => {
      const getTech = async () => {
         try {
            const { data } = await api.get("/profile", authHeader);
            setTechList(data.techs);
         } catch (error) {
            console.log(error);
         }
      };
      getTech();
   }, []);

   const createTech = async (formData) => {
      try {
         const { data } = await api.post("/users/techs/", formData, authHeader);
         setTechList([...techList, data]);
      } catch (error) {
         console.log(error);
      }
   };

   const deleteTech = async (item) => {
      try {
         await api.delete(`/users/techs/${item.id}`, authHeader);
         const newTechList = techList.filter((tech) => tech.id !== item.id);
         setTechList(newTechList);
      } catch (error) {
         console.log(error);
      }
   };

   const editTech = async (formData) => {
      
      try {
         const endpoint = `/users/techs/${editingTech.id}`;
         const { data } = await api.put(endpoint, formData, authHeader);
         
         const newTechList = techList.map((tech) => {
            if (tech.id === data.id) {
               return data;
            } else {
               return tech;
            }
         });

         setTechList(newTechList);
         setEditingTech(null);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <TechContext.Provider
         value={{
            techList,
            createTech,
            deleteTech,
            editTech,
            editingTech,
            setEditingTech,
         }}
      >
         {children}
      </TechContext.Provider>
   );
};