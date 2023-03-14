// @mui
import { useTheme, styled, Theme } from '@mui/material/styles';
import { Typography, Box, IconButton, SxProps } from '@mui/material';
// utils
//
import { IconifyProps } from '../iconify';
//
import { LeftIcon, RightIcon } from './Icon';
import { bgBlur } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

const StyledRoot = styled(Box)(({ theme }) => ({
    // ...bgBlur({
    //   opacity: 0.48,
    //   color: theme.palette.grey[100],
    // }),
    backgroundColor: '#fff',
    zIndex: 9,
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
    bottom: theme.spacing(-15),
    right: theme.spacing(-115),
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    borderRadius: '6px',
    border: '1px solid #e5e5e5'
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    width: 28,
    height: 28,
    padding: 0,
    color: '#ccc',
    opacity: 0.48,
    // content: '"ea62"',
    '&:hover': { opacity: 1 }
}));

// ----------------------------------------------------------------------

type Props = {
    index: number;
    total: number;
    icon?: IconifyProps; // Right icon
    onNext?: VoidFunction;
    onPrevious?: VoidFunction;
    sx?: SxProps<Theme>;
};

export default function CarouselArrowIndex({ index, total, onNext, onPrevious, icon, sx, ...other }: Props) {
    const theme = useTheme();

    const isRTL = theme.direction === 'rtl';

    return (
        <StyledRoot sx={sx} {...other}>
            <StyledIconButton color="inherit" onClick={onPrevious}>
                <LeftIcon icon={icon} isRTL={isRTL} />
            </StyledIconButton>

            {/*<Typography variant="subtitle2" component="span" sx={{ mx: 0.25 }}>*/}
            {/*  {index + 1}/{total}*/}
            {/*</Typography>*/}

            <StyledIconButton color="inherit" onClick={onNext}>
                <RightIcon icon={icon} isRTL={isRTL} />
            </StyledIconButton>
        </StyledRoot>
    );
}
