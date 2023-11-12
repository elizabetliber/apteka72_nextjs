import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Comparison() {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <div className="max-w-big">
                <p className="text-center text-2xl text-black">
                    Сравнение препаратов Мезим Форте и Панкреатин
                </p>
                <div className="mt-6 flex flex-row gap-28 justify-between text-black text-base">
                    <div className="flex flex-row items-center justify-between">
                        <Link href="/mezim">
                            <Image
                                src="/images/mezim.jpg"
                                alt="mezim"
                                width={300}
                                height={300}
                            />
                        </Link>
                        <div className="flex flex-col ml-6">
                            <p className="text-xl">Цена:<span className="text-cyan-600"> От 115 Р</span></p>
                            <p className="mt-4">В наличии в <span className="text-green-600">12</span><br/> аптеках
                                рядом с Вами!</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Link href="/pankreatin">
                            <Image
                                src="/images/pankreatin.jpeg"
                                alt="pank"
                                width={300}
                                height={300}
                            />
                        </Link>
                        <div className="flex flex-col ml-4">
                            <p className="text-xl">Цена:<span className="text-cyan-600"> От 60 Р</span></p>
                            <p className="mt-4">В наличии в <span className="text-green-600">19</span><br/> аптеках
                                рядом с Вами!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center text-black text-base mt-6 ">
                <p className="text-xl text-green-600 mb-2">Ключевые отличия</p>
                <p className="mb-2">Причины выбрать Панреатит:</p>
                <ul className="list-disc">
                    <li>Соизмеримо дешевле Мезима по Тюмени</li>
                    <li>Отечественный препарат</li>
                    <li>В наличии поблизости от Вас</li>
                    <li>Меньше побочных эффектов</li>
                </ul>
                <div className="flex flex-row justify-between gap-20 text-black max-w-[1050px] mt-10">
                    <div className="flex-1">
                        <div className="flex gap-2">
                            <Image
                                src="/images/exit.png"
                                width={24}
                                height={24}
                                alt="exit"
                                className="h-[24px]"
                            />
                            <div>
                                <p>Состав</p>
                                <p>В 1 таблетке, покрытой оболочкой, содержится:</p>
                                <p>Действующее вещество:</p>
                                <p>Панкреатин<sup>*</sup> - 116,66 -134,61 мг с минимальной активностью:</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                            <Image
                                src="/images/exit.png"
                                width={24}
                                height={24}
                                alt="exit"
                                className="h-[24px]"
                            />
                            <div>
                                <p>Фармакологическое действие</p>
                                <p>Фармакотерапевтическая группа: пищеварительное ферментное средство</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-2">
                            <Image
                                src="/images/positive.png"
                                width={24}
                                height={24}
                                alt="positive"
                                className="h-[24px]"
                            />
                            <div>
                                <p>Состав</p>
                                <p>Активное вещество:</p>
                                <p>панреатин - 0.1 г (25ЕД),</p>
                                <p>вспомогательные вещества</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                            <Image
                                src="/images/positive.png"
                                width={24}
                                height={24}
                                alt="positive"
                                className="h-[24px]"
                            />
                            <div>
                                <p>Фармакологическое действие</p>
                                <p>Компенсирует недостаточность внешнесекретной функции поджелудочной железы, оказывает
                                    протеолитическое, амилолитическое и липолитическое действие.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comparison;