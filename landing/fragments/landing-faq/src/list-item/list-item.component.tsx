import React from "react";

import {Layout} from '@ui/layout'
import {Text} from '@ui/text'
import {Divider} from '@ui/divider'
import {PlusIcon} from '@ui/icon'

const ListItem = ({data, isLastItem}) => {
    const {text} = data

    return (
        <Layout justifyContent='space-between' flexWrap='wrap' alignItems='flex-start'>

            <Layout display={['none', 'contents']}>
                <Divider weight={1} color='black' />
            </Layout>

            <Layout width='100%' alignItems='center' flexDirection={['row-reverse', 'row']} justifyContent={['space-between', 'flex-start']}>
                <Text fontSize={['normal', 'increasedPlus']} margin={['16px 0 16px 0', '40px 26px 40px 0']}><PlusIcon/></Text>
                <Text fontSize={['increased', 'huge']} margin={['16px 0 16px 0', '40px 40px 40px 0']}>{text}</Text>
            </Layout>

            <Layout display={['contents', 'none']}>
                {isLastItem ? '' : <Divider weight={1} color='black'/>}
            </Layout>

            <Layout display={['none', 'contents']}>
                {isLastItem ? <Divider weight={1} color='black'/> : ''}
            </Layout>

        </Layout>
    )
}

export {ListItem}
