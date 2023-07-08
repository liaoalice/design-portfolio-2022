import "./IllusGallery.scss"
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function IllusGallery() {
    return (
        <div class="div">
            <div className="gallery">
                <div className="gallery-content">
                    <Box sx={{ width: 1200 }}>
                        <ImageList variant="quilted" cols={3} gap={8} rowHeight={460}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </div>
            </div>
        </div>
    )
}

const itemData = [
    {
        img: '/img/illustrations/family.jpg',
        title: 'The Morales Family',
    },
    {
        img: '/img/illustrations/commission.jpg',
        title: 'Prom Night',
    },
    {
        img: '/img/illustrations/respite.gif',
        title: 'Respite',
    },
    {
        img: '/img/illustrations/lnyfratcover.png',
        title: 'LNYF2020',
    },
    {
        img: '/img/illustrations/spotlightcover.gif',
        title: 'Spotlight',
    },
    {
        img: '/img/illustrations/jack_commission.png',
        title: 'Jack and John',
    },
];