// eslint-disable-next-line no-shadow
export enum ClassType {
  LIVE = 'live',
  CLASS = 'class',
}

export interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: ClassType;
}

export interface IGetLessonsQueryResponse {
  lessons: Array<{
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: ClassType;
  }>;
}
