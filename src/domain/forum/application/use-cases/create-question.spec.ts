import { QuestionsRepository } from '../repositories/questions-repository';
import { CreateQuestionUseCase } from './create-question';
import { Question } from '../../enterprise/entities/question';

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    return;
  },
};

test('create an answer', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository);

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova resposta',
    content: 'Conteúdo da pergunta',
  });

  expect(question.id).toBeTruthy();
});
