import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SidebarDrawerContextData = UseDisclosureReturn;

// Cria contexto
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);


interface SidebarDrawerProviderProps {
    children: ReactNode;
}

// Cria função que passa o children no provider
export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    }, [router.asPath]);

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );

}

// Exporta o uso do contexto
export const useSideBarDrawer = () => useContext(SidebarDrawerContext);