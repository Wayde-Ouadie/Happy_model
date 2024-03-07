import { string, object, mixed, boolean, number } from 'yup';
import { TError } from 'locales/en';

export enum FORM_INPUT {
      TWITTER_HANDLE= 'twitter handle',
      DISCORD_HANDLE= 'discord handle',
      WALLET_ADDRESS= 'wallet address',
      EMAIL= 'email',
      PACK= 'pack',
      ADDITIONAL_INFO= 'additional info',
      EMAIL_ME= 'email me',
}


export enum PACK {
      PACK_1= 'pack 1',
      PACK_2= 'pack 2',
      PACK_3= 'pack 3',
}



const arrayPackName :() => PACK[] = () => Object.keys(PACK).map((pack) => PACK[pack])
export interface IFormInput {
            [FORM_INPUT.TWITTER_HANDLE]: string,
            [FORM_INPUT.DISCORD_HANDLE]: string,
            [FORM_INPUT.WALLET_ADDRESS]: string,
            [FORM_INPUT.EMAIL]: string,
            [FORM_INPUT.PACK]: {key: PACK, label: PACK, value: PACK, data: TEggValue},
            [FORM_INPUT.ADDITIONAL_INFO]: string,
            [FORM_INPUT.EMAIL_ME]: boolean
}

export const initRegister: IFormInput = {
            [FORM_INPUT.TWITTER_HANDLE]: '',
            [FORM_INPUT.DISCORD_HANDLE]: '',
            [FORM_INPUT.WALLET_ADDRESS]: '',
            [FORM_INPUT.EMAIL]: '', 
            [FORM_INPUT.PACK]: {key: PACK.PACK_1, label: PACK.PACK_1, value: PACK.PACK_1, data: null}, 
            [FORM_INPUT.ADDITIONAL_INFO]: '', // text code
            [FORM_INPUT.EMAIL_ME]: false,
}
// https://airtable.com/shrwdBiWGHy31xEqe
export const validatorRegister = (errors: TError) => object({
      [FORM_INPUT.TWITTER_HANDLE]: string().required(errors[FORM_INPUT.TWITTER_HANDLE].required).matches(/^@?(\w){1,15}$/, errors[FORM_INPUT.TWITTER_HANDLE].matches),
      [FORM_INPUT.DISCORD_HANDLE]: string().required(errors[FORM_INPUT.DISCORD_HANDLE].required).matches(/^.{3,32}#[0-9]{4}$/, errors[FORM_INPUT.DISCORD_HANDLE].matches),
      [FORM_INPUT.WALLET_ADDRESS]: string().required(errors[FORM_INPUT.WALLET_ADDRESS].required).matches(/^0x[a-fA-F0-9]{40}$/g, errors[FORM_INPUT.WALLET_ADDRESS].matches),
      [FORM_INPUT.EMAIL]: string().required(errors[FORM_INPUT.EMAIL].required).email(errors[FORM_INPUT.EMAIL].email),
      [FORM_INPUT.PACK]: object({
            key: string(),
            label: string(),
            value: string(),
            data: object(),
      }).notRequired(),
      [FORM_INPUT.ADDITIONAL_INFO]: string().notRequired(),
      [FORM_INPUT.EMAIL_ME]: boolean().required().default(false)
})

import type { NameForm } from 'components/uiKits';

type TQuestionInput = {
      name: FORM_INPUT,
      component: 'Input',
      type?: 'text' | 'color' | 'date' | 'email' | 'tel' | 'url' | 'number' | 'textarea'
}

export type TOptionSelectPack = {
      key: PACK,
      value: string,
      label: string,
      data: TEggValue,
}
type TQuestionSelect = {
      name: FORM_INPUT,
      component: 'Select',
      defaultOption: PACK,
      options: (content: object) => TOptionSelectPack[]
}
type TQuestionCheckbox = {
      name: FORM_INPUT,
      component: 'Checkbox'
}
type TQuestionTextarea = {
      name:FORM_INPUT,
      component: 'Textarea'
}

import { getEggByPack, TEggValue } from 'lib/db/egg'

export const questions: (TQuestionInput | TQuestionSelect | TQuestionCheckbox | TQuestionTextarea)[] = [{
      name: FORM_INPUT.TWITTER_HANDLE,
      component: 'Input',
      type: 'text',
}, {
      name: FORM_INPUT.DISCORD_HANDLE,
      component: 'Input',
      type: 'text',
}, {
      name: FORM_INPUT.WALLET_ADDRESS,
      component: 'Input',
      type: 'text',
}, {
      name: FORM_INPUT.EMAIL,
      component: 'Input',
      type: 'email',
}, {
      name: FORM_INPUT.PACK,
      component: 'Select',
      defaultOption: PACK.PACK_1,
      options: (content) => Object.keys(content).map((key: PACK) => ({ key: PACK.PACK_1 ,value: content[key] as string, label: content[key] as string, data: getEggByPack(key) })),
}, {
      name: FORM_INPUT.ADDITIONAL_INFO,
      component: 'Textarea',
}, {
      name: FORM_INPUT.EMAIL_ME,
      component: 'Checkbox',
}]

