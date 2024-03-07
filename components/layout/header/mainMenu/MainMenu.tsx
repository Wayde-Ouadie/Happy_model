
import { useContext} from 'react';

import { useGoToItemLink } from 'helpers/hooks';


// style
import StyleNameGestion from "helpers/ClassNameCreator";
import HeaderStyle from "../Header.module.scss";
const cg = StyleNameGestion(HeaderStyle);

import { mainMenuItems, home } from "lib/conf/route";
import { SectionContext } from 'pages/_app';
import { rollToTop, rollToDown } from "lib/animation";


const MainMenu = ({ content }) => {

      const { linker } = useGoToItemLink();
      const { section } = useContext(SectionContext);
      return (
        <>
          <ul className={cg("items", "nav")}>
            {mainMenuItems.map(([key, value]) => (
              <li
                key={key}
                onMouseEnter={(e) => rollToTop(e)}
                onMouseOut={(e) => rollToDown(e)}
                onClick={() => linker({ page: value.page, offsetTop: section(value.id)  })}
                className={cg("item")}
              >
                {content[key]}
              </li>
            ))}
          </ul>
        </>
      );
    };

export default MainMenu;