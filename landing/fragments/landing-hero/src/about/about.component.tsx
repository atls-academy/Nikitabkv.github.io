import React from "react";

import {Column, Box, Layout} from '@ui/layout'
import {Divider} from '@ui/divider'
import {Text} from '@ui/text'
import {Social} from "./social";

const About = () => (
    <Box width='1650px' marginLeft={'190px'} justifyContent={'space-between'}>
        <Column width='1460px' height='498px'>
            <Text color={'white'} fontSize={'96px'}>Обучаем <br/> профессионалов </Text>
            <Text color={'white'} fontSize={'96px'} paddingBottom={'48px'}>для революции в it</Text>
            <Divider weight={1} color='white'/>
            <Text color={'white'} fontSize={'20px'} paddingTop={'48px'}>
                Мы не учим программированию и дизайну, мы учим мышлению, <br/>
                способному реализовывывать невозможные идеи.
            </Text>
        </Column>
        <Social/>
    </Box>
)

export {About}
