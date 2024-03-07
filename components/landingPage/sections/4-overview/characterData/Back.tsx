import colors from "lib/identity/colors";
import { COLORS } from "lib/db";
import { useEffect, useState } from "react";
import Animation from "../Animation";

const SvgBack2xl = ({ mainColor, secondaryColor }) => {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1314 343"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1437_7448"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="2"
        width="1314"
        height="340"
      >
        <path
          d="M0.354248 62.4991C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V244.663C1314 277.089 1288.24 303.648 1255.83 304.635L62.1804 340.981C28.3435 342.011 0.354248 314.861 0.354248 281.009V62.4991Z"
          fill={mainColor}
        />
      </mask>
      <g mask="url(#mask0_1437_7448)">
        <path
          d="M0.354248 62.4991C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V244.663C1314 277.089 1288.24 303.648 1255.83 304.635L62.1804 340.981C28.3435 342.011 0.354248 314.861 0.354248 281.009V62.4991Z"
          fill={mainColor}
        />
        <path
          d="M62.5983 3.54173L1256.24 48.9743C1287.93 50.1804 1313 76.22 1313 107.932V244.663C1313 276.548 1287.67 302.665 1255.8 303.635L62.15 339.981C28.877 340.995 1.35425 314.297 1.35425 281.009V62.4991C1.35425 29.0342 29.1576 2.26891 62.5983 3.54173Z"
          stroke="url(#paint0_linear_1437_7448)"
          strokeWidth="2"
        />
        <g filter="url(#filter0_f_1437_7448)">
          <ellipse
            rx="206.865"
            ry="177.949"
            transform="matrix(1 0 0 -1 30.9243 10.3516)"
            fill={secondaryColor}
            fillOpacity="0.2"
          />
        </g>
        <g filter="url(#filter1_f_1437_7448)">
          <ellipse
            rx="206.865"
            ry="177.949"
            transform="matrix(1 0 0 -1 1212.07 292.473)"
            fill={secondaryColor}
            fillOpacity="0.2"
          />
        </g>
        <g filter="url(#filter2_f_1437_7448)">
          <ellipse
            rx="206.865"
            ry="177.949"
            transform="matrix(1 0 0 -1 1321.96 18.2344)"
            fill={secondaryColor}
            fillOpacity="0.12"
          />
        </g>
        <g filter="url(#filter3_f_1437_7448)">
          <ellipse
            rx="206.865"
            ry="177.949"
            transform="matrix(1 0 0 -1 1124.69 15.7266)"
            fill={secondaryColor}
            fillOpacity="0.2"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_1437_7448"
          x="-295.941"
          y="-287.598"
          width="653.73"
          height="595.898"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="60"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <filter
          id="filter1_f_1437_7448"
          x="923.438"
          y="32.7534"
          width="577.27"
          height="519.438"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40.885"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <filter
          id="filter2_f_1437_7448"
          x="945.098"
          y="-329.715"
          width="753.73"
          height="695.898"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="85"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <filter
          id="filter3_f_1437_7448"
          x="747.821"
          y="-332.223"
          width="753.73"
          height="695.898"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="85"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1437_7448"
          x1="-276.172"
          y1="-132.957"
          x2="1639.49"
          y2="683.341"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.500947" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SvgBackXl = ({ mainColor, secondaryColor }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1313.65 414.33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1437_7448"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="2"
          width="1314"
          height="411"
        >
          <path
            d="M0.354248 62.4991C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V316.304C1314 348.73 1288.24 375.29 1255.83 376.277L62.1804 412.623C28.3435 413.653 0.354248 386.503 0.354248 352.65V62.4991Z"
            fill={mainColor}
          />
        </mask>
        <g mask="url(#mask0_1437_7448)">
          <path
            d="M0.354248 62.4991C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V316.242C1314 348.668 1288.24 375.227 1255.83 376.214L62.1804 412.56C28.3435 413.59 0.354248 386.441 0.354248 352.588V62.4991Z"
            fill={mainColor}
          />
          <path
            d="M62.5983 3.54173L1256.24 48.9743C1287.93 50.1804 1313 76.22 1313 107.932L1313 316.428C1313 348.314 1287.67 374.43 1255.8 375.401L62.1499 411.747C28.877 412.76 1.35425 386.063 1.35425 352.774V62.499C1.35425 29.0342 29.1576 2.26891 62.5983 3.54173Z"
            stroke="url(#paint0_linear_1437_7448)"
            strokeWidth="2"
          />
          <g filter="url(#filter0_f_1437_7448)">
            <ellipse
              rx="213.117"
              ry="205.281"
              transform="matrix(1 0 0 -1 37.1758 37.6836)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter1_f_1437_7448)">
            <ellipse
              rx="217.861"
              ry="213.223"
              transform="matrix(1 0 0 -1 1190.14 370.031)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter2_f_1437_7448)">
            <ellipse
              rx="215.954"
              ry="207.381"
              transform="matrix(1 0 0 -1 1314 102.033)"
              fill={secondaryColor}
              fillOpacity="0.12"
            />
          </g>
          <g filter="url(#filter3_f_1437_7448)">
            <ellipse
              rx="214.923"
              ry="213.668"
              transform="matrix(1 0 0 -1 1132.74 51.4453)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1437_7448"
            x="-295.941"
            y="-287.598"
            width="666.233"
            height="650.562"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="60"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter1_f_1437_7448"
            x="890.508"
            y="75.0386"
            width="599.262"
            height="589.985"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40.885"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter2_f_1437_7448"
            x="928.046"
            y="-275.348"
            width="771.908"
            height="754.762"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter3_f_1437_7448"
            x="747.821"
            y="-332.223"
            width="769.846"
            height="767.336"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1437_7448"
            x1="-276.172"
            y1="-132.957"
            x2="1639.49"
            y2="683.34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.500947" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const SvgBackLg = ({ mainColor, secondaryColor }) => {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1314 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1437_7448"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="2"
        width="1314"
        height="475"
      >
        <path
          d="M0.354248 62.4991C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V380.557C1314 412.983 1288.24 439.542 1255.83 440.529L62.1804 476.875C28.3435 477.905 0.354248 450.756 0.354248 416.903V62.4991Z"
          fill={mainColor}
        />
      </mask>
      <g mask="url(#mask0_1437_7448)">
        <path
          d="M0.354248 62.499C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V381.922C1314 414.348 1288.24 440.908 1255.83 441.894L62.1804 478.241C28.3435 479.271 0.354248 452.121 0.354248 418.268V62.499Z"
          fill={mainColor}
        />
        <path
          d="M62.5983 3.54173L1256.24 48.9743C1287.93 50.1804 1313 76.22 1313 107.932L1313 380.681C1313 412.566 1287.67 438.683 1255.8 439.653L62.1499 476C28.877 477.013 1.35425 450.315 1.35425 417.027V62.499C1.35425 29.0341 29.1576 2.26891 62.5983 3.54173Z"
          stroke="url(#paint0_linear_1437_7448)"
          strokeWidth="2"
        />
        <g filter="url(#filter0_f_1437_7448)">
          <ellipse
            rx="213.117"
            ry="205.281"
            transform="matrix(1 0 0 -1 37.1758 37.6836)"
            fill={secondaryColor}
            fillOpacity="0.2"
          />
        </g>
        <g filter="url(#filter1_f_1437_7448)">
          <ellipse
            rx="217.861"
            ry="213.223"
            transform="matrix(1 0 0 -1 1220.14 400.031)"
            fill={secondaryColor}
            fillOpacity="0.2"
          />
        </g>
        <g filter="url(#filter2_f_1437_7448)">
          <ellipse
            rx="215.954"
            ry="207.381"
            transform="matrix(1 0 0 -1 1314 102.033)"
            fill={secondaryColor}
            fillOpacity="0.12"
          />
        </g>
        <g filter="url(#filter3_f_1437_7448)">
          <ellipse
            rx="214.923"
            ry="213.668"
            transform="matrix(1 0 0 -1 1132.74 51.4453)"
            fill={secondaryColor}
            fillOpacity="0.2"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_1437_7448"
          x="-295.941"
          y="-287.598"
          width="666.233"
          height="650.562"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="60"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <filter
          id="filter1_f_1437_7448"
          x="920.508"
          y="105.039"
          width="599.262"
          height="589.985"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="40.885"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <filter
          id="filter2_f_1437_7448"
          x="928.046"
          y="-275.348"
          width="771.908"
          height="754.762"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="85"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <filter
          id="filter3_f_1437_7448"
          x="747.821"
          y="-332.223"
          width="769.846"
          height="767.336"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="85"
            result="effect1_foregroundBlur_1437_7448"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1437_7448"
          x1="-276.172"
          y1="-132.957"
          x2="1639.49"
          y2="683.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.500947" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SvgBackMd = ({ mainColor, secondaryColor }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1314 936"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1437_7448"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="2"
          width="1314"
          height="932"
        >
          <path
            d="M0.354248 62.499C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V836.817C1314 869.243 1288.24 895.802 1255.83 896.789L62.1804 933.135C28.3435 934.165 0.354248 907.015 0.354248 873.163V62.499Z"
            fill={mainColor}
          />
        </mask>
        <g mask="url(#mask0_1437_7448)">
          <path
            d="M0.354248 62.499C0.354248 28.4669 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932V840.299C1314 872.725 1288.24 899.284 1255.83 900.271L62.1804 936.617C28.3435 937.648 0.354248 910.498 0.354248 876.645V62.499Z"
            fill={mainColor}
          />
          <path
            d="M62.5983 3.66283L1256.24 49.0954C1287.93 50.3015 1313 76.3411 1313 108.053L1313 836.696C1313 868.582 1287.67 894.698 1255.8 895.669L62.1499 932.015C28.877 933.028 1.35425 906.331 1.35425 873.042V62.6202C1.35425 29.1553 29.1576 2.39001 62.5983 3.66283Z"
            stroke="url(#paint0_linear_1437_7448)"
            strokeWidth="2"
          />
          <g filter="url(#filter0_f_1437_7448)">
            <ellipse
              rx="239.878"
              ry="231.059"
              transform="matrix(1 0 0 -1 63.937 63.4609)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter1_f_1437_7448)">
            <ellipse
              rx="234.359"
              ry="229.37"
              transform="matrix(1 0 0 -1 1198.69 805.454)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter2_f_1437_7448)">
            <ellipse
              rx="272.971"
              ry="262.135"
              transform="matrix(1 0 0 -1 1314 228.939)"
              fill={secondaryColor}
              fillOpacity="0.12"
            />
          </g>
          <g filter="url(#filter3_f_1437_7448)">
            <ellipse
              rx="230.064"
              ry="228.721"
              transform="matrix(1 0 0 -1 1094.22 50.873)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1437_7448"
            x="-295.941"
            y="-287.598"
            width="719.756"
            height="702.117"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="60"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter1_f_1437_7448"
            x="882.566"
            y="494.316"
            width="632.258"
            height="622.278"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40.885"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter2_f_1437_7448"
            x="871.029"
            y="-203.195"
            width="885.943"
            height="864.27"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter3_f_1437_7448"
            x="694.154"
            y="-347.848"
            width="800.128"
            height="797.441"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1437_7448"
            x1="-276.172"
            y1="-132.957"
            x2="1639.49"
            y2="683.341"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.500947" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const SvgBackSm = ({ mainColor, secondaryColor }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1314 1346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1437_7448"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="2"
          width="1315"
          height="1342"
        >
          <path
            d="M0.354248 62.4991C0.354248 28.467 28.6289 1.24806 62.6363 2.54246L1256.28 47.975C1288.51 49.2016 1314 75.6825 1314 107.932L1314 1246.92C1314 1279.34 1288.24 1305.9 1255.83 1306.89L62.1804 1343.24C28.3435 1344.27 0.354248 1317.12 0.354248 1283.26V62.4991Z"
            fill={mainColor}
          />
        </mask>
        <g mask="url(#mask0_1437_7448)">
          <path
            d="M0.422674 62.5675C0.385325 28.5095 28.6714 1.24968 62.7047 2.54506L1256.35 47.9776C1288.55 49.2031 1314.03 75.6419 1314.07 107.864L1315.41 1246.88C1315.44 1279.33 1289.67 1305.93 1257.23 1306.92L63.5876 1343.27C29.7765 1344.3 1.79856 1317.19 1.76146 1283.36L0.422674 62.5675Z"
            fill={mainColor}
          />
          <path
            d="M62.5983 3.66283L1256.24 49.0954C1287.93 50.3015 1313 76.341 1313 108.053L1313 1246.9C1313 1278.78 1287.67 1304.9 1255.8 1305.87L62.1499 1342.21C28.877 1343.23 1.35425 1316.53 1.35425 1283.24V62.6201C1.35425 29.1552 29.1576 2.39001 62.5983 3.66283Z"
            stroke="url(#paint0_linear_1437_7448)"
            strokeWidth="2"
          />
          <g filter="url(#filter0_f_1437_7448)">
            <ellipse
              rx="348.555"
              ry="335.74"
              transform="matrix(1 0 0 -1 122.555 63.4594)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter1_f_1437_7448)">
            <ellipse
              rx="283.776"
              ry="277.734"
              transform="matrix(1 0 0 -1 1169.07 1107.19)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter2_f_1437_7448)">
            <ellipse
              rx="306.506"
              ry="294.338"
              transform="matrix(1 0 0 -1 1281.57 333.928)"
              fill={secondaryColor}
              fillOpacity="0.12"
            />
          </g>
          <g filter="url(#filter3_f_1437_7448)">
            <ellipse
              rx="286.794"
              ry="285.12"
              transform="matrix(1 0 0 -1 1072.23 66.271)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1437_7448"
            x="-306"
            y="-352.281"
            width="857.11"
            height="831.48"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter1_f_1437_7448"
            x="805.297"
            y="749.457"
            width="727.552"
            height="715.469"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter2_f_1437_7448"
            x="805.067"
            y="-130.41"
            width="953.011"
            height="928.676"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter3_f_1437_7448"
            x="615.44"
            y="-388.848"
            width="913.588"
            height="910.238"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1437_7448"
            x1="-276.172"
            y1="-132.957"
            x2="1639.49"
            y2="683.341"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.500947" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const SvgBackXs = ({ mainColor, secondaryColor }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 813 1346"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1437_7448"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="3"
          width="813"
          height="1340"
        >
          <path
            d="M0.354248 63.9787C0.354248 29.3917 29.5189 1.96709 64.0405 4.09204L756.331 46.7055C787.977 48.6535 812.645 74.8866 812.645 106.592L812.645 1248C812.645 1279.99 787.547 1306.35 755.596 1307.93L63.3053 1342.02C29.0508 1343.7 0.354248 1316.39 0.354248 1282.09V63.9787Z"
            fill={mainColor}
          />
        </mask>
        <g mask="url(#mask0_1437_7448)">
          <path
            d="M0.424302 64.0518C0.386343 29.4378 29.5648 1.97131 64.1134 4.09959L755.767 46.7071C787.384 48.6548 812.041 74.8458 812.078 106.523L813.419 1247.96C813.457 1279.98 788.35 1306.39 756.373 1307.96L64.7135 1342.05C30.4841 1343.74 1.79776 1316.46 1.76017 1282.19L0.424302 64.0518Z"
            fill={mainColor}
          />
          <path
            d="M63.9791 5.21128L756.263 47.8247C787.381 49.7402 811.638 75.5361 811.638 106.713L811.638 1247.98C811.638 1279.44 786.958 1305.36 755.539 1306.91L63.2561 1341C29.5726 1342.66 1.35425 1315.79 1.35425 1282.07V64.0998C1.35425 30.0893 30.0329 3.12173 63.9791 5.21128Z"
            stroke="url(#paint0_linear_1437_7448)"
            strokeWidth="2"
          />
          <g filter="url(#filter0_f_1437_7448)">
            <ellipse
              rx="273.5"
              ry="263.444"
              transform="matrix(1 0 0 -1 47.5 85.6024)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter1_f_1437_7448)">
            <ellipse
              rx="216.379"
              ry="211.772"
              transform="matrix(1 0 0 -1 767 1214.94)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter2_f_1437_7448)">
            <ellipse
              rx="267.524"
              ry="256.904"
              transform="matrix(1 0 0 -1 830 517.213)"
              fill={secondaryColor}
              fillOpacity="0.12"
            />
          </g>
          <g filter="url(#filter3_f_1437_7448)">
            <ellipse
              rx="208.871"
              ry="207.651"
              transform="matrix(1 0 0 -1 747 164.884)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1437_7448"
            x="-306"
            y="-257.844"
            width="707"
            height="686.891"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter1_f_1437_7448"
            x="470.621"
            y="923.164"
            width="592.757"
            height="583.543"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter2_f_1437_7448"
            x="392.476"
            y="90.3086"
            width="875.049"
            height="853.809"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <filter
            id="filter3_f_1437_7448"
            x="368.129"
            y="-212.766"
            width="757.741"
            height="755.301"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1437_7448"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1437_7448"
            x1="-276.172"
            y1="-132.957"
            x2="1639.49"
            y2="683.34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.500947" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const SvgBackXxs = ({ mainColor, secondaryColor }) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 814 1701"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1450_7469"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="3"
          width="814"
          height="1695"
        >
          <path
            d="M0.925293 63.9787C0.925293 29.3918 30.09 1.96709 64.6116 4.09204L756.902 46.7055C788.548 48.6535 813.216 74.8866 813.216 106.592L813.216 1603.15C813.216 1635.14 788.118 1661.51 756.167 1663.08L63.8763 1697.17C29.6219 1698.86 0.925293 1671.54 0.925293 1637.24V63.9787Z"
            fill={mainColor}
          />
        </mask>
        <g mask="url(#mask0_1450_7469)">
          <path
            d="M0.980694 64.0372C0.950672 29.4286 30.1267 1.97075 64.6698 4.09869L756.323 46.7062C787.947 48.6542 812.605 74.8544 812.634 106.538L814.005 1603.32C814.035 1635.33 788.93 1661.72 756.959 1663.3L65.299 1697.39C31.0642 1699.07 2.37537 1671.79 2.34564 1637.51L0.980694 64.0372Z"
            fill={mainColor}
          />
          <path
            d="M64.4887 6.20939L756.772 48.8228C787.363 50.7058 811.209 76.0645 811.209 106.713L811.209 1603.47C811.209 1634.39 786.948 1659.88 756.061 1661.4L63.778 1695.49C30.6654 1697.12 2.92529 1670.71 2.92529 1637.56V64.0998C2.92529 30.6658 31.1179 4.15525 64.4887 6.20939Z"
            stroke="url(#paint0_linear_1450_7469)"
            strokeWidth="4"
          />
          <g filter="url(#filter0_f_1450_7469)">
            <ellipse
              rx="273.5"
              ry="263.444"
              transform="matrix(1 0 0 -1 48.071 85.6024)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter1_f_1450_7469)">
            <ellipse
              rx="216.379"
              ry="211.772"
              transform="matrix(1 0 0 -1 767.571 1214.94)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
          <g filter="url(#filter2_f_1450_7469)">
            <ellipse
              rx="334.876"
              ry="321.582"
              transform="matrix(1 0 0 -1 607.244 1537.34)"
              fill={secondaryColor}
              fillOpacity="0.12"
            />
          </g>
          <g filter="url(#filter3_f_1450_7469)">
            <ellipse
              rx="241.688"
              ry="240.277"
              transform="matrix(1 0 0 -1 780.389 132.258)"
              fill={secondaryColor}
              fillOpacity="0.2"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1450_7469"
            x="-305.429"
            y="-257.844"
            width="707"
            height="686.891"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_1450_7469"
            />
          </filter>
          <filter
            id="filter1_f_1450_7469"
            x="471.193"
            y="923.164"
            width="592.757"
            height="583.543"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40"
              result="effect1_foregroundBlur_1450_7469"
            />
          </filter>
          <filter
            id="filter2_f_1450_7469"
            x="102.369"
            y="1045.76"
            width="1009.75"
            height="983.164"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1450_7469"
            />
          </filter>
          <filter
            id="filter3_f_1450_7469"
            x="368.7"
            y="-278.02"
            width="823.377"
            height="820.555"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="85"
              result="effect1_foregroundBlur_1450_7469"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1450_7469"
            x1="-275.601"
            y1="-132.957"
            x2="1640.06"
            y2="683.341"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.500947" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const SvgBack = ({ color, isChange }) => {
  const colorsList = {
    [COLORS.BLUE]: { main: colors.asset_b, secondary: colors.light_asset_b },
    [COLORS.GREEN]: { main: colors.asset_g, secondary: colors.light_asset_g },
    [COLORS.RED]: { main: colors.asset_r, secondary: colors.light_asset_r },
    [COLORS.YELLOW]: { main: colors.asset_y, secondary: colors.light_asset_y },
    [COLORS.PURPLE]: {
      main: colors.asset_pr,
      secondary: colors.light_asset_pr,
    },
  };
  const mainColor = colorsList[color].main;
  const secondaryColor = colorsList[color].secondary;
  const [svg, setSvg ] = useState<string>('2xl');
  const svgByScreen = {
    "2xl": <SvgBack2xl mainColor={mainColor} secondaryColor={secondaryColor} />,
    xl: <SvgBackXl mainColor={mainColor} secondaryColor={secondaryColor} />,
    lg: <SvgBackLg mainColor={mainColor} secondaryColor={secondaryColor} />,
    md: <SvgBackMd mainColor={mainColor} secondaryColor={secondaryColor} />,
    sm: <SvgBackSm mainColor={mainColor} secondaryColor={secondaryColor} />,
    xs: <SvgBackXs mainColor={mainColor} secondaryColor={secondaryColor} />,
    none: <SvgBackXxs mainColor={mainColor} secondaryColor={secondaryColor} />,
  } as const;



  useEffect(() => {
    const generateSvg = () => {
      if(innerWidth >1600){
        setSvg('2xl');
      }else if(innerWidth > 1280){
        setSvg('xl');
      }else if(innerWidth > 1024){
        setSvg('lg');
      }else if(innerWidth > 768){
        setSvg('md');
      }else if(innerWidth > 640){
        setSvg('sm');
      }else if(innerWidth > 390){
        setSvg('xs');
      }else {
        setSvg('none');
      }
    }
    generateSvg();
    window.addEventListener('resize', () => {
      generateSvg()
    })
  }, [])
  return <div className="absolute w-full z-0"><Animation mode='popLayout' name='opacity' isChange={isChange}>{svgByScreen[svg]}</Animation></div>;
};

export default SvgBack;