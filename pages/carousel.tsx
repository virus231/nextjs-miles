import { Card, CardContent, CardHeader } from '@mui/material';
import CarouselCenterMode from '../app/components/carousel/CarouselCenterMode';

const _carouselsExample = [
    {
        id: '1',
        title: '123',
        image: '/static/images/project1.jpg',
        description: 'Description'
    },
    {
        id: '2',
        title: '123',
        image: '/static/images/project2.jpg',
        description: 'Description'
    },
    {
        id: '3',
        title: '123',
        image: '/static/images/project3.jpg',
        description: 'Description'
    },
    {
        id: '4',
        title: '123',
        image: '/static/images/project1.jpg',
        description: 'Description'
    },
    {
        id: '5',
        title: '123',
        image: '/static/images/project1.jpg',
        description: 'Description'
    },
    {
        id: '6',
        title: '123',
        image: '/static/images/project2.jpg',
        description: 'Description'
    },
    {
        id: '7',
        title: '123',
        image: '/static/images/project3.jpg',
        description: 'Description'
    },
    {
        id: '8',
        title: '123',
        image: '/static/images/project1.jpg',
        description: 'Description'
    }
];

export default function Carousel() {
    return (
        <Card>
            <CardHeader title="Carousel Center Mode" subheader="Customs shape & icon button" />
            <CardContent>
                <CarouselCenterMode data={_carouselsExample} />
            </CardContent>
        </Card>
    );
}
