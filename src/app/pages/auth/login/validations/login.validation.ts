import { IValidation } from '@/domain/interfaces';

export const loginValidations: IValidation = {
  email: (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Por favor, ingrese un email válido.';

    return undefined;
  },
  password: (value: string) => {
    if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres.';

    return undefined;
  },
};
