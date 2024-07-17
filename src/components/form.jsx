'use client'

import Image from "next/image"

import baby from '../../public/ring_baby_new.jpg'

import { useState } from "react"

export default function Form({isOpened, close}) {
    const [isPhone, setIsPhone] = useState(false)

    return (
        <div className={`popap ${isOpened? 'active' : null}`}>
            <div className="modal rounded-3xl">
                <div className="form">
                    <h2 className="text-white w-2/3">Закажи карту уже сегодня и получи ее БЕСПЛАТНО</h2>
                    <form action="#">
                        <div className="input-block mb-8">
                            <input type="text" className="input" placeholder="name" />
                        </div>
                        <div className="input-block-setter">
                            <div className="flex mb-2">
                                <div className="input-block">
                                    <input
                                        type="radio"
                                        id='phone'
                                        name="form"
                                        className="input-radio"
                                        defaultChecked={!isPhone}
                                        onClick={() => setIsPhone(false)}
                                    />
                                    <label htmlFor="phone">Phone</label>
                                </div>
                                <div className="input-block ml-4">
                                    <input
                                        type="radio"
                                        id='mail'
                                        name="form"
                                        className="input-radio"
                                        defaultChecked={isPhone}
                                        onClick={() => setIsPhone(true)}
                                    />
                                    <label htmlFor="mail">Mail</label>
                                </div>
                            </div>
                            {isPhone ? (
                                <div className="input-block">
                                    <input className="input" type="email" placeholder="email" />
                                </div>
                            ) : (
                                <div className="input-block">
                                    <input className="input" type="number" placeholder="phone" />
                                </div>
                            )}
                        </div>
                        <button>Send</button>
                    </form>
                    <p className="w-2/3"> * После начала выпуска карточек (эмиссии) мы Вас первому пришлем смс с инструкцией по получению.</p>
                </div>
                <div className="image">
                    <Image src={baby} alt="" fill className="rounded-3xl image"></Image>
                </div>
                <button className="closeButton" onClick={close}></button>
            </div>
        </div>
    )
}
