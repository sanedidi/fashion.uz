import {
    Box,
    Button,
    Container,
    Flex,
    Image,
    Link,
    MenuTriggerItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import s from './index.module.scss';
import { useTranslation } from 'react-i18next';
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger
} from '../ui/menu';
import logo from '../../assets/logo.png';
import { IoIosMore } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
const Header = () => {
    const { t, i18n } = useTranslation();
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [open, setOpen] = useState(false)
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguageMenu(false);
    };

    const links = [
        { path: "", label: t("links.home") },
        {
            path: "#about", label: t("links.about")
        },
        { path: "", label: t("links.сontacts") },
        { path: "#mission", label: t("links.mission") },
    ];

    return (
        <Box bgColor={"#fdf8fc"} className={s.header}>
            <Container>
                <Flex alignItems={"center"} justifyContent={"space-between"} p={3} className={s.header__wrapper}>
                    <Box>
                        <Image w={"100%"} maxW={"50px"} src={logo} alt="Logo" />
                    </Box>
                    <Flex className={s.header__links} justifyContent={"center"} gap={20}>
                        {links.map((el, i) => (
                            <a
                                key={i}
                                fontWeight={"600"}
                                color={"#5d5050"}
                                fontSize={"18px"}
                                fontFamily={"sans-serif"}
                                href={el.path}
                            >
                                {el.label}
                            </a>
                        ))}
                    </Flex>
                    <Box>
                        <MenuRoot>
                            <MenuTrigger asChild>
                                <Button bgColor={"#fff"} variant="outline" size="sm">
                                    <IoIosMore />
                                </Button>
                            </MenuTrigger>
                            <MenuContent>
                                <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
                                    <MenuTriggerItem p={3} value="open-recent"> <LuLanguages />{t("changelanguage")}</MenuTriggerItem>
                                    <MenuContent>
                                        <MenuItem w={"150px"} className={s.header__lang} onClick={() => changeLanguage('ru')} value="ru">Русский</MenuItem>
                                        <MenuItem w={"150px"} className={s.header__lang} onClick={() => changeLanguage('uz')} value="uz">Узбекский</MenuItem>
                                        <MenuItem w={"150px"} className={s.header__lang} onClick={() => changeLanguage('en')} value="en">Английский</MenuItem>
                                    </MenuContent>
                                    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                                        <DialogTrigger asChild>
                                            <MenuItem p={3}><FaPhoneAlt /> {t("leavecontacts")}</MenuItem>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Dialog Title</DialogTitle>
                                            </DialogHeader>
                                            <DialogBody>
                                            </DialogBody>
                                            <DialogFooter>
                                                <DialogActionTrigger asChild>
                                                    <Button variant="outline">Cancel</Button>
                                                </DialogActionTrigger>
                                                <Button>Save</Button>
                                            </DialogFooter>
                                            <DialogCloseTrigger />
                                        </DialogContent>
                                    </DialogRoot>
                                </MenuRoot>
                            </MenuContent>
                        </MenuRoot>
                    </Box>

                </Flex>
            </Container>
        </Box>
    );
};

export default Header