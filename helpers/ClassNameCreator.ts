interface Style {
      readonly [key: string]: string;
    }
    
    const styleClasseesNameGenerator = (style: Style) => {
      return (classes: string, type?: string, otherClasses?: string): string => {
        const multipleClass = (multipleClass: string[], type?: string) => {
          const TYPE = type ? type : null;
          let listClasses = new Array(...multipleClass);
          if(TYPE){
            listClasses.push(TYPE);
          }
          return listClasses.map((className: string) => {
            if(className == TYPE || !TYPE){
              return style[className];
            }
            const CLASS_NAME = className ? "_" + className : "";
            return style[TYPE + CLASS_NAME];
          });
        }
        
        const listClasses: string[] = classes.split(" ");
        const classesGenerate = !!type ? multipleClass(listClasses, type) : multipleClass(listClasses);
        const OTHER_CLASSES = !!otherClasses ? ' ' + otherClasses : '';
        return classesGenerate.join(" ").trim() + OTHER_CLASSES;
      }
    }
    
    export default styleClasseesNameGenerator;