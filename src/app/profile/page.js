import Profile from "@/app/components/Profile";
import Header from "@/app/components/Header";

function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-white px-12 py-2">
            <container className="container mx-auto">
                <Header/>
                <Profile/>
            </container>
        </main>
    );
}

export default Page;