import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-big flex justify-center">
                <div className="w-full max-w-lg flex gap-3 font-bold text-emerald-600">
                    <Link href="/registration">Регистрация</Link>
                    <Link href="/profile">Личный кабинет</Link>
                    <Link href="/mezim">Мезим</Link>
                    <Link href="/pankreatin">Панкреатин</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;