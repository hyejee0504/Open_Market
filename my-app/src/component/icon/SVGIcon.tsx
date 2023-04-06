export type SvgIconId =
  | 'icon-check-on'
  | 'icon-check-off'
  | 'icon-shopping-cart'
  |'icon-user'
  |'icon-swiper-2'
  |'icon-fb'
  |'icon-swiper-1'
  |'icon-insta'
  |'logo-hodu'
  |'icon-plus-line'
  |'icon-yt'
  |'icon-minus-line'
  |'icon-plus'
  |'icon-down-arrow'
  |'icon-up-arrow'
  | "check-fill-box"
  | "check-box"

 interface SvgIconProps {
  id: SvgIconId | string;
  label?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  alt?: string;
}

function SVGIcon({id, label=undefined, width=24, height=24, alt, fill = 'currentColor'}: SvgIconProps) {
    return (
        <svg display="inline-block" width={width} height={height} aria-label={alt}  fill="transparent">
            <use display="inline-block" width={width} height={height} href={`#${id}`} />
        </svg>
    )
}

//<SVGIcon id='icon-check-on' width="20" />
export {SVGIcon}