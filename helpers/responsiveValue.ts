
export const responsiveGestion = (dimension) => {
      const w = dimension.width;
      return (resp: { [key: number]: | string | number }[], unity: string = null): string | number => {
        const value = resp.find((d) => w > Object.keys(d)[0]);
        const response: number = value[Object.keys(value)[0]];
        return unity ? `${response}${unity}` : response;
      };
    };