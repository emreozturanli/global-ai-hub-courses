export interface IAllCourse {
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
    content: Content
    author: number
    featured_media: number
    menu_order: number
    template: string
    categories: any[]
    tags: any[]
    ld_course_category: any[]
    ld_course_tag: any[]
    materials_enabled: boolean
    materials: Materials
    certificate: number
    exam_challenge: number
    disable_content_table: boolean
    lessons_per_page: boolean
    lesson_per_page_custom: number
    topic_per_page_custom: number
    price_type: string
    price_type_paynow_price: string
    price_type_paynow_enrollment_url: string
    price_type_subscribe_price: string
    trial_price: string
    price_type_subscribe_enrollment_url: string
    price_type_closed_price: string
    price_type_closed_custom_button_url: string
    prerequisite_enabled: boolean
    prerequisite_compare: string
    prerequisites: string[]
    points_enabled: boolean
    points_access: string
    points_amount: string
    progression_disabled: boolean
    expire_access: boolean
    expire_access_days: number
    expire_access_delete_progress: boolean
    _links: Links
  }
  
  export interface Guid {
    rendered: string
  }
  
  export interface Title {
    rendered: string
  }
  
  export interface Content {
    rendered: string
    protected: boolean
  }
  
  export interface Materials {
    rendered: string
  }
  
  export interface Links {
    self: Self[]
    collection: Collection[]
    about: About[]
    author: Author[]
    "version-history": VersionHistory[]
    "predecessor-version": PredecessorVersion[]
    "price-types": Type[]
    prerequisites: Prerequisite[]
    steps: Step[]
    users: User[]
    groups: Group[]
    "wp:featuredmedia": Featuredmedum[]
    "wp:attachment": WpAttachment[]
    "wp:term": WpTerm[]
    curies: Cury[]
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
  
  export interface VersionHistory {
    count: number
    href: string
  }
  
  export interface PredecessorVersion {
    id: number
    href: string
  }
  
  export interface Type {
    embeddable: boolean
    href: string
  }
  
  export interface Prerequisite {
    embeddable: boolean
    href: string
  }
  
  export interface Step {
    embeddable: boolean
    href: string
  }
  
  export interface User {
    embeddable: boolean
    href: string
  }
  
  export interface Group {
    embeddable: boolean
    href: string
  }
  
  export interface Featuredmedum {
    embeddable: boolean
    href: string
  }
  
  export interface WpAttachment {
    href: string
  }
  
  export interface WpTerm {
    taxonomy: string
    embeddable: boolean
    href: string
  }
  
  export interface Cury {
    name: string
    href: string
    templated: boolean
  }
  