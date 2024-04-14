import MiniSt from '../../components/card/MiniSt'
import { SimpleGrid } from '@chakra-ui/react'
import miniStData from '../../data/miniStData'
import ComplexTable from './components/ComplexTable'

function Home() {
    return (
        <div>
            {/* Complex Table */}
            <ComplexTable />
            {/* <SlideMain /> */}
            <SimpleGrid columns={[1, null, 2, 3, 6]} spacing={10}>
                {miniStData.map((data, index) => (
                    <MiniSt key={index} {...data} />
                ))}
            </SimpleGrid>
            {/* <Stack direction={['column', null, null, 'row']}> */}
        </div>
    )
}

export default Home
