/* eslint-disable import/no-duplicates */
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import {
  BoxContent,
  BoxHeader,
  BoxText,
  BoxTextLesson,
  Description,
  Link,
  SupportingText,
  Text,
} from '.';
import { ClassType, ILessonProps } from '../../interfaces/lessonProps';

export default function Lesson({ title, availableAt, type }: ILessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' | 'd' de 'MMMM' | 'k'h'mm",
    {
      locale: ptBR,
    },
  );

  return (
    <Link href="#section">
      <Text>{availableDateFormatted}</Text>

      <BoxContent>
        <BoxHeader>
          {isLessonAvailable ? (
            <>
              <CheckCircle size={20} color="#ffffff" />
              <BoxText>Conteúdo liberado</BoxText>
            </>
          ) : (
            <>
              <Lock size={20} color=" #2563EB" />
              <BoxTextLesson>Em Breve</BoxTextLesson>
            </>
          )}

          <SupportingText>
            {type === ClassType.LIVE ? 'AO VIVO' : 'AULA PRÁTICA'}
          </SupportingText>
        </BoxHeader>

        <Description>{title}</Description>
      </BoxContent>
    </Link>
  );
}
