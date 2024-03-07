type TObject<T> = {
      [key: string]: T;
}

export const filterObject = <T>(object: TObject<T>, filter: (value:  T) => boolean) => {
      const res = new Object();
      Object.entries(object).map(([key, value]) => ({...value, key})).filter(filter).map(elem => ({...elem})).map(elem => res[elem.key] = {...elem });
      return res;
}

