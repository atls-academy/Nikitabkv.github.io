import React from "react";

import {Text} from '@ui/text'
import {Column} from '@ui/layout'

const TextComponent = () => (
    <Column width='1460px'>
        <Text color='white' fontSize='44px' marginTop='210px'>
            Digital становится всё более многолюдным, востребованность по направлениям при этом не снижается
            Но специалистов, готовых <br/> нести ответсвенность за свои решения по-прежнему мало
        </Text>
        <Text color='white' fontSize='44px' marginTop='40px'>
            Atlantis Academy обучает и формирует инженеров и архитекторов, а не программистов и дизайнеров
        </Text>
    </Column>
)

export {TextComponent}