import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Pankreatin() {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <div className="max-w-big">
                <p className="font-bold">Панкреатин 50 шт. таблетки покрытые кишечнорастворимой оболочкой</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-20">
                        <Image
                            src="/images/pankreatin.jpeg"
                            alt="pankreatin"
                            width={300}
                            height={300}
                        />
                        <div className="flex flex-col gap-y-3">
                            <p>Производитель: Фармстандарт-Лексредства ОАО, Россия</p>
                            <p>Действующее вещество: Панкреатин</p>
                            <p>Срок годности: Длинный срок</p>
                            <p>Форма выпуска: Таблетки покрытые кишечнорастворимой оболочкой</p>
                            <p>Доступна оплата онлайн</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[300px]">
                        <p className="text-xl">Цена:<span className="text-cyan-600"> От 60 Р</span></p>
                        <p className="mt-4">В наличии в <span className="text-green-600">19</span><br/> аптеках рядом с Вами!</p>
                        <div className="font-semibold text-gray-400 mt-6">
                            <Link href="">Проверить наличие</Link><br/>
                            <Link href="">Подобрать аналоги</Link><br/>
                            <Link href="">Сравнить цены</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mt-32">Посмотрите также:</p>
                    <div className="flex gap-20">
                        <div>
                            <Image
                                src="/images/mikrasim.jpeg"
                                alt="mezim"
                                width={250}
                                height={250}
                            />
                            <p className="text-center">179 руб</p>
                            <div className="flex justify-between gap-2 mt-8">
                                <Link href="">В корзину</Link>
                                <Link href="">К сравнению</Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/ensistal.jpg"
                                alt="mezim"
                                width={250}
                                height={250}
                            />
                            <p className="text-center">249 руб</p>
                            <div className="flex justify-between gap-2 mt-8">
                                <Link href="">В корзину</Link>
                                <Link href="">К сравнению</Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/kreon.jpg"
                                alt="mezim"
                                width={250}
                                height={250}
                            />
                            <p className="text-center">98 руб</p>
                            <div className="flex justify-between gap-2 mt-8">
                                <Link href="">В корзину</Link>
                                <Link href="">К сравнению</Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/pankreatin.jpeg"
                                alt="mezim"
                                width={250}
                                height={250}
                            />
                            <p className="text-center">76 руб</p>
                            <div className="flex justify-between gap-2 mt-8">
                                <Link href="">В корзину</Link>
                                <Link href="">К сравнению</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pankreatin