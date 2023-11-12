import React from 'react';
import Pankreatin from "@/app/components/Pankreatin";

function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-white px-12 py-14">
            <container className="container mx-auto">
                <Pankreatin/>
            </container>
        </main>
    );
}

export default Page;