const getLogoURL = (name: string) => {
  const ext = "svg";
  const fileName = new URL(
    `../../assets/complogo/${name}.${ext}`,
    import.meta.url
  ).href;
  return fileName;
};

const getImageURL = (name: string) => {
  const ext = "png";
  const fileName = new URL(
    `../../assets/clientpic/${name}.${ext}`,
    import.meta.url
  ).href;
  return fileName;
};

const getHwItWrk = (name: string) => {
  const ext = "svg";
  const fileName = new URL(
    `../../assets/howitworks/${name}.${ext}`,
    import.meta.url
  ).href;
  return fileName;
};

const getEmployee = (name: string) => {
  const ext = "jpg";
  const fileName = new URL(
    `../../assets/employees/${name}.${ext}`,
    import.meta.url
  ).href;
  return fileName;
};

export { getLogoURL, getImageURL, getHwItWrk, getEmployee };
