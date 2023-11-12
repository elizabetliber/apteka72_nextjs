import React from 'react';
import Pankreatin from "@/app/components/Pankreatin";
import Header from "@/app/components/Header";

function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-white px-12 py-2">
            <container className="container mx-auto">
                <Header/>
                <Pankreatin/>
            </container>
        </main>
    );
}

export default Page;