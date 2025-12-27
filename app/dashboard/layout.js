import DashboardHeader from "./header";

export default function DashboardLayout({ children }){
    return (
        <>
        <DashboardHeader />
            <div className="text-center">Dashboard Layout</div>
            {children}
        </>
    )
}