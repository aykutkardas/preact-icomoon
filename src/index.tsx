import { createElement } from "preact";

type IconSetItem = {
  properties: {
    name: string;
  };
  icon: {
    paths: string[];
    attrs?: Object[];
    width?: number | string;
  };
};

type IconSet = {
  icons: IconSetItem[];
};

export interface IconProps extends SVGElement {
  icon: string;
  size?: string | number;
  title?: string;
  disableFill?: boolean;
  removeInlineStyle?: boolean;
}

interface IcoMoonProps extends IconProps {
  iconSet: IconSet;
}

const IcoMoon = ({
  iconSet,
  icon,
  size,
  title,
  disableFill,
  removeInlineStyle,
  ...props
}: IcoMoonProps) => {
  if (!iconSet || !icon) return null;

  const currentIcon = iconSet.icons.find(
    (item) => item.properties.name === icon
  );

  if (!currentIcon) return null;

  const initialStyle = {
    display: "inline-block",
    stroke: "currentColor",
    fill: "currentColor",
  };

  const comptuedStyle = {
    ...(removeInlineStyle ? {} : initialStyle),
    ...(size ? { width: size, height: size } : {}),
    ...(props.style || {}),
  };

  const { width = "1024" } = currentIcon.icon;

  const viewBox = `0 0 ${width} 1024`;

  const children = currentIcon.icon.paths.map((path, index) => {
    const attrs = currentIcon.icon.attrs?.[index];

    const pathProps = {
      d: path,
      key: icon + index,
      ...(!disableFill && attrs ? attrs : {}),
    };

    return createElement("path", pathProps);
  });

  if (title) {
    children.push(createElement("title", { key: title }, title));
  }

  // @ts-ignore [TODO]: Fix this!
  return createElement(
    "svg",
    { ...props, viewBox, style: comptuedStyle },
    children
  );
};

export const iconList = (iconSet: IconSet) => {
  if (!iconSet || !Array.isArray(iconSet.icons)) return null;

  return iconSet.icons.map((icon) => icon.properties.name);
};

export default IcoMoon;
