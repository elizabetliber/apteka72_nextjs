import React from 'react';
import Link from "next/link";
import Image from "next/image";


function Profile() {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <div className="max-w-big flex flex-row gap-5">
                <div className="flex flex-[1_1_25%] flex-col border border-gray-500 text-xl">
                    <Link href="" className="border-b border-gray-500 py-1 px-1">Личный кабинет</Link>
                    <Link href="/calendar" className="bg-slate-300 border-b border-gray-500 py-1 px-1">Календарь приёма лекарств</Link>
                    <Link href="" className="border-b border-gray-500 py-1 px-1">История покупок</Link>
                    <Link href="" className="border-b border-gray-500 py-1 px-1">Бонусы</Link>
                    <Link href="" className="border-b border-gray-500 py-1 px-1">Аналоги совершенных покупок</Link>
                </div>
                <div className="flex flex-col flex-[1_1_15%] pt-3">
                    <p>Исходя из Вашей покупки, совершённой 14 января, мы расставили вам ближайшие даты приёма лекарств.</p>
                    <p className="mt-5">Подключите услугу смс оповещения о приёме лекарств!</p>
                    <button className="border-cyan-600 border rounded-lg text-cyan-600 mt-4">Подключить!</button>
                </div>
                <div className="flex flex-[1_1_60%]">
                    <Image
                        src="/images/calendar.png"
                        alt="pankreatin"
                        width={700}
                        height={700}
                        className="w-full"
                    />
                </div>
            </div>
        </div>

    );
}

export default Profile;
