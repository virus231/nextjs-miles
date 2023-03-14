import { useRef } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
import Image from '../image';
import Carousel, { CarouselArrows, CarouselDots } from '.';

// ----------------------------------------------------------------------

type CarouselItemProps = {
    title: string;
    description: string;
    image: string;
};

export function CarouselItem({ item }: { item: CarouselItemProps }) {
    const { image, title } = item;

    return (
        <Paper
            className="project-slide"
            sx={{
                width: '100%',
                height: '395px',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: 'none'
            }}
        >
            <Image alt={title} src={image} ratio="1/1" />
            <div className="project-slide-info">
                <h3>
                    <a href="17_portfolio_single_layout_1.html" title="">
                        Taskly Dashboard
                    </a>
                </h3>
                <p>BibliU is a digital platform that provides university students with personalized learning pathways..</p>
            </div>
            <span className="category">Website SEO</span>
            <a href="#" title="" className="share">
                <i className="lni lni-share" />
            </a>
        </Paper>
    );
}

// ----------------------------------------------------------------------

type Props = {
    data: {
        id: string;
        title: string;
        image: string;
        description: string;
    }[];
};

export default function CarouselCenterMode({ data }: Props) {
    const carouselRef = useRef<Carousel | null>(null);

    const theme = useTheme();

    const carouselSettings = {
        slidesToShow: 3,
        dots: true,
        arrows: false,
        centerMode: false,
        rtl: Boolean(theme.direction === 'rtl'),
        ...CarouselDots({
            rounded: true,
            sx: { mt: '10px' }
        }),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerPadding: '0' }
            }
        ]
    };

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <Box
            sx={{
                overflow: 'hidden',
                position: 'relative',
                '& .slick-list': {
                    borderRadius: 2
                    // boxShadow: (theme) => theme.customShadows.z16,
                }
            }}
        >
            <CarouselArrows
                // icon="noto:rightwards-hand"
                onNext={handleNext}
                topSpace={50}
                onPrevious={handlePrev}
                sx={{
                    zIndex: 9,
                    color: '#ccc'
                }}
            >
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {data.map((item) => (
                        <CarouselItem key={item.id} item={item} />
                    ))}
                </Carousel>
            </CarouselArrows>
        </Box>
    );
}
