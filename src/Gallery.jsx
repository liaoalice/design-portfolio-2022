import "./Gallery.scss"
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery() {
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
    img: '/img/illustrations/shivers.png',
    title: 'Harry and Kim from Disco Elysium',
  },
  {
    img: '/img/illustrations/family.jpg',
    title: 'The Morales family from Into the Spider-Verse hugging each other, on a yellow background',
  },
  {
    img: '/img/illustrations/barbie.png',
    title: 'Sketches of characters from Barbie(2023).',
  },
  {
    img: '/img/illustrations/respite.gif',
    title: 'An illustrated animation of rain falling over grass with a church and mountains in the distance.',
  },
  {
    img: '/img/illustrations/IMG_3583.jpg',
    title: 'The pink, art deco-style Casa de Serralves art museum in Porto, Portugal',
  },
  {
    img: '/img/illustrations/IMG_3772.jpg',
    title: 'Pink Japanese camellia at Serralves in Porto, Portugal',
  }
];
