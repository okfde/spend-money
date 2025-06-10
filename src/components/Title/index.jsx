import { Box, Image, Text } from '@chakra-ui/react';

function Title() {
    return (
        <Box alignItems='center'>
            <Image src='https://media.frag-den-staat.de/files/media/main/49/dd/49dd4b08-fab7-41c6-9b7a-a1531a5a6417/spahn.png' width={250} height={250} m={'auto'} borderRadius='full' />
            <Text fontSize={40} mt={3} m={'auto'}  fontWeight={700}>Verteile Spahns Milliarden</Text>
        </Box>
    );
}

export default Title;