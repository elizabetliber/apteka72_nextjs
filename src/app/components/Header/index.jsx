import React from 'react';
import './Header.css'
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="flex flex-col justify-center">
            <div className="w-full max-w-big flex justify-center">
                <div className="header__container">
                    <p>Потенциал здоровья</p>
                    <a href="/" className="header__logoHref">
                        <Image
                            src="/images/Logotip.png"
                            alt="LOGO"
                            width={250}
                            height={55}
                        />
                    </a>
                    <input className="header__input" placeholder="Я ищу..."/>
                    <div className="header__menu">
                        <div className="header__item">
                            <p className="header__item_text">Избранное</p>
                            <Image
                                className="header__item_icon"
                                src="/images/icons/favotites.png"
                                alt="favorites"
                                height={30}
                                width={30}
                            />
                        </div>
                        <div className="header__item">
                            <Link href="/comparison" className="header__item_text">Сравнение</Link>
                            <Image
                                className="header__item_icon"
                                src="/images/icons/comparison.png"
                                alt="comparison"
                                height={30}
                                width={30}

                            />
                        </div>
                        <div className="header__item">
                            <p className="header__item_text">Корзина</p>
                            <Image
                                className="header__item_icon"
                                src="/images/icons/basket.png"
                                alt="basket"
                                height={30}
                                width={30}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/registration" className="mt-10 flex justify-center">
                <img className="hero__discount" src="/images/Pod_shapkoy.png" alt="Pod_shapkoy"/>
            </Link>
        </div>
    );
}

export default Header;