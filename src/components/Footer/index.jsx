import React from 'react'
import s from './index.module.scss'
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import instagramsvg from "../../assets/instagram.svg"
import telegram from "../../assets/telegram.svg"
const Footer = () => {
    return (
        <Box bgColor={"#fdf8fc"} m={"10px 0 0"}>
            <Container>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Image src={logo} w={"60px"} />
                    <Flex gap={4} >
                        <Text fontWeight={"600"}>
                            Мы в социальных сетях:
                        </Text>
                        <Flex gap={3}>
                            <a href="https://www.instagram.com/hairfashion.uz/" target='_blank'> <Image w={"30px"} src={instagramsvg} alt="" /> </a>
                            <a href="https://t.me/hairfashion_uz" target='_blank'> <Image w={"30px"} src={telegram} alt="" /> </a>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer