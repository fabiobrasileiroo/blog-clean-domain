import { CreateQuestionUseCase } from './create-question';
import { InMemoryQuestionsRepository } from '@/test/repositories/in-memory-questions-repository';
import { GetQuestionBySlugUseCase } from './get-question-by-slug';
import { Question } from '../../enterprise/entities/question';
import { Slug } from '../../enterprise/entities/value-objects/slug';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository);
    // sut = system under test
  });

  test('should be able to create a question', async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID(),
      title: 'Example question',
      slug: Slug.create('example-question'),
      content: 'Example content'
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'example-question'
    });

    expect(question.id).toBeTruthy();
    expect(question.title).toEqual(newQuestion.title)
  });
});
