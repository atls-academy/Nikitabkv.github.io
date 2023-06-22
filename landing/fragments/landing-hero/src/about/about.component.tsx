import React from "react";

import {Column, Box} from '@ui/layout'
import {Divider} from '@ui/divider'
import {Text} from '@ui/text'
import {Social} from "./social";

const About = () => (
    <Box width={['335px', '1650px']} marginLeft={['0', '190px']} justifyContent='space-between' flexDirection={['column', 'row']}>
        <Column width={['335px', '1460px']} height={['auto', '498px']} marginTop={['20px', '0']}>
            <Text color='white' fontSize={['28px', '96px']}>Обучаем <br/> профессионалов </Text>
            <Text color='white' fontSize={['28px', '96px']} paddingBottom={['24px', '48px']}>для революции в it</Text>
            <Divider weight={1} color='white'/>
            <Text color='white' fontSize={['14px', '20px']} paddingTop={['24px', '48px']}>
                Мы не учим программированию и дизайну, мы учим мышлению, <br/>
                способному реализовывывать невозможные идеи.
            </Text>
        </Column>
        <Social/>
    </Box>
)

export {About}
