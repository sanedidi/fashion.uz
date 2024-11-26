import { Box, Button, Container, Flex, Text, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import s from './index.module.scss'
import { hair, makeup, man, nail } from './components';
import { DialogBody, DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '../ui/dialog';

const Hero = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleFormSubmit = () => {
        fetch(`https://api.telegram.org/bot7631700161:AAFDAmYcqWxwxySAMZnGaPE0_Ede3WZw9PU/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: "-4582188512",
                text: `#${formData.service} \nНовый запрос: от ${formData.name} на ${formData.service} номер телефона для связи: ${formData.phone}`,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Сообщение отправлено в Telegram:", data);
            })
            .catch(error => {
                console.error("Ошибка отправки в Telegram:", error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(formData);
        setOpen(false);
    };
    return (
        <Box
            data-state="open"
            _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "1000ms",
            }}
            _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "320ms",
            }}
            className={s.hero}
        >
            <Container>
                <Swiper
                    spaceBetween={10}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    height={"100vh"}
                    className={s.hero__mySwiper}
                >
                    {/* Hair Slide */}
                    <SwiperSlide className={s.hero__skj}>
                        {hair.map((el) => (
                            <img key={el.id} id={el.id} src={el.photo} alt="" />
                        ))}
                        <div className={s.hero__before}></div>
                        <Flex justifyContent={"flex-end"} flexDirection={"column"} gap={5} className={s.hero__after}>
                            <h2>✨Совершенная прическа для вашего неповторимого образа!✨</h2>
                            <Text>
                                Элегантные вечерние прически – для особых случаев,
                                Свадебные укладки – чтобы ваш день был идеальным,
                                Повседневные укладки – легкость и красота на каждый день.
                            </Text>
                            <Flex justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"} onClick={() => { setFormData({ ...formData, service: 'ЖенскаяСтрижка' }); setOpen(true);; }}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>

                    {/* Nail Slide */}
                    <SwiperSlide className={s.hero__skj}>
                        {nail.map((el) => (
                            <img key={el.id} id={el.id} src={el.photo} alt="" />
                        ))}
                        <div className={s.hero__before}></div>
                        <Flex justifyContent={"flex-end"} flexDirection={"column"} gap={5} className={s.hero__after}>
                            <h2>✨Идеальный маникюр для ваших безупречных рук!✨</h2>
                            <Text>
                                Классический маникюр – элегантная простота, которая всегда актуальна,
                                Современный дизайн ногтей – стильные решения, которые подчеркнут вашу уникальность,
                                Уход за ногтями и кожей рук – забота, которой вы заслуживаете.
                            </Text>
                            <Flex justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"} onClick={() => { setFormData({ ...formData, service: 'Маникюр' }); setOpen(true);; }}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>

                    {/* Makeup Slide */}
                    <SwiperSlide className={s.hero__skj}>
                        {makeup.map((el) => (
                            <img key={el.id} id={el.id} src={el.photo} alt="" />
                        ))}
                        <div className={s.hero__before}></div>
                        <Flex justifyContent={"flex-end"} flexDirection={"column"} gap={5} className={s.hero__after}>
                            <h2>✨Преображайте себя с профессиональным макияжем!✨</h2>
                            <Text>
                                Эффектные вечерние образы для важных событий,
                                Естественный повседневный макияж, который идеально подчеркнет ваш стиль.
                                Мы подберем оттенки и технику, которые подойдут именно вам, чтобы вы чувствовали себя уверенно и восхитительно в любой ситуации.
                            </Text>
                            <Flex justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"} onClick={() => { setFormData({ ...formData, service: 'Макияж' }); setOpen(true);; }}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>

                    {/* Man Slide */}
                    <SwiperSlide className={s.hero__skj}>
                        {man.map((el) => (
                            <img key={el.id} id={el.id} src={el.photo} alt="" />
                        ))}
                        <div className={s.hero__before}></div>
                        <Flex justifyContent={"flex-end"} flexDirection={"column"} gap={5} className={s.hero__after}>
                            <h2>✨Стильная мужская стрижка для уверенного образа!✨</h2>
                            <Text>
                                Классические стрижки – для тех, кто ценит строгий стиль,
                                Современные тренды – подчеркните свою индивидуальность,
                                Уход за волосами – здоровый вид и безупречность в каждом движении.
                            </Text>
                            <Flex justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"} onClick={() => { setFormData({ ...formData, service: 'Мужская стрижка' }); setOpen(true);; }}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </Container>
            <DialogRoot closeOnEscape open={open} >
                <DialogTrigger asChild>
                    <DialogContent>
                        <DialogHeader fontWeight={"600"}>Отправьте номер телефона для быстрой связи</DialogHeader>
                        <DialogBody>
                            <form onSubmit={handleSubmit}>
                                <Flex flexDir={"column"} gap={3}>
                                    <Flex flexDir={"column"} gap={2}>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Введите ваше имя"
                                            required
                                        />
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Введите ваш номер телефона"
                                            required
                                        />
                                    </Flex>
                                    <Flex justifyContent={"end"} gap={3} w={"100%"}>
                                        <Button bgColor={"red.400"} onClick={() => setOpen(false)}>Отменить</Button>
                                        <Button type="submit">Отправить</Button>
                                    </Flex>
                                </Flex>
                            </form>
                        </DialogBody>
                    </DialogContent>
                </DialogTrigger>
            </DialogRoot>

        </Box>
    )
}

export default Hero;
