import React from 'react';
import Mezim from "@/app/components/Mezim";
import Header from "@/app/components/Header";

function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-white px-12 py-2py-14">
            <container className="container mx-auto">
                <Header/>
                <Mezim/>
            </container>
        </main>
    );
}

export default Page;