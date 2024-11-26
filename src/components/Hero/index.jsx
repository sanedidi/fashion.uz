import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import s from './index.module.scss'
import { hair, makeup, man, nail } from './components';

const Hero = () => {
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
                            <Flex id='#about' justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide className={s.hero__skj}>
                        {nail.map((el) => (
                            <img key={el.id} id={el.id} src={el.photo} alt="" />
                        ))}
                        <div className={s.hero__before}></div>
                        <Flex justifyContent={"flex-end"} flexDirection={"column"} gap={5} className={s.hero__after}>
                            <h2>
                                ✨Идеальный маникюр для ваших безупречных рук!✨
                            </h2>
                            <Text>
                                Классический маникюр – элегантная простота, которая всегда актуальна,
                                Современный дизайн ногтей – стильные решения, которые подчеркнут вашу уникальность,
                                Уход за ногтями и кожей рук – забота, которой вы заслуживаете.
                            </Text>
                            <Flex justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide className={s.hero__skj}>
                        {makeup.map((el) => (
                            <img key={el.id} id={el.id} src={el.photo} alt="" />
                        ))}
                        <div className={s.hero__before}></div>
                        <Flex justifyContent={"flex-end"} flexDirection={"column"} gap={5} className={s.hero__after}>
                            <h2>
                                ✨Преображайте себя с профессиональным макияжем!✨
                            </h2>
                            <Text>
                                Эффектные вечерние образы для важных событий,
                                Естественный повседневный макияж, который идеально подчеркнет ваш стиль.
                                Мы подберем оттенки и технику, которые подойдут именно вам, чтобы вы чувствовали себя уверенно и восхитительно в любой ситуации.
                            </Text>
                            <Flex justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide className={s.hero__skj}>
                        {man.map((el) => (
                            <img key={el.id} id={el.id} src={el.photo} alt="" />
                        ))}
                        <div className={s.hero__before}></div>
                        <Flex justifyContent={"flex-end"} flexDirection={"column"} gap={5} className={s.hero__after}>
                            <h2>
                                ✨Стильная мужская стрижка для уверенного образа!✨
                            </h2>
                            <Text>
                                Классические стрижки – для тех, кто ценит строгий стиль,
                                Современные тренды – подчеркните свою индивидуальность,
                                Уход за волосами – здоровый вид и безупречность в каждом движении.
                            </Text>
                            <Flex justifyContent={"end"}>
                                <Button color={"#000"} w={'100%'} bgColor={"#fdf8fc"}>Оставить заявку</Button>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    )
}

export default Hero