const Svg = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 432 849"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-1.32513e-05 779.76C-9.95214e-06 742.022 30.5924 711.43 68.33 711.43C95.0419 711.43 118.174 726.758 129.41 749.097C131.274 752.802 134.928 755.397 139.075 755.397L236.269 755.397C316.748 755.397 381.989 690.155 381.99 609.676L381.99 25.6094C381.99 11.7994 393.185 0.604162 406.995 0.604164C420.805 0.604165 432 11.7994 432 25.6094L432 609.676C432 717.775 344.368 805.407 236.269 805.407L138.421 805.407C134.348 805.407 130.743 807.912 128.847 811.517C117.413 833.261 94.6034 848.09 68.33 848.09C30.5924 848.09 -1.65504e-05 817.497 -1.32513e-05 779.76ZM45.0094 779.76C45.0094 766.88 55.4504 756.439 68.33 756.439C81.2095 756.439 91.6505 766.88 91.6505 779.76C91.6505 792.639 81.2095 803.08 68.33 803.08C55.4504 803.08 45.0094 792.639 45.0094 779.76Z"
          fill="url(#paint0_linear_1626_3696)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1626_3696"
            x1="396.682"
            y1="293.173"
            x2="65.3923"
            y2="858.919"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00FFFF" />
            <stop offset="1" stopColor="#0C68BD" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const SvgMobile = () => {
  return (
    <>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 433 1106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.499243 1036.72C0.499246 998.983 31.0916 968.391 68.8292 968.391C95.5411 968.391 118.673 983.718 129.91 1006.06C131.773 1009.76 135.427 1012.36 139.574 1012.36L236.769 1012.36C317.248 1012.36 382.489 947.116 382.489 866.637L382.489 25.5703C382.489 11.7602 393.684 0.565182 407.494 0.565183C421.304 0.565185 432.499 11.7603 432.499 25.5703L432.499 866.637C432.499 974.736 344.868 1062.37 236.769 1062.37L138.92 1062.37C134.848 1062.37 131.242 1064.87 129.347 1068.48C117.913 1090.22 95.1027 1105.05 68.8292 1105.05C31.0916 1105.05 0.49924 1074.46 0.499243 1036.72ZM45.5087 1036.72C45.5087 1023.84 55.9497 1013.4 68.8292 1013.4C81.7088 1013.4 92.1498 1023.84 92.1498 1036.72C92.1498 1049.6 81.7088 1060.04 68.8292 1060.04C55.9496 1060.04 45.5087 1049.6 45.5087 1036.72Z" fill="url(#paint0_linear_1663_3249)" />
        <defs>
          <linearGradient id="paint0_linear_1663_3249" x1="397.18" y1="550.136" x2="65.8924" y2="1115.88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00FFFF" />
            <stop offset="1" stopColor="#0C68BD" />
          </linearGradient>
        </defs>
      </svg>

    </>
  )
}

const Stage3 = ({ calculDimensionSvg, screen }) => {
  return (<>
    {
      screen == 'laptop' ? <Stage3Laptop calculDimensionSvg={calculDimensionSvg}/> : <Stage3Mobile calculDimensionSvg={calculDimensionSvg}/>
    }
  </>)
}

const Stage3Laptop = ({ calculDimensionSvg }) => {
  const { width, height } = calculDimensionSvg(432, 849);

  return (
    <>
      <div className='relative left-[1px] xl:left-0' style={{ width: `${width}px`, height: `${height}px` }}>
        <Svg />
      </div>
    </>
  );
};

const Stage3Mobile = ({ calculDimensionSvg }) => {
  const { width, height } = calculDimensionSvg(433, 1106);

  return (
    <>
    <div className="right-[1px] sm:right-0 relative sm:block" style={{ width: `${width}px`, height: `${height}px` }}>
        <SvgMobile />
      </div>
    </>
  )
}

export default Stage3;
