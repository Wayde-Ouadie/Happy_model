// global resources
import React from "react";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import Stage4Style from "./Stage4.module.scss";
const cg = StyleNameGestion(Stage4Style);

const Svg1 = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 51 767"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.0845 766.724C11.2774 766.724 0.0844774 755.531 0.0844406 741.724L0.0825195 25.293C0.0824827 11.4859 11.2753 0.292996 25.0825 0.292969C38.8896 0.292941 50.0825 11.4858 50.0825 25.2929L50.0844 741.724C50.0845 755.531 38.8916 766.724 25.0845 766.724Z"
          fill="url(#paint0_linear_1641_3240)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1641_3240"
            x1="25.0846"
            y1="732.091"
            x2="25.0846"
            y2="510.278"
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
const Svg2 = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 174 1022"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M168.638 1011.51C160.393 1022.59 144.731 1024.88 133.656 1016.64C111.729 1000.31 87.3251 982.009 63.8379 959.865C15.2579 914.063 0.0836281 847.983 0.0836182 787.548L0.0836324 25.2734C0.0836184 11.4663 11.2765 0.273436 25.0836 0.273438C38.8907 0.273439 50.0836 11.4663 50.0836 25.2734V787.548C50.0836 841.184 63.7184 891.033 98.1377 923.484C119.258 943.397 141.494 960.139 163.513 976.531C174.588 984.775 176.883 1000.44 168.638 1011.51Z"
          fill="url(#paint0_linear_1641_3239)"
        />
        <path
          d="M133.656 1016.64C144.731 1024.88 160.393 1022.59 168.638 1011.51C176.883 1000.44 174.588 984.775 163.513 976.531C141.494 960.139 119.258 943.397 98.1377 923.484C77.7373 904.251 64.6384 878.905 57.3524 850.281L54.1534 835.525L51.7363 818.798L50.0836 787.548V688.316V171.688C50.0836 157.881 38.8907 146.688 25.0836 146.688C11.2765 146.688 0.0836285 157.881 0.0836272 171.688L0.0836406 789.562L1.88865 821.625L6.09326 850.281C14.3074 890.67 31.8149 929.673 63.8379 959.865C87.3251 982.009 111.729 1000.31 133.656 1016.64Z"
          fill="url(#paint1_radial_1641_3239)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1641_3239"
            x1="144.336"
            y1="1051.6"
            x2="50.4002"
            y2="780.984"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0C68BD" />
            <stop offset="1" stopColor="#1EB1F7" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_1641_3239"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(23.8824 755.313) rotate(90) scale(81.3228 280.283)"
          >
            <stop stopColor="#141D3A" stopOpacity="0.55" />
            <stop offset="1" stopColor="#141D3A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};
const Svg3 = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 332 1270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.204 1112.41C223.847 1114.78 222.523 1117.19 220.288 1118.21C192.97 1130.64 173.978 1158.18 173.978 1190.15C173.978 1233.78 209.347 1269.15 252.976 1269.15C296.605 1269.15 331.973 1233.78 331.973 1190.15C331.973 1157.41 312.057 1129.32 283.679 1117.34C278.272 1115.06 274.099 1110.4 272.8 1104.68C263.3 1062.81 235.548 1033.55 205.151 1008.5C192.861 998.369 179.277 988.262 165.735 978.186L165.723 978.177C161.152 974.776 156.585 971.378 152.076 967.984C133.813 954.242 115.562 939.915 98.1476 923.497C63.7267 891.047 50.084 841.186 50.084 787.552L50.0841 25.418C50.0841 11.6108 38.8912 0.41797 25.0841 0.417969C11.2769 0.417968 0.0840546 11.6108 0.0840533 25.418L0.0839844 787.552C0.0839791 847.989 15.2679 914.079 63.8489 959.879C83.2996 978.216 103.302 993.858 122.012 1007.94C127.071 1011.74 131.978 1015.39 136.743 1018.94L136.744 1018.94C149.969 1028.78 162.1 1037.81 173.351 1047.08C199.838 1068.91 216.694 1088.42 223.204 1112.41ZM223.978 1190.15C223.978 1174.13 236.961 1161.15 252.976 1161.15C268.991 1161.15 281.973 1174.13 281.973 1190.15C281.973 1206.16 268.991 1219.15 252.976 1219.15C236.961 1219.15 223.978 1206.16 223.978 1190.15Z"
          fill="#E2005C"
        />
        <path
          d="M198.825 1070.77L229.872 1030.87C222.075 1022.95 213.718 1015.56 205.151 1008.5C192.861 998.367 179.277 988.26 165.735 978.184L165.722 978.174L165.714 978.168C163.996 976.89 162.279 975.612 160.565 974.335L129.854 1013.81C132.182 1015.54 134.476 1017.25 136.738 1018.94L136.743 1018.94L136.744 1018.94L136.746 1018.94C149.969 1028.78 162.101 1037.81 173.351 1047.08C183.181 1055.18 191.684 1062.96 198.825 1070.77Z"
          fill="url(#paint0_radial_1641_3238)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1641_3238"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(126.845 979.202) rotate(40.1089) scale(111.872 194.358)"
          >
            <stop stopColor="#141D3A" />
            <stop offset="1" stopColor="#141D3A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

