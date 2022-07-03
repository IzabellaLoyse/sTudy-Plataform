import { gql, useQuery } from '@apollo/client';
import { ContentLesson, SidebarRight, Title } from '.';
import { IGetLessonsQueryResponse } from '../../interfaces/lessonProps';
import Lesson from '../Lesson/Lesson';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      lessonType
      availableAt
    }
  }
`;

export default function Sidebar() {
  const { data } = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <SidebarRight>
      <Title>Cronograma de aulas</Title>

      <ContentLesson>
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </ContentLesson>
    </SidebarRight>
  );
}
