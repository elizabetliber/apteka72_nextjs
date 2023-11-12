import Profile from "@/app/components/Profile";

function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-white px-12 py-14">
            <container className="container mx-auto">
                <Profile/>
            </container>
        </main>
    );
}

export default Page;