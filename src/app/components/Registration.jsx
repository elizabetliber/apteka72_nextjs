import React from 'react';
import Link from "next/link";
import {Input} from "@nextui-org/react";


function Registration() {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <div className="max-w-big flex flex-col justify-center items-center">
                <p className="text-3xl">Давайте начнём покупки!</p>
                <p className="text-xl mt-3">Введите вашу почту и пароль, или <Link href="" className="text-sky-800">зарегистрируйтесь</Link></p>
                <Input className="border border-gray-500 py-0.5 px-3 data-focus:none mt-6" placeholder="Электронная почта"/>
                <Input className="border border-gray-500 py-0.5 px-3 focus-none mt-2 data-fo" placeholder="Пароль"/>
                <Link href="" className="text-sky-800 text-xl mt-8">Войти в личный кабинет</Link>
                <Link href="" className="text-sky-800 text-base mt-2">Забыли пароль?</Link>
            </div>
        </div>
    );
}

export default Registration;