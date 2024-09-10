export const StyleProperties = {
    colorPrimary500: '#333333',
    colorSecondary: '#dd2726',
    colorTextLight: '#ffffff',
    colorBackground: '#e5e5e5',
    colorBackgroundSection: '#ffffff',
    borderRadius: '8px',
    paddingHorizontal: '2vw',
    paddingVertical: '2vw',
    marginHorizontalSmall: '0px',
    marginHorizontalBig: '60px',
    breakpoints: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        tabletL: '860px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px',
    },
};

export const Devices = {
    mobileS: `(min-width: ${StyleProperties.breakpoints.mobileS})`,
    mobileM: `(min-width: ${StyleProperties.breakpoints.mobileM})`,
    mobileL: `(min-width: ${StyleProperties.breakpoints.mobileL})`,
    tablet: `(min-width: ${StyleProperties.breakpoints.tablet})`,
    laptop: `(min-width: ${StyleProperties.breakpoints.laptop})`,
    laptopL: `(min-width: ${StyleProperties.breakpoints.laptopL})`,
    desktop: `(min-width: ${StyleProperties.breakpoints.desktop})`,
    desktopL: `(min-width: ${StyleProperties.breakpoints.desktop})`,
};

export const SizeConstants = {
    headerHeight: '55px',
    odsMenuWidth: '60px',
    headerMinimumWidth: '893px',
};

export const mazSizeDevice = {
    mobileS: `(max-width: ${StyleProperties.breakpoints.mobileS})`,
    mobileM: `(max-width: ${StyleProperties.breakpoints.mobileM})`,
    mobileL: `(max-width: ${StyleProperties.breakpoints.mobileL})`,
    tablet: `(max-width: ${StyleProperties.breakpoints.tablet})`,
    tabletL: `(max-width: ${StyleProperties.breakpoints.tabletL})`,
    laptop: `(max-width: ${StyleProperties.breakpoints.laptop})`,
    laptopL: `(max-width: ${StyleProperties.breakpoints.laptopL})`,
    desktop: `(max-width: ${StyleProperties.breakpoints.desktop})`,
    desktopL: `(max-width: ${StyleProperties.breakpoints.desktop})`,
};

export const minSizeDevice = {
    mobileS: `(min-width: ${StyleProperties.breakpoints.mobileS})`,
    mobileM: `(min-width: ${StyleProperties.breakpoints.mobileM})`,
    mobileL: `(min-width: ${StyleProperties.breakpoints.mobileL})`,
    tablet: `(min-width: ${StyleProperties.breakpoints.tablet})`,
    tabletL: `(min-width: ${StyleProperties.breakpoints.tabletL})`,
    laptop: `(min-width: ${StyleProperties.breakpoints.laptop})`,
    laptopL: `(min-width: ${StyleProperties.breakpoints.laptopL})`,
    desktop: `(min-width: ${StyleProperties.breakpoints.desktop})`,
    desktopL: `(min-width: ${StyleProperties.breakpoints.desktop})`,
};

export const MarginConstants = {
    reportPopupTop: '59px',
};
