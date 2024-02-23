import { FC } from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  return (
    <Box sx={{ width: '100%', maxHeight: '24rem', overflowY: 'auto', mt: '1rem' }}>
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}
        sx={{ backgroundColor: 'text.disabled', m: 0, p: `${images.length ? '.4rem 0 .4rem .4rem' : ''}` }}
      >
        {images.map((url) => (
          <ImageListItem key={url}>
            <img src={url} srcSet={url} alt={url} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
