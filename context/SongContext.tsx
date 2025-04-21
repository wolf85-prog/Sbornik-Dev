import {createContext, useContext, ReactNode, useState, useEffect} from "react";


export type SongContextType = {
    songs: [];
    setSongs: {};
}

export const SongContext = createContext<SongContextType>({
    songs: [],
    setSongs: {}
});

const useUserContext = ()=> useContext(SongContext)

const SongProvider = ({children} : {children: any}) => {
    
    const [songs, setSongs] = useState<any>([]);
    
    return (
        <SongContext.Provider value={{
            songs, 
            setSongs
        }}>
            {children}
        </SongContext.Provider>
    )
}

export default { useUserContext, SongProvider };