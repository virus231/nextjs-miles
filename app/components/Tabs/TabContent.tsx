import { carouselsExample } from '../../../pages';
import CarouselCenterMode, { CarouselItem } from '../carousel/CarouselCenterMode';
import Carousel, { CarouselArrows, CarouselDots } from '../carousel';
import { useTheme } from '@mui/material/styles';
import { useRef } from 'react';

type Props = {
    content: {
        id: string;
        title: string;
    };
};

export const TabContent = (props: Props) => {
    const { content } = props;

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
            sx: { mt: '10px', color: '#f59e31' }
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
        <div className="tab-content" id="myTabContent">
            <div
                className="tab-pane fade show active"
                id={content.title.toLowerCase()}
                role="tabpanel"
                aria-labelledby={`${content.title.toLowerCase()}-tab`}
            >
                <div className="row projects-sliders">
                    <CarouselArrows
                        onNext={handleNext}
                        topSpace={50}
                        onPrevious={handlePrev}
                        sx={{
                            zIndex: 9,
                            color: '#ccc'
                        }}
                        media
                    >
                        <Carousel ref={carouselRef} {...carouselSettings}>
                            {carouselsExample.map((item) => (
                                <CarouselItem key={item.id} item={item} />
                            ))}
                        </Carousel>
                    </CarouselArrows>
                </div>
            </div>
        </div>
    );
};
