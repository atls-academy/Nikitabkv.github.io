import React from "react";

import {Layout, Column} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'

const ListItem = ({data, isLastItem}) => {
    const {id, title, text} = data

    return (
        <Layout justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>
            <Layout alignItems='center'>
                <Text fontSize='24px' color='white' marginRight='32px'>{id}</Text>
                <Text fontSize='40px' color='white'>{title}</Text>
            </Layout>
            <Text width='650px' fontSize='24px' color='white' marginTop='48px' marginBottom='48px'>
                {text}
            </Text>
            {isLastItem ? '' : <Divider weight={1} color='white'/>}
        </Layout>
    )
}

export {ListItem}
