import { ReactNode } from "react";

type MealsLayoutProps = {
  children: ReactNode;
};


export default function MealsLayout({children} : MealsLayoutProps){
    return <>
    <p> Meals Layout </p>
    {children}
    </>
}