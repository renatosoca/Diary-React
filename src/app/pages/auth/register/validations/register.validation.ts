import { IValidation } from '@/domain/interfaces';

export const registerValidations: IValidation = {
  fullName: (value: string) => {
    if (value.length < 1) return 'Por favor, ingrese un nombre';

    if (!/^$|^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-\_\(\)\/]*$/.test(value))
      return "Solo es permitido letras, números y los caracteres '/', '-', '_' y '()'";

    return undefined;
  },
  email: (value: string) => {
    if (value.length < 1) return 'Por favor, ingrese un correo electrónico';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Por favor, ingrese un email válido.';

    return undefined;
  },
  password: (value: string) => {
    if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres.';

    return undefined;
  },
};
