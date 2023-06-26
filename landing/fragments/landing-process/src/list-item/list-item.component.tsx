import React from "react";

import {Layout} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'

const ListItem = ({data, isLastItem}) => {
    const {id, title, text} = data

    return (
        <Layout width={['335px', '1760px']} justifyContent='space-between' flexWrap='wrap' alignItems='center'>
            <Layout marginTop={[`${id === 1 ? '0' : '28px'}`, '0']}>
                <Text fontSize={['medium', 'increasedPlus']} color='white' marginRight={['12px', '32px']}>{id}</Text>
                <Text fontSize={['increasedPlus', 'mediumHuge']} color='white'>{title}</Text>
            </Layout>
            <Text width='650px' fontSize={['regular', 'increasedPlus']} color='white' marginTop={['8px', '48px']} marginBottom={['28px', '48px']} lineHeight='140%'>
                {text}
            </Text>
            {isLastItem ? '' : <Divider weight={1} color='white'/>}
        </Layout>
    )
}

export {ListItem}
