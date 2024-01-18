const getOS = () => {
    const platform = window.navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    if (macosPlatforms.includes(platform)) {
        return "macos";
    } else if (windowsPlatforms.includes(platform)) {
        return "windows";
    } else {
        return "unknown";
    }
};
export default getOS;
