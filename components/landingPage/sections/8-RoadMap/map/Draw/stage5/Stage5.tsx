// global resources
import React from "react";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import Stage5Style from "./Stage5.module.scss";
const cg = StyleNameGestion(Stage5Style);

const Stage5 = ({ calculDimensionSvg, screen }) => {
  return screen == 'laptop' ? <Stage5Laptop calculDimensionSvg={calculDimensionSvg}/> : <Stage5Mobile calculDimensionSvg={calculDimensionSvg} />
}

const Stage5Mobile = ({ calculDimensionSvg }) => {
  const { width: width1, height: height1 } = calculDimensionSvg(51, 507);
  const { width: width2, height: height2 } = calculDimensionSvg(51, 204);

  const { width: width3, height: height3 } = calculDimensionSvg(160, 717);


  return (
    <>
      <div className={cg("image")} style={{ width: `${width1}px`, height: `${height1}px` }}>
        <Svg1Mobile />
      </div>
      <div className={cg("image")} style={{ width: `${width2}px`, height: `${height2}px` }}>
        <ShadowMobile />
      </div>
      <div className={cg("image")} style={{ width: `${width3}px`, height: `${height3}px` }}>
        <Svg2Mobile />
      </div>
    </>
  );
}

const Stage5Laptop = ({ calculDimensionSvg }) => {
  const { width: width1, height: height1 } = calculDimensionSvg(52, 507);
  const { width: width2, height: height2 } = calculDimensionSvg(52, 204);

  const { width: width3, height: height3 } = calculDimensionSvg(159, 570);


  return (
    <>
      <div className={cg("image")} style={{ width: `${width1}px`, height: `${height1}px` }}>
        <Svg1 />
      </div>
      <div className={cg("image")} style={{ width: `${width2}px`, height: `${height2}px` }}>
        <Shadow />
      </div>
      <div className={cg("image")} style={{ width: `${width3}px`, height: `${height3}px` }}>
        <Svg2 />
      </div>
    </>
  );
};

const Svg1Mobile = () => {
  return (
    <>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 51 507" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5005 481.614L25.5005 25.9414" stroke="url(#paint0_linear_1663_3265)" strokeWidth="50" strokeLinecap="round"/>
<defs>
<linearGradient id="paint0_linear_1663_3265" x1="25.5005" y1="481.613" x2="25.5006" y2="-26.1784" gradientUnits="userSpaceOnUse">
<stop stopColor="#DEE200"/>
<stop offset="1" stopColor="#BD0C21"/>
</linearGradient>
</defs>
</svg>

    </>
  )
}

const ShadowMobile = () => {
  return (
    <>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 51 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" d="M25.5007 178.793L25.4997 25.2353" stroke="url(#paint0_radial_1663_3260)" strokeOpacity="0.8" strokeWidth="50" strokeLinecap="round"/>
<defs>
<radialGradient id="paint0_radial_1663_3260" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.4997 206.191) rotate(-90) scale(201.345 991.109)">
<stop stopColor="#141D3A" stopOpacity="0"/>
<stop offset="1" stopColor="#141D3A"/>
</radialGradient>
</defs>
</svg>

    </>
  )
}

const Svg2Mobile = () => {
  return (
    <>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 159 719" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M46.5031 639.706C46.5031 621.168 59.9628 605.708 79.5004 605.708C99.0381 605.708 112.498 620.168 112.498 639.706C112.498 659.243 101.038 672.703 79.5004 672.703C57.9628 672.703 46.5031 658.243 46.5031 639.706ZM54.5003 560.709C54.5003 562.987 53.2112 565.153 51.0861 565.973C21.4961 577.383 0.503062 606.093 0.503059 639.706C0.503055 683.335 35.8714 718.703 79.5004 718.703C123.129 718.703 158.498 683.335 158.498 639.706C158.498 606.093 137.505 577.383 107.914 565.972C105.789 565.153 104.5 562.987 104.5 560.709L104.5 24.999C104.5 11.1919 93.3075 -0.000982262 79.5004 -0.000983469C65.6933 -0.000984676 54.5004 11.1919 54.5004 24.999L54.5003 560.709Z" fill="url(#paint0_linear_1663_3259)"/>
<defs>
<linearGradient id="paint0_linear_1663_3259" x1="79.5004" y1="568.703" x2="79.5005" y2="-314.787" gradientUnits="userSpaceOnUse">
<stop stopColor="#E2005C"/>
<stop offset="1" stopColor="#FF0606"/>
</linearGradient>
</defs>
</svg>

    </>
  )
}

const Svg1 = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 51 507"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.9791 481.574L25.9791 25.9016"
          stroke="url(#paint0_linear_1626_3715)"
          strokeWidth="50"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1626_3715"
            x1="25.9791"
            y1="481.574"
            x2="25.9792"
            y2="-26.2175"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DEE200" />
            <stop offset="1" stopColor="#BD0C21" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const Shadow = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 51 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M25.9794 178.754L25.9783 25.1962"
          stroke="url(#paint0_radial_1626_3714)"
          strokeWidth="50"
          strokeLinecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1626_3714"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25.9784 206.152) rotate(-90) scale(201.345 991.109)"
          >
            <stop stopColor="#141D3A" stopOpacity="0" />
            <stop offset="1" stopColor="#141D3A" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

const Svg2 = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 159 570"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.9817 490.667C46.9817 472.129 60.4414 456.669 79.9791 456.669C99.5167 456.669 112.976 471.129 112.976 490.667C112.976 510.204 101.517 523.664 79.9791 523.664C58.4414 523.664 46.9817 509.204 46.9817 490.667ZM54.9789 411.67C54.9789 413.948 53.6899 416.114 51.5647 416.934C21.9747 428.344 0.981699 457.054 0.981696 490.667C0.981693 534.296 36.35 569.664 79.9791 569.664C123.608 569.664 158.976 534.296 158.976 490.667C158.976 457.054 137.983 428.344 108.393 416.933C106.268 416.114 104.979 413.948 104.979 411.67V411.67L104.979 25.96C104.979 12.1528 93.7861 0.959955 79.979 0.959954C66.1719 0.959953 54.979 12.1528 54.979 25.96L54.9789 411.67V411.67Z"
          fill="url(#paint0_linear_1626_3713)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1626_3713"
            x1="79.9791"
            y1="569.664"
            x2="79.9791"
            y2="-313.826"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E2005C" />
            <stop offset="1" stopColor="#FF0606" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Stage5;
