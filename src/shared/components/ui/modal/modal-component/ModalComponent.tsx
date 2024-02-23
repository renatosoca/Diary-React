import { FC } from 'react';
import { Typography, Modal, Box, Backdrop, Stack, IconButton, Button, Fade } from '@mui/material';
import { ICONS } from '@/shared/assets';

interface ModalComponentProps {
  children: React.ReactNode;
  openModal: boolean;
  title?: string;
  titleBtnConfirm?: string;
  titleBtnCancel?: string;
  classNameContained?: string;
  isHideButtons?: boolean;

  handleSubmit?: (e: any) => void;
  handleClose?: () => void;
}

export const ModalComponent: FC<ModalComponentProps> = ({
  children,
  openModal,
  title,
  titleBtnConfirm = 'Aceptar',
  titleBtnCancel = 'Cancelar',
  classNameContained = 'modal__crud',
  isHideButtons = false,

  handleSubmit,
  handleClose,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Box
          sx={{
            bgcolor: 'background.paper',
          }}
          className={`modal ${classNameContained}`}
        >
          <Stack justifyContent={title ? 'space-between' : 'flex-end'} direction="row" alignItems="center" mb={1}>
            {title && (
              <Typography
                component={'h2'}
                variant="subtitle2"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                {title}
              </Typography>
            )}

            <IconButton onClick={handleClose}>{ICONS.CLOSE}</IconButton>
          </Stack>

          <Box component={'form'} onSubmit={handleSubmit}>
            {children}

            {isHideButtons ? null : (
              <Box className="button__container" mt={3} display="flex" justifyContent="center">
                {handleClose && (
                  <Box mr={1}>
                    <Button fullWidth color="info" variant="contained" onClick={handleClose} type="button">
                      {titleBtnCancel}
                    </Button>
                  </Box>
                )}

                <Box>
                  <Button fullWidth color="secondary" variant="contained" type="submit">
                    {titleBtnConfirm}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
