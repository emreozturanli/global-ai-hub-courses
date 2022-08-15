export interface IExtraInfo {
    id: number
    date: string
    date_gmt: string
    guid: Guid
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: Title
    author: number
    comment_status: string
    ping_status: string
    template: string
    meta: any[]
    acf: any[]
    description: Description
    caption: Caption
    alt_text: string
    media_type: string
    mime_type: string
    media_details: MediaDetails
    post: number
    source_url: string
    _links: Links
  }
  
  export interface Guid {
    rendered: string
  }
  
  export interface Title {
    rendered: string
  }
  
  export interface Description {
    rendered: string
  }
  
  export interface Caption {
    rendered: string
  }
  
  export interface MediaDetails {
    width: number
    height: number
    file: string
    sizes: Sizes
    image_meta: ImageMeta
  }
  
  export interface Sizes {
    medium: Medium
    thumbnail: Thumbnail
    medium_large: MediumLarge
    "course-thumb": CourseThumb
    "post-thumbnail": PostThumbnail
    "gamipress-points": GamipressPoints
    "gamipress-achievement": GamipressAchievement
    "gamipress-rank": GamipressRank
    woocommerce_thumbnail: WoocommerceThumbnail
    woocommerce_single: WoocommerceSingle
    woocommerce_gallery_thumbnail: WoocommerceGalleryThumbnail
    shop_catalog: ShopCatalog
    shop_single: ShopSingle
    shop_thumbnail: ShopThumbnail
    full: Full
  }
  
  export interface Medium {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface Thumbnail {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface MediumLarge {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface CourseThumb {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface PostThumbnail {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface GamipressPoints {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface GamipressAchievement {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface GamipressRank {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface WoocommerceThumbnail {
    file: string
    width: number
    height: number
    uncropped: boolean
    mime_type: string
    source_url: string
  }
  
  export interface WoocommerceSingle {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface WoocommerceGalleryThumbnail {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface ShopCatalog {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface ShopSingle {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface ShopThumbnail {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface Full {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
  }
  
  export interface ImageMeta {
    aperture: string
    credit: string
    camera: string
    caption: string
    created_timestamp: string
    copyright: string
    focal_length: string
    iso: string
    shutter_speed: string
    title: string
    orientation: string
    keywords: any[]
  }
  
  export interface Links {
    self: Self[]
    collection: Collection[]
    about: About[]
    author: Author[]
    replies: Reply[]
  }
  
  export interface Self {
    href: string
  }
  
  export interface Collection {
    href: string
  }
  
  export interface About {
    href: string
  }
  
  export interface Author {
    embeddable: boolean
    href: string
  }
  
  export interface Reply {
    embeddable: boolean
    href: string
  }
  