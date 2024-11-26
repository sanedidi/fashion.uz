import React, { useState } from 'react';
import { Box, Container, Image, Text, Button } from '@chakra-ui/react';
import s from './index.module.scss';
import place3 from '../../assets/place3.jpg';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logoabout.png';
import { DialogBody, DialogCloseTrigger, DialogContent, DialogRoot } from '../ui/dialog';
import { CloseButton } from '../ui/close-button';

const About = () => {
    const { t } = useTranslation();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <Box
            id='about'
            className={s.about}
            data-state="open"
            _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "300ms",
            }}
            _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
            }}
        >
            <Container>
                {/* <Image src={logo} position={"absolute"} w={"400px"} /> */}
                <Box className={s.about__bg}>
                    <Image w={"100%"} h={"calc(100vh - 130px)"} objectFit={"cover"} borderRadius={4} src={place3} alt="fashion.place" />
                    <Box
                        boxShadow={"0px 0px 8px 0px rgba(34, 60, 80, 0.2)"}
                        borderRadius={6}
                        position={"absolute"}
                        bottom={20}
                        left={"10%"}
                        h={"auto"}
                        bgColor={"#fff"}
                        w={"80%"}
                        m={"0 auto"}
                        className={s.about__box}
                    >
                        <Box>
                            <Text fontFamily={"Philosopher"} fontSize={"clamp(1.375rem, 0.859rem + 2.58vw, 3.438rem)"} fontWeight={"600"} className={s.about__title}>
                                {t("links.about")} - Hairfashion.uz
                            </Text>
                        </Box>
                        <Box>
                            <Text display={{ base: "none", sm: "block" }}>
                                🌟 Кто мы такие?
                                Мы — команда профессионалов, которые знают всё о красоте. В нашем салоне вы найдете широкий спектр услуг как для женщин, так и для мужчин. Мы уверены, что уход за собой — это не только необходимость, но и удовольствие, и мы готовы подарить вам комфорт и качество на высшем уровне.
                            </Text>
                            <Text display={{ base: "none", md: "block" }}>
                                ✨ Что мы предлагаем?
                                Полный спектр услуг для женской красоты: укладки, окрашивание, уход за волосами, ногтевой сервис и многое другое.
                                Мужские стрижки всех видов: от классических до современных стайлингов.
                                Индивидуальный подход к каждому клиенту. Мы учитываем ваши пожелания, чтобы подчеркнуть вашу уникальность.
                            </Text>
                            <Text display={{ base: "block", md: "none" }} cursor="pointer" onClick={handleOpenDialog}>
                                ✨ Что мы предлагаем? <br />
                                🌟 Кто мы такие?
                                ...
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <DialogRoot
                size={"full"}
                open={isDialogOpen}
                onOpenChange={(state) => {
                    if (typeof state === 'boolean') { setIsDialogOpen(state) } else {
                        setIsDialogOpen(false)
                    };
                }}
            >
                <DialogContent>
                    <DialogBody>
                        <Text fontWeight={"bold"} mb={4}>✨ Что мы предлагаем?</Text>
                        <Text>
                            Полный спектр услуг для женской красоты: укладки, окрашивание, уход за волосами, ногтевой сервис и многое другое.
                            Мужские стрижки всех видов: от классических до современных стайлингов.
                            Индивидуальный подход к каждому клиенту. Мы учитываем ваши пожелания, чтобы подчеркнуть вашу уникальность.
                        </Text>
                        <Text fontWeight={"bold"} m={"10px 0"}>🌟 Кто мы такие?</Text>
                        <Text>
                            Мы — команда профессионалов, которые знают всё о красоте. В нашем салоне вы найдете широкий спектр услуг как для женщин, так и для мужчин. Мы уверены, что уход за собой — это не только необходимость, но и удовольствие, и мы готовы подарить вам комфорт и качество на высшем уровне. <br />
                        </Text>
                    </DialogBody>
                    <CloseButton onClick={() => {
                        if (typeof state === 'boolean') { setIsDialogOpen(state) } else {
                            setIsDialogOpen(false)
                        };
                    }} bgColor={"red.400"} m={"5px 10px"} color={"#fff"}>Закрыть</CloseButton>
                </DialogContent>
            </DialogRoot>
        </Box>
    );
};

export default About;
