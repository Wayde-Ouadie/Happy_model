
import React from 'react';
import { useRouter } from 'next/router';

import content, { TLangs } from "@i18n";

export default function useI18n(section = null): TLangs['en']{
    const router = useRouter();
    const { locale } = router;
    if(section){
        return content[locale].sections[section];
    }
    return content[locale];
}