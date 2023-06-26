import React from "react";

import {Text} from '@ui/text'
import {Column, Box} from '@ui/layout'
import {PlugIcon} from '@ui/icon'

const TextComponent = () => (
    <Column width={['335px', '1460px']}>
        <Text color='white' fontSize={['increased', 'veryHuge']} marginTop={['64px', '210px']} display='block' lineHeight='140%'>
            Digital становится всё более многолюдным, востребованность по направлениям при этом <Text display={['inline', 'none']}><br/></Text>не снижается
            <Box display={['none', 'inline']} padding={'0 18px'} position={'relative'} top={'6px'}><PlugIcon/></Box>
            <Text fontSize={['increased', 'veryHuge']} display={['inline', 'none']}>. </Text>Но специалистов, готовых нести ответсвенность за свои решения по-прежнему
            <Text display={['inline', 'none']}><br/></Text> мало
            <Box display={['none', 'inline']} padding={'0 18px'} position={'relative'} top={'6px'}><PlugIcon/></Box>
        </Text>
        <Text color='white' fontSize={['increased', 'veryHuge']} marginTop={['40px']} display='block' lineHeight='140%'>
            Atlantis Academy обучает и формирует инженеров и архитекторов, а не программистов и дизайнеров <Box display={['none', 'inline']} padding={'0 18px'} position={'relative'} top={'6px'}><PlugIcon/></Box>
        </Text>
    </Column>
)

export {TextComponent}