const Svg1Mobile = () => {
  return (
    <>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 51 767" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.4976 766.942C39.3048 766.942 50.4977 755.75 50.4977 741.942L50.4996 25.5118C50.4997 11.7046 39.3068 0.511746 25.4997 0.511719C11.6926 0.511691 0.499672 11.7045 0.499634 25.5117L0.497711 741.942C0.497673 755.749 11.6905 766.942 25.4976 766.942Z" fill="url(#paint0_linear_1663_3257)" />
        <defs>
          <linearGradient id="paint0_linear_1663_3257" x1="25.4975" y1="732.31" x2="25.4975" y2="0.511719" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DEE200" />
            <stop offset="1" stopColor="#BD0C21" />
          </linearGradient>
        </defs>
      </svg>

    </>
  )
}

const Svg2Mobile = () => {
  return (
    <>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 175 1022" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.94467 1011.74C14.1893 1022.82 29.8513 1025.11 40.9265 1016.87C62.854 1000.54 87.2575 982.239 110.745 960.095C159.325 914.293 174.499 848.213 174.499 787.778L174.499 25.5039C174.499 11.6968 163.306 0.503905 149.499 0.503906C135.692 0.503907 124.499 11.6968 124.499 25.5039V787.778C124.499 841.414 110.864 891.264 76.4449 923.715C55.3246 943.627 33.089 960.37 11.07 976.761C-0.00531006 985.006 -2.29999 1000.67 5.94467 1011.74Z" fill="url(#paint0_linear_1663_3256)" />
        <path d="M40.9265 1016.87C29.8513 1025.11 14.1893 1022.82 5.94467 1011.74C-2.29999 1000.67 -0.00531006 985.006 11.07 976.761C33.089 960.37 55.3246 943.627 76.4449 923.715C96.8453 904.481 109.944 879.135 117.23 850.511L120.429 835.755L122.846 819.028L124.499 787.778V688.547V171.918C124.499 158.111 135.692 146.918 149.499 146.918C163.306 146.918 174.499 158.111 174.499 171.918L174.499 789.793L172.694 821.856L168.489 850.511C160.275 890.901 142.768 929.903 110.745 960.095C87.2575 982.239 62.854 1000.54 40.9265 1016.87Z" fill="url(#paint1_radial_1663_3256)" />
        <defs>
          <linearGradient id="paint0_linear_1663_3256" x1="30.2466" y1="1051.83" x2="124.182" y2="781.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0C68BD" />
            <stop offset="1" stopColor="#1EB1F7" />
          </linearGradient>
          <radialGradient id="paint1_radial_1663_3256" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150.7 755.543) rotate(90) scale(81.3228 280.283)">
            <stop stopColor="#141D3A" stopOpacity="0.55" />
            <stop offset="1" stopColor="#141D3A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

    </>
  )
}

