import React from "react";

import {Layout} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'

const ListItem = ({data, isLastItem}) => {
    return (
        <Layout justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>
            <Layout alignItems='center'>
                <Text fontSize='24px' color='white' margin='40px 40px 40px 40px'>+</Text>
                <Text fontSize='32px' color='white' margin='40px 40px 40px 40px'>{data}</Text>
            </Layout>
            {isLastItem ? '' : <Divider weight={1} color='white'/>}
        </Layout>
    )
}

export {ListItem}
