import './globals.css'
import SystemManagerShowcaseNavbar from "@/components/Navbar";
import SystemManagerShowcaseTopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import FooterTigotech from "@/components/FooterTigotech";
import React from "react";

export const metadata = {
    title: 'SystemManager/FleetManager',
    description: 'SystemManager. Server management tooling'
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>

        <div className="z-20 text-white">
            <SystemManagerShowcaseNavbar/>
            <div className="z-0">
                <SystemManagerShowcaseTopBar/>
            </div>

            {children}

            <Footer/>
            <div className={"dark"}>
                <FooterTigotech/>
            </div>
        </div>
        </body>
        </html>
    )
}
