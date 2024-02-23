import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { IValidation } from '@/domain/interfaces';
import { TypeWithKey } from '@/domain/types';

export const useHandleForm = <T extends Object>(initialForm: T, validations?: IValidation) => {
  const [params, setParams] = useState(initialForm);
  const [errors, setErrors] = useState({} as T);

  useEffect(() => {
    createValidators();
  }, [params]);

  useEffect(() => {
    setParams(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    return Object.values(errors).every((value) => !!!value);
  }, [errors]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = target;

    setParams({
      ...params,
      [name]: value,
    });
  };

  const createValidators = () => {
    const formCheckedValues: TypeWithKey<string | undefined> = {};

    if (!validations) return;

    for (const validation of Object.keys(validations)) {
      const nameParam = validation as keyof T;

      const callback = validations[validation];

      formCheckedValues[validation] = callback(params[nameParam] as string);

      setErrors(formCheckedValues as any);
    }
  };

  const resetForm = () => {
    setParams(initialForm);
  };

  return {
    params,
    errors,
    isFormValid,

    handleInputChange,
    resetForm,
  };
};