const Svg3Mobile = () => {
  return (
    <>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 333 1270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M109.379 1112.66C108.736 1115.03 110.06 1117.44 112.296 1118.46C139.613 1130.89 158.605 1158.43 158.605 1190.4C158.605 1234.03 123.237 1269.4 79.6075 1269.4C35.9785 1269.4 0.610138 1234.03 0.610138 1190.4C0.610138 1157.66 20.5263 1129.57 48.9041 1117.59C54.3109 1115.31 58.4847 1110.65 59.7833 1104.93C69.2829 1063.06 97.0349 1033.8 127.432 1008.75C139.723 998.619 153.307 988.512 166.849 978.436L166.861 978.427C171.432 975.026 175.998 971.628 180.508 968.234C198.77 954.492 217.021 940.165 234.436 923.747C268.857 891.297 282.499 841.436 282.499 787.802L282.499 25.668C282.499 11.8608 293.692 0.66797 307.499 0.667969C321.306 0.667968 332.499 11.8608 332.499 25.668L332.499 787.802C332.499 848.239 317.315 914.329 268.734 960.129C249.284 978.466 229.282 994.108 210.571 1008.19C205.512 1011.99 200.605 1015.64 195.84 1019.19L195.839 1019.19C182.615 1029.03 170.483 1038.06 159.232 1047.33C132.746 1069.16 115.889 1088.67 109.379 1112.66ZM108.605 1190.4C108.605 1174.38 95.6223 1161.4 79.6075 1161.4C63.5927 1161.4 50.6101 1174.38 50.6101 1190.4C50.6101 1206.41 63.5927 1219.4 79.6075 1219.4C95.6223 1219.4 108.605 1206.41 108.605 1190.4Z" fill="#E2005C" />
        <path d="M133.759 1071.02L102.711 1031.12C110.508 1023.2 118.865 1015.81 127.432 1008.75C139.722 998.617 153.307 988.51 166.848 978.434L166.862 978.424L166.869 978.418C168.587 977.14 170.304 975.862 172.018 974.585L202.729 1014.06C200.402 1015.79 198.107 1017.5 195.845 1019.19L195.84 1019.19L195.839 1019.19L195.838 1019.19C182.614 1029.03 170.482 1038.06 159.232 1047.33C149.402 1055.43 140.899 1063.21 133.759 1071.02Z" fill="url(#paint0_radial_1663_3255)" fillOpacity="0.5" />
        <defs>
          <radialGradient id="paint0_radial_1663_3255" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205.738 979.452) rotate(139.891) scale(111.872 194.358)">
            <stop stopColor="#141D3A" />
            <stop offset="1" stopColor="#141D3A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

    </>
  )
}

const Stage4 = ({ calculDimensionSvg, screen }) => {
  return (<>
    {
      screen == 'laptop' ? <Stage4Laptop calculDimensionSvg={calculDimensionSvg}/> : <Stage4Mobile calculDimensionSvg={calculDimensionSvg}/>
    }
  </>)
}


const Stage4Laptop = ({ calculDimensionSvg }) => {
  const { width: widthSvg1, height: heightSvg1 } = calculDimensionSvg(52, 767);
  const { width: widthSvg2, height: heightSvg2 } = calculDimensionSvg(
    177,
    1023
  );
  const { width: widthSvg3, height: heightSvg3 } = calculDimensionSvg(
    332,
    1269
  );

  return (
    <>
      <div
        className={cg("image")}
        style={{ width: `${widthSvg1}px`, height: `${heightSvg1}px` }}
      >
        <Svg1 />
      </div>
      <div
        className={cg("image")}
        style={{ width: `${widthSvg2}px`, height: `${heightSvg2}px` }}
      >
        <Svg2 />
      </div>
      <div
        className={cg("image")}
        style={{ width: `${widthSvg3}px`, height: `${heightSvg3}px` }}
      >
        <Svg3 />
      </div>
    </>
  );
};
const Stage4Mobile = ({ calculDimensionSvg }) => {
  const { width: widthSvg1, height: heightSvg1 } = calculDimensionSvg(52, 767);
  const { width: widthSvg2, height: heightSvg2 } = calculDimensionSvg(
    177,
    1023
  );
  const { width: widthSvg3, height: heightSvg3 } = calculDimensionSvg(
    332,
    1270
  );

  return (
    <>
      <div
        className={cg("image")}
        style={{ width: `${widthSvg1}px`, height: `${heightSvg1}px` }}
      >
        <Svg1Mobile />
      </div>
      <div
        className={cg("image")}
        style={{ width: `${widthSvg2}px`, height: `${heightSvg2}px` }}
      >
        <Svg2Mobile />
      </div>
      <div
        className={cg("image")}
        style={{ width: `${widthSvg3}px`, height: `${heightSvg3}px` }}
      >
        <Svg3Mobile />
      </div>
    </>
  );
}
export default Stage4;
