import React from 'react';
import "./Info.css"

function Info() {
    return (
        <div className="info__container">
            <div className="info__wrapper">
                <div className="info__item">
                    <h1 className="info__title">Интернет-аптека в Тюмени</h1>
                    <p>
                        Интернет-аптека в Тюмени Apteka.ru предоставляет множество возможностей для поиска и заказа
                        нужных
                        лекарств:
                    </p>
                    <ul>
                        <li>оформление покупки в онлайн-режиме с доставкой в любую из 268 точек Тюмени;</li>
                        <li>проверка наличия медикаментов в ближайших аптеках;</li>
                        <li>быстрые справки о стоимость лекарств;</li>
                        <li>мониторинг акций и скидок;</li>
                        <li>подбор оптимальной формы выпуска лекарственных препаратов (таблетки, драже, суспензии,
                            растворы,
                            порошки, уколы);
                        </li>
                        <li>полные версии инструкций по применению медикаментов.</li>
                    </ul>
                    <p>
                        Кроме этого, на сайте интернет-аптеки можно найти полезные статьи на такие темы, как правильное
                        питание, сохранение красоты, поддержание здоровья. Публикации разрабатываются специалистами с
                        соответствующим образованием и опытом работы. У нас можно получить необходимые знания об уходе
                        за
                        новорожденными детьми не только из печатных материалов, но и из видеороликов, размещенных в
                        разделе
                        «Умная мама». В онлайн-формате или по телефону можно узнать более подробно об интересующих
                        лекарствах, а также условиях и особенностях работы интернет-аптеки — способах оплаты, сроках
                        доставки и хранения заказанных медикаментов.
                    </p>
                </div>
                <div className="info__item">
                    <h2 className="info__title">Наличие лекарств в аптеках Тюмени</h2>
                    <p>
                        Система поиска лекарств в аптеках Тюмени с помощью онлайн-аптеки Apteka.ru позволяет находить
                        нужные
                        товары по таким параметрам, как:
                    </p>
                    <ul>
                        <li>название производителя;</li>
                        <li>активные вещества;</li>
                        <li>штрих-код;</li>
                        <li>наименования;</li>
                        <li>симптомы.</li>
                    </ul>

                </div>
                <div className="info__item">
                    <h2 className="info__title">Преимущества интернет-аптеки Apteka.ru</h2>
                    <p>
                        Каталог лекарственных средств и товаров на сайте онлайн-аптеки имеет удобное разделение на
                        категории
                        и бренды. Apteka.ru сотрудничает исключительно с проверенными поставщиками лекарственных
                        средств,
                        которые гарантируют качество поставляемой продукции. Также мы предлагаем самые доступные цены —
                        без
                        надбавок за услуги фармацевтов и аренду торговых площадей. Для еще более выгодных покупок
                        предусмотрены акции и специальные скидки. Сервис онлайн-аптеки охватывает все регионы России, а
                        в
                        крупных городах количество розничных аптек, которые являются партнерами нашего ресурса,
                        превышает
                        несколько сотен.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;