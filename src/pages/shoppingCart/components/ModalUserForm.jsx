
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';



export default function ModalUserForm( {handleClose, handleSubmit, onUserData, open }) {


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onUserData(formData)
  };


  return (
    <div>
      <Modal
          open={open}
          onCancel={handleClose}
          onClose={handleClose}
          title="Formulario de Usuario"
          footer={null}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
        <Box sx={style}>
        <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              type='number'
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Correo electrónico"
              name="email"
              type='email'
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

ModalUserForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onUserData: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
