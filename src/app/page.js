import Header from "@/app/components/Header";
import Comparison from "@/app/components/Сomparison";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#fff] px-12 py-14">
            <container className="container mx-auto">
                <Header/>
                {/*<Hero/>*/}
                <Comparison/>
            </container>
        </main>
    )
}
