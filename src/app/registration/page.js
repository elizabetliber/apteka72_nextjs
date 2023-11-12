import React from 'react';
import Registration from "@/app/components/Registration";

function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-white px-12 py-14">
            <container className="container mx-auto">
                <Registration/>
            </container>
        </main>
    );
}

export default Page;