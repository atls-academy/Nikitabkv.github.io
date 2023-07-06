import React             from 'react'
import { FormattedMessage } from "react-intl";

import { PlugIcon }      from '@ui/icon'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Text, Space }   from '@ui/text'


const LandingAbout = () => (
    <Box background='gray' color='white' justifyContent={['center', 'flex-start']}>
        <Box flexBasis={[0, 230]}/>
        <Column flexBasis={[335, 1460]}>
            <Box flexBasis={[64, 160]}/>

            <Column display={['none', 'flex']}>
            <Box flexWrap='wrap'>
                <Box>
                    <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
                        <FormattedMessage id='FirstTextAbout'/>
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
                        <FormattedMessage id='SecondTextAbout'/>
                        <Box display={['none', 'inline']} position='relative' top='6px'>
                            <Space count={3} />
                            <PlugIcon />
                            <Space count={3} />
                        </Box>
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
                        <FormattedMessage id='ThirdTextAbout'/>
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
                        <FormattedMessage id='FourthTextAbout'/>
                        <Box display={['none', 'inline']} position='relative' top='6px'>
                            <Space count={6} />
                            <PlugIcon />
                        </Box>
                    </Text>
                </Box>
            </Box>

            <Box flexBasis={[20, 40]}/>

            <Box flexWrap='wrap'>
                <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
                    <FormattedMessage id='SecondParagraphFirstTextAbout'/>
                </Text>
            </Box>
            <Box flexWrap='wrap'>
                <Text fontSize={['increased', 'veryHuge']} lineHeight='high'>
                    <FormattedMessage id='SecondParagraphSecondTextAbout' />
                    <Box display={['none', 'inline']} position='relative' top='6px'>
                        <Space count={3} />
                        <PlugIcon />
                    </Box>
                </Text>
            </Box>
            </Column>

            <Column display={['flex', 'none']}>
                <Column>
                    <Text fontSize='increased' lineHeight='high'>
                        <FormattedMessage id='FirstParagraphFirstTextAboutMobile'/>
                    </Text>
                    <Text fontSize='increased' lineHeight='high'>
                        <FormattedMessage id='FirstParagraphSecondTextAboutMobile'/>
                    </Text>
                    <Text fontSize='increased' lineHeight='high'>
                        <FormattedMessage id='FirstParagraphSecondThirdAboutMobile'/>
                    </Text>
                </Column>
                <br/>
                <Column>
                    <Text fontSize='increased' lineHeight='high'>
                        <FormattedMessage id='SecondParagraphFirstTextAboutMobile'/>
                    </Text>
                    <Text fontSize='increased' lineHeight='high'>
                        <FormattedMessage id='SecondParagraphSecondTextAboutMobile'/>
                    </Text>
                </Column>
            </Column>
            <Box flexBasis={[64, 160]}/>
        </Column>
    </Box>
)

export { LandingAbout }
