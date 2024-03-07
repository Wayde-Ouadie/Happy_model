// global resources
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Select from 'react-select';
import Image from 'next/image';


// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import SelectLangStyle from './SelectLang.module.scss'
const cg = StyleNameGestion(SelectLangStyle);

import { useI18n } from 'helpers/hooks';
import colors from 'lib/identity/colors';


const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? colors.light_grey_1 : colors.dark_1,
        border: 'none',
        fontSize: '0.9rem',
    }),
    control: (provided) => ({
        ...provided,
        color: colors.dark_1,
        border: 'none',
        backgroundColor: 'none',
        fontSize: '0.9rem',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: colors.light_3,
        border: 'none'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: colors.light_3,
        padding: 0,
        margin: 0,
        width: '18px',
        border: 'none'
    })
}


const SelectLang = ({ type }: { type: 'large' | 'small' }) => {
    const [defaultOption, setDefaultOption] = useState(null);
    const { lang: { list: [fr, en] } } = useI18n();

    const router = useRouter();
    const { locale } = router;
    const changeLanguage = (e) => {
        const locale = e.value;
        router.push('/', '/', { locale });
    }

    const options = [
        {
            value: en.extension,
            label: type == 'large' ? en.title : en.shortTitle
        }
    ]
    useEffect(() => {
        const defaultValue = options.find(lang => lang.value == locale);
        setDefaultOption(defaultValue);
    }, []);
    if (!defaultOption) return <></>
    return (
        <>
            <span className={cg('container', 'flagSelector')} >
                <Select components={{ IndicatorSeparator: () => null }} styles={customStyles} onChange={changeLanguage} isSearchable={false} defaultValue={defaultOption} options={options} formatOptionLabel={({ value, label }) => {
                    return <>
                        <div className={cg(`flag ${type}`, 'container')}>
                            {type == 'large' ? <p className={cg('flag', 'label')}>{label}</p> : null}
                            {type ? <div className={cg('flag', 'content')}>
                                <Image priority src={`/flag/${value}.svg`} alt={`flag_${label}`} width='8' height='8' layout='responsive' />
                            </div> : null}
                        </div>
                    </>
                }} />
            </span>
        </>
    )
}

export default SelectLang;