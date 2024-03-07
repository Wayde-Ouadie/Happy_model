// global resources
import React, { useEffect, useMemo } from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import FormStyle from './Form.module.scss'
const cg = StyleNameGestion(FormStyle)

import { Notification } from 'components/uiKits';

import SelectComponent from 'react-select';
import { Controller } from 'react-hook-form';

import colors from 'lib/identity/colors';
import { TOptionSelectPack } from 'components/register/form/registerValidator';


const FieldLayout = ({ error, label = null, required, children }) => {
      return (
            <>
                  <div className={cg('container', 'field')} >
                        <div className={cg(`label ${!!error ? 'error' : 'ok'}`, 'field')} >
                              {label && <label  className={cg('label')} >
                                    {label} <span className={cg('required')}>{required && '*'}</span>
                              </label>}
                              <div className={cg('notification')} >
                                    {!!error && <Notification text={error} type='error' />}
                              </div>
                        </div>
                        <div className={cg('container', 'input')} >
                              {children}
                        </div>
                  </div>
            </>
      )
}

const Input = ({ error, label, register , required, name, ...inputProps }) => {
      return (
            <>
                  <FieldLayout error={error} label={label} required={required} >
                        <input {...{...inputProps, ...register(name)}} id={name} name={name} className={cg(`input state_${!!error ? 'error' : 'valid'}`, 'field')} />
                  </FieldLayout>
            </>
      )
}

const customStyles = {
      option: (provided, state) => ({
          ...provided,
          border: 'none',
      }),
      control: (provided) => ({
            ...provided,
            width: '100%',
            textColor: colors.light_1,
            padding: '1rem 1.25rem',
            borderRadius: '0.375rem',
            borderColor: colors.dark_4,
            color: colors.dark_5,
          backgroundColor: 'rgb(30 177 247 / 0.1)'
      }),
      placeholder: (defaultValue) => ({
            ...defaultValue,
            color: colors.grey_5,
          fontSize: 0,

      }),
      singleValue: (provided) => ({
          ...provided,
          color: colors.light_1,
          border: 'none'
      }),
      input: (provided) => ({
          ...provided,
          color: colors.light_1,
      //     padding: '0.75rem 1rem',
          margin: '0',
  
      })
  }

const Select = ({ error, label, register, required, name, options, defaultOption ,control,...selectProps }) => {
      return (
            <>
                  <FieldLayout error={error} label={label} required={required} >
                        <Controller 
                              name={name}
                              control={control}
                              render={({ field }) => <SelectComponent {...field} styles={customStyles} options={options} placeholder={selectProps.placeholder} defaultValue={defaultOption} formatOptionLabel={(option: TOptionSelectPack) => {
                                    if(!option.data) return null;
                                    return <>
                                          <div className={cg('select')} >
                                                <span className={cg('image')} >
                                                      <Image src={option.data.image.src} width='28px' height='30px'  alt={`egg ${option.value}`} />
                                                </span>
                                                <span className={cg('label', 'select')} >
                                                      {option.label}
                                                </span>
                                          </div>
                                    </>
                              }}  />}
                        />
                  </FieldLayout>
            </>
      )
}

const Checkbox = ({ error, label, register ,required, name, ...checkboxProps }) => {
      return (
            <>
                  <FieldLayout error={error} required={required}>
                        <label className={cg('field','checkbox')}>
                              <input {...register(name)} name={name} id={name} type='checkbox' value='' className={cg('checkbox', 'field', 'checkbox checkbox-accent')} />
                              <span className={cg('label')}>{label}</span>
                        </label>
                  </FieldLayout>
            </>
      )
}

const Textarea = ({ error, label, register, required,name, ...textareaProps }) => {
      return (
            <>
                  <FieldLayout error={error} label={label} required={required} >
                        <textarea {...{...textareaProps ,...register(name)}} className={cg(`input state_${!!error ? 'error' : 'valid'}`, 'field')}/>
                  </FieldLayout>
            </>      
      )
}

const Form = {
      Input,
      Select,
      Checkbox,
      Textarea
} as const;

export type NameForm = keyof typeof Form;



export default Form;