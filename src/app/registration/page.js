import React from 'react';
import Registration from "@/app/components/Registration";
import Header from "@/app/components/Header";

function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-white px-12 py-2">
            <container className="container mx-auto">
                <Header/>
                <Registration/>
            </container>
        </main>
    );
}

export default Page;