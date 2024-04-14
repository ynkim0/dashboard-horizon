import { CloseIcon, DownloadIcon, InfoIcon, InfoOutlineIcon, MoonIcon } from '@chakra-ui/icons'
import MiniSt from '../../components/card/MiniSt'
import Logo from '../../components/common/Logo'
import { Heading, Button, Stack, HStack, VStack, SimpleGrid } from '@chakra-ui/react'
import IconBox from '../../components/icon/IconBox'
import SlideMain from '../../components/slide/SlideMain'

function Home() {
    return (
        <div>
            <SlideMain />
            <SimpleGrid columns={[1, null, 2, 3, 6]} spacing={10}>
                <MiniSt
                    name="타이틀1"
                    value="$350.0"
                    startIcon={<IconBox bg={'red.200'} borderRadius={'10px'} icon={<MoonIcon />} />}
                />
                <MiniSt
                    name="타이틀2"
                    value="$660.0"
                    startIcon={<IconBox bg={'blue.200'} borderRadius={'50%'} icon={<CloseIcon />} />}
                />
                <MiniSt growth="15.34%" name="타이틀3" value="$770.0" />
                <MiniSt name="타이틀4" value="$990.0" endIcon={<InfoIcon />} />
                <MiniSt name="타이틀5" value="$220.0" startIcon={<InfoOutlineIcon />} />
                <MiniSt name="타이틀6" value="$880.0" startIcon={<MoonIcon />} />
            </SimpleGrid>
            {/* <Stack direction={['column', null, null, 'row']}> */}
        </div>
    )
}

export default Home
