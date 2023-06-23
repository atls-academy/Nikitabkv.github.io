import React from "react";

import {Text} from '@ui/text'
import {Column, Box} from '@ui/layout'
import {PlugIcon} from '@ui/icon'

const TextComponent = () => (
    <Column width={['335px', '1460px']}>
        <Text color='white' fontSize={['20px', '44px']} marginTop={['64px', '210px']} display='block'>
            Digital становится всё более многолюдным, востребованность по направлениям при этом не снижается <Box display={['none', 'inline']} padding={'0 18px'} position={'relative'} top={'6px'}><PlugIcon/></Box>
            Но специалистов, готовых <br/> нести ответсвенность за свои решения по-прежнему мало <Box display={['none', 'inline']} padding={'0 18px'} position={'relative'} top={'6px'}><PlugIcon/></Box>
        </Text>
        <Text color='white' fontSize={['20px', '44px']} marginTop={['40px']} display='block'>
            Atlantis Academy обучает и формирует инженеров и архитекторов, а не программистов и дизайнеров <Box display={['none', 'inline']} padding={'0 18px'} position={'relative'} top={'6px'}><PlugIcon/></Box>
        </Text>
    </Column>
)

export {TextComponent}