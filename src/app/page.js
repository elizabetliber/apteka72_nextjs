import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Info from "@/app/components/Info";
import Footer from "@/app/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fff] px-12 py-2">
            <container className="container mx-auto">
                <Header/>
                <Hero/>
                <Info/>
                <Footer/>
            </container>
        </main>
    )
}
