import React, { useState } from 'react';
import s from './index.module.scss';
import { Box, Container, Grid, Image, Text, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { allCategories } from '../Hero/components';
import main_logo from '../../assets/main-logo.png'
import arrowsvg from '../../assets/arrow.svg'
import arrowleft from '../../assets/arrowleft.svg'
import arrowtop from '../../assets/arrowtop.svg'
import arrowdown from '../../assets/arrowdown.svg'
import arrowe from '../../assets/arrowe.svg'
import arrowr from '../../assets/arrowr.svg'

const Mission = () => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => setIsExpanded(!isExpanded);

    return (
        <Box id="mission" m={"100px 0 20px"}>
            <Container>
                <Box>
                    <Text fontFamily={"Philosopher"} fontSize={"clamp(1.375rem, 0.859rem + 2.58vw, 3.438rem)"} fontWeight={"600"} className={s.about__title}>
                        {t("links.mission")}
                    </Text>
                    <Grid height={"75vh"} justifyContent={"space-between"} gridTemplateColumns={"repeat(8, 1fr)"}>
                        {allCategories.map((el, i) => (
                            <Box key={i} className={s.mission__box}>
                                <Image src={el.photo} height={"100%"} />
                            </Box>
                        ))}
                    </Grid>
                    <Image className={s.mission__logo} src={main_logo} alt='main_logo' />
                    <Box>
                        <img className={s.mission__arrow} src={arrowsvg} alt="" />
                        <Text className={s.mission__text1}>
                            ✨Cоздать пространство для женщин, <br />укрепить свое «Я»
                        </Text>
                    </Box>
                    <Box>
                        <img className={s.mission__arrow1} src={arrowleft} alt="" />
                        <Text className={s.mission__text2}>
                            ✨Вдохновение и уверенность
                        </Text>
                    </Box>
                    <Box>
                        <img className={s.mission__arrow2} src={arrowtop} alt="" />
                        <Text className={s.mission__text3}>
                            ✨Долговременные отношения
                        </Text>
                    </Box>
                    <Box>
                        <img className={s.mission__arrow3} src={arrowdown} alt="" />
                        <Text className={s.mission__text4}>
                            ✨Комфорт и доверие
                        </Text>
                    </Box>
                    <Box>
                        <img className={s.mission__arrow4} src={arrowe} alt="" />
                        <Text className={s.mission__text5}>
                            ✨Создавать красоту, вдохновлять и подчеркивать <br /> уникальность каждого клиента.✨
                        </Text>
                    </Box>
                    <Box>
                        <img className={s.mission__arrow5} src={arrowr} alt="" />
                        <Text className={s.mission__text6}>
                            ✨Раскрытие женственности <br /> и
                            уверенности в себе✨
                        </Text>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Mission;
