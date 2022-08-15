import { IAllCourse } from "./allCoursesInterfaces";

export interface IAppContext {
    myCourses: IMyCourse[]
    allCourses: IAllCourse[]
    myCourseBtn: boolean
    setMyCourseBtn : React.Dispatch<React.SetStateAction<boolean>>
}

export interface ICategory {
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
    term_order: string;
}

export interface ITag {
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
    term_order: string;
}

export interface IMyCourse {
    id: number;
    title: string;
    link: string;
    description: string;
    is_enrolled: boolean;
    price: string;
    card_image: string;
    categories: ICategory[];
    tags: ITag[];
}