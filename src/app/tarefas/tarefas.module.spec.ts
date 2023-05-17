import { TarefaModule } from './tarefas.module';

describe('TarefaModule', () => {
  let tarefaModule: TarefaModule;

  beforeEach(() => {
    tarefaModule = new TarefaModule();
  });

  it('should create an instance', () => {
    expect(tarefaModule).toBeTruthy();
  });
